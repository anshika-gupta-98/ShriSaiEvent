"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "@/Components/Shared/ImageModal";
import TextClamp from "../Shared/TextClamp";
import { FiArrowRight } from "react-icons/fi";

export default function About({ data }) {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="relative bg-[var(--overlay-light)] py-4 lg:py-8  overflow-hidden">

      <div className="container-wrapper grid lg:grid-cols-12 gap-0 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative h-[320px] md:h-[500px] lg:h-[600px] cursor-pointer"
          onClick={() => setModalImage(data.image)}
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />

          {/* GOLD EDGE LINE */}
          <div className="absolute right-0 top-0 w-[4px] h-full bg-[var(--secondary-gold)]"></div>
        </motion.div>

        {/* 🔥 CONTENT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-[var(--text-light)] px-6 md:px-12 py-16 
          relative lg:-ml-20 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        >          

          {/* TITLE */}
          <h2 className="theme-h1 text-[var(--primary-dark)] mb-6 leading-tight">
            {data.title}
          </h2>

          {/* LINE */}
          <div className="w-16 h-[3px] bg-[var(--secondary-gold)] mb-6"></div>

          {/* DESCRIPTION */}
          {Array.isArray(data.description) ? (
            <ul className="space-y-4">
              {data.description.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--secondary-gold)]"></span>
                  <p className="leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="leading-relaxed">
              <TextClamp text={data.description} />
            </div>
          )}

          {/* CTA */}
          {data.type === "cta" && (
            <Link
              href={data.link || "/contact"}
              className="btn-primary mt-8 px-8 py-3 rounded-full shadow-md group"
            >
              <span>{data.buttonText}</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}

        </motion.div>

      </div>

      {/* 🔥 IMAGE MODAL */}
      {modalImage && (
        <ImageModal
          images={[{ image: modalImage }]}
          index={0}
          setIndex={() => {}}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import ImageModal from "../Shared/ImageModal";

export default function Gallery({ images }) {
  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentImages = images.slice(start, start + ITEMS_PER_PAGE);
  const firstImage = currentImages[0];
  const restImages = currentImages.slice(1);

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">

      {/* HERO + GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* BIG IMAGE */}
        {firstImage && (
          <motion.div
            className="lg:col-span-2 relative group rounded-3xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              setSelectedIndex(
                images.findIndex((img) => img.id === firstImage.id)
              )
            }
          >
            <div className="relative h-[420px]">
              <Image
                src={firstImage.image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="100vw"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <FiPlus className="text-white text-4xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition duration-300" />
            </div>
          </motion.div>
        )}

        {/* SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {restImages.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() =>
                setSelectedIndex(
                  images.findIndex((img) => img.id === item.id)
                )
              }
            >
              <div className="relative h-[200px]">
                <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-110" />
              </div>

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <FiPlus className="text-white text-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BELOW GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {restImages.slice(4).map((item) => (
          <motion.div
            key={item.id}
            className="relative group rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() =>
              setSelectedIndex(
                images.findIndex((img) => img.id === item.id)
              )
            }
          >
            <div className="relative h-[260px]">
              <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-110" />
            </div>

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <FiPlus className="text-white text-xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 PREMIUM PAGINATION */}
      <div className="flex justify-center mt-16 gap-4 flex-wrap">

        {/* PREV */}
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow hover:shadow-lg transition disabled:opacity-40 cursor-pointer" 
        >
          ←
        </button>

        {/* NUMBERS */}
        {[...Array(totalPages)].map((_, i) => {
          const isActive = page === i + 1;

          return (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className="relative group"
            >
              {/* Glow */}
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37] to-yellow-400 blur-md opacity-70"></span>
              )}

              {/* Button */}
              <span
                className={`relative z-10 px-5 py-2 rounded-full font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105"
                    : "bg-white/70 backdrop-blur-md border border-gray-200 text-gray-600 hover:text-black hover:scale-105"
                }`}
              >
                {i + 1}
              </span>
            </button>
          );
        })}

        {/* NEXT */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow hover:shadow-lg transition disabled:opacity-40 cursor-pointer"
        >
          →
        </button>
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <ImageModal
          images={images}
          index={selectedIndex}
          setIndex={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials({ data }) {
  const [index, setIndex] = useState(0);
  const current = data[index];

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] md:min-h-[550px] lg:min-h-[600px] py-16 md:py-24 overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/our-services/open1.jpg"
          alt="bg"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-dark)]/40 via-[var(--primary-dark)]/30 to-[var(--primary-dark)]/50"></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-[var(--gold-glow)] blur-[120px] rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-16 text-center">

        <h2 className="relative inline-block theme-h2 serif-title text-[var(--text-light)] tracking-widest mb-12 ">

          <span className="relative z-10 px-6 py-2">
            WHAT PEOPLE SAY
          </span>

          <span className="absolute inset-0 bg-[var(--overlay-light)] backdrop-blur-sm rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto bg-[var(--text-light)]/90 text-[var(--primary-dark)] rounded-2xl p-10 shadow-2xl">

          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--secondary-gold)]">
              <Image
                src={current.image}
                alt={current.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative mb-4">

            <span className="text-5xl absolute -left-6 top-0 text-[var(--secondary-gold)] opacity-80 font-bold drop-shadow-md">
              “
            </span>

            <span className="text-5xl absolute -right-6 bottom-0 text-[var(--secondary-gold)] opacity-80 font-bold drop-shadow-md">
              ”
            </span>

            <p className="leading-relaxed px-4  text-[var(--primary-dark)]">
              {current.feedback}
            </p>
          </div>

          {/* NAME */}
          <h4 className="mt-4 theme-h4 text-[var(--secondary-gold)] tracking-wide">
            {current.name}
          </h4>

        </div>

        <div className="flex sm:hidden absolute inset-0 items-center justify-between px-3 z-30">

          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + data.length) % data.length)
            }
            className="p-2 rounded-full bg-[var(--primary-dark)]/70 text-[var(--text-light)] shadow-md backdrop-blur-md"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % data.length)
            }
            className="p-2 rounded-full bg-[var(--primary-dark)]/70 text-[var(--text-light)] shadow-md backdrop-blur-md"
          >
            <FiChevronRight className="text-xl" />
          </button>

        </div>

        <div className="hidden sm:flex justify-center gap-6 mt-8 text-[var(--text-light)]">
          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + data.length) % data.length)
            }
            className="p-3 rounded-full border border-[var(--text-light)]/60 bg-[var(--primary-dark)]/30 backdrop-blur-md 
            hover:bg-[var(--secondary-gold)] hover:text-black transition duration-300 shadow-md cursor-pointer"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % data.length)
            }
            className="p-3 rounded-full border border-[var(--text-light)]/60 bg-[var(--primary-dark)]/30 backdrop-blur-md 
            hover:bg-[var(--secondary-gold)] hover:text-black transition duration-300 shadow-md cursor-pointer"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {data.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index
                  ? "bg-[var(--secondary-gold)] cursor-pointer"
                  : "bg-[var(--text-light)]/40 cursor-pointer"
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}
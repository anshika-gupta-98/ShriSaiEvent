"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

export default function ImageModal({
  images,
  index,
  setIndex,
  onClose,
}) {

  const currentImage = images?.[index]?.image;
  const isMultiple = images?.length > 1;

  if (typeof window === "undefined" || index === null || index < 0) return null;

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // 🔥 Keyboard Support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);



  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-lg flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* IMAGE */}
        <motion.div
          key={images[index]?.image}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full flex items-center justify-center px-6"
        >

          {currentImage && (
            <Image
              src={currentImage}
              alt="preview"
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
              priority
            />
          )}
        </motion.div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition cursor-pointer"
        >
          <IoClose />
        </button>

        {/* LEFT */}
        {isMultiple && (
          <button
            onClick={prev}
            className="absolute left-6 text-white text-4xl hover:scale-125 transition cursor-pointer"
          >
            <FiChevronLeft />
          </button>
        )}

        {/* RIGHT */}
        {isMultiple && (
          <button
            onClick={next}
            className="absolute right-6 text-white text-4xl hover:scale-125 transition cursor-pointer"
          >
            <FiChevronRight />
          </button>
        )}

        {/* COUNTER */}
        {isMultiple && (
          <button
            onClick={next}
            className="absolute right-6 text-white text-4xl hover:scale-125 transition cursor-pointer"
          >
            <FiChevronRight />
          </button>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
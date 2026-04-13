"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ScrollButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center"
      >
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-[var(--secondary-gold)]/20 blur-xl"></span>

        {/* Button */}
        <div
          className="relative w-12 h-12 flex items-center justify-center rounded-full
          bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary-mid)]
          border border-[var(--secondary-gold)]/40
          text-[var(--secondary-gold)] text-lg
          backdrop-blur-md shadow-lg
          transition duration-300
          hover:scale-110 hover:shadow-[var(--gold-shadow)]
          active:scale-95 cursor-pointer"
        >
          {isScrolled ? <FaArrowUp /> : <FaArrowDown />}
        </div>

        {/* Tooltip */}
        <span className="absolute right-14 bg-[var(--primary-dark)]/80 text-[var(--text-light)] text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          {isScrolled ? "Back to Top" : "Scroll Down"}
        </span>
      </button>
    </div>
  );
}
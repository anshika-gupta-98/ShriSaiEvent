"use client";

import Image from "next/image";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageHero() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/") return "Home";

    return pathname
      .replace("/", "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = getTitle();

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px]">

      <Image
        src="/images/hero/pagehero.png"
        alt={title}
        fill
        sizes="100vw"
        priority
        className="object-cover object-center scale-105"
      />

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.6)_100%)]">
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <p className="script-subtitle text-[var(--secondary-gold)] text-lg md:text-xl mb-2 tracking-wide drop-shadow-md">
          Welcome to
        </p>

        <h2
          className="serif-title text-3xl md:text-5xl font-extrabold 
          text-[var(--secondary-gold)] tracking-wide 
          drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
        >
          {title}
        </h2>

        <div className="w-16 h-[2px] bg-[var(--secondary-gold)] mx-auto my-3 shadow-[0_0_12px_gold]"></div>

        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-white drop-shadow-md">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[var(--secondary-gold)] transition"
          >
            <FiHome />
            Home
          </Link>

          <span>/</span>

          <span className="text-[var(--secondary-gold)] font-medium">
            {title}
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
}
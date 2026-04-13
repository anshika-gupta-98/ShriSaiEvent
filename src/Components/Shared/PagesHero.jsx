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
        <section className="relative w-full overflow-hidden flex items-center justify-center
h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[420px]">

            {/* 🔥 IMAGE */}
            <Image
                src="/images/hero/hero3.png"
                alt={title}
                fill
                className="object-cover object-center scale-105 blur-[1.5px] brightness-90"
                priority
            />

            {/* 🔥 SOFT DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* 🔥 GOLD LIGHT FOCUS (center highlight) */}
            <div className="absolute inset-0 
  bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />

            {/* 🔥 CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 text-center px-4"
            >
                {/* SUBTITLE */}
                <p className="script-subtitle text-[var(--secondary-gold)] text-xl mb-2">
                    Welcome to
                </p>

                {/* TITLE */}
                <h2 className="serif-title text-3xl md:text-5xl font-extrabold text-[var(--secondary-gold)]  tracking-wide drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
                    {title}
                </h2>

                {/* GOLD LINE */}
                <div className="w-16 h-[2px] bg-[var(--secondary-gold)] mx-auto my-3"></div>

                {/* BREADCRUMB */}
                <div className="flex items-center justify-center gap-2 text-base text-white/90">
                    <Link href="/" className="flex items-center gap-1 hover:text-[var(--secondary-gold)] transition">
                        <FiHome />
                        Home
                    </Link>

                    <span>/</span>

                    <span className="text-[var(--secondary-gold)] font-medium">
                        {title}
                    </span>
                </div>
            </motion.div>

            {/* 🔥 BOTTOM FADE */}
            <div className="absolute bottom-0 left-0 w-full h-20 
  bg-gradient-to-t from-black/70 to-transparent"></div>
        </section>
    );
}
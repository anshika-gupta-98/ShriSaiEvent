"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function HomeHero({ data }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);

    const current = data[index];



    return (
        <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen flex items-end overflow-hidden">

            <Image
                key={current.image}
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="relative z-10 w-full px-6 md:px-16 pb-10 md:pb-16">

                <div className="max-w-2xl">

                    <h2 className="theme-h2 text-white mb-4">
                        {current.title}
                    </h2>

                    <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5">
                        {current.description}
                    </p>


                    <Link href={current.link} className="btn-primary">
                        {current.buttonText}
                        <FiArrowUpRight className="text-lg" />
                    </Link>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex gap-2 z-20">
                {data.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition ${i === index
                            ? "bg-[var(--secondary-gold)] scale-110"
                            : "bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { data } from "@/Data/global-content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/85 via-[var(--primary-mid)]/75 to-[var(--primary-dark)]/85"></div>

        <div className="absolute top-[-50px] left-[30%] w-[300px] h-[200px] bg-[var(--secondary-gold)]/20 blur-3xl rounded-full"></div>

        <div className="absolute inset-0 backdrop-blur-md bg-[var(--overlay-light)]"></div>
      </div>

      <div className="relative container-wrapper flex justify-between items-center">
        <div className="flex items-center gap-1 group">
          <Image
            src={data.logo}
            alt="logo"
            width={140}
            height={100}
            className="h-[50px] md:h-[75px] w-auto object-cover scale-180"
            priority
          />
          <div>
            <h1 className="theme-h1 tracking-wide font-[Playfair_Display]">
              <span className="text-[var(--secondary-gold)]">
                {data.name}
              </span>
            </h1>

            <p className="text-[var(--light-gray)] tracking-widest mt-1 text-xs sm:text-base">
              {data.tagline}
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[var(--light-gray)] font-semibold">
          {data.navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative transition duration-300 hover:text-[var(--secondary-gold)] hover:scale-105 active:scale-95 text-lg"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--secondary-gold)] transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}

          <Link href="/contact#contact-form">
            <button className="ml-4 px-6 py-2 rounded-full border border-[var(--secondary-gold)] text-[var(--secondary-gold)] font-semibold transition duration-300 hover:bg-[var(--secondary-gold)] hover:text-black hover:shadow-[var(--gold-shadow)] active:scale-95 cursor-pointer">
              Request Quote
            </button>
          </Link>
        </nav>

        <div className="lg:hidden text-[var(--text-light)]">
          <Menu size={28} onClick={() => setIsOpen(true)} />
        </div>
      </div>

      <div
        className={`fixed top-[68px] md:top-[90px]  right-0 h-[calc(100%-100px)] w-[75%] max-w-sm bg-gradient-to-b from-[var(--primary-dark)]/85 via-[var(--primary-mid)]/75 to-[var(--primary-dark)]/85 backdrop-blur-md px-6 py-8 z-40 transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>

        <div className="absolute top-10 right-10 w-40 h-40 bg-[var(--secondary-gold)]/20 blur-3xl rounded-full"></div>

        <div className="flex justify-end mb-6 relative z-10">
          <X size={32} onClick={() => setIsOpen(false)} className="text-[var(--text-light)] cursor-pointer" />
        </div>

        <div className="flex flex-col gap-6 text-[var(--light-gray)] relative z-10 font-bold ">
          {data.navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[var(--secondary-gold)] transition duration-300 text-base md:text-2xl"
            >
              {item.name}
            </Link>
          ))}

          <Link href="/contact#contact-form" onClick={() => setIsOpen(false)}>
            <button className="mt-4 px-4 md:px-6 py-2 rounded-full border border-[var(--secondary-gold)] text-[var(--secondary-gold)] font-semibold hover:bg-[var(--secondary-gold)] hover:text-black transition duration-300 text-base md:text-xl">
              Request Quote
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
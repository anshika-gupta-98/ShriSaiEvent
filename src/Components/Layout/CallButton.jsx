"use client";

import { useState } from "react";
import Link from "next/link";
import { data } from "@/Data/global-content";

export default function CallButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-5 bottom-16 z-50">

      <div className="relative flex items-center">

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-12 h-12 rounded-full 
          bg-gradient-to-r from-[var(--secondary-gold)] to-[var(--secondary-gold)]
          text-black shadow-lg 
          hover:scale-110 transition duration-300 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.84l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.84-.45l2.064.516A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>

        <div
          className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 
          transition-all duration-300
          ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
          md:opacity-100 md:translate-x-0`}
        >
          <div className="relative flex items-center">

            <span className="absolute left-[-6px] top-1/2 -translate-y-1/2 
            w-3 h-3 bg-[var(--secondary-gold)] rotate-45"></span>

            <Link
              href={`tel:${data.contact.phone}`}
              className="px-5 py-2 rounded-full 
              bg-[var(--secondary-gold)] text-black text-sm font-medium 
              shadow-md whitespace-nowrap"
            >
              {data.contact.phone}
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
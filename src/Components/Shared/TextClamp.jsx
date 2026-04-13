"use client";

import { useState, useRef, useEffect } from "react";

export default function TextClamp({ text }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // check if content overflows
    setIsClamped(el.scrollHeight > el.clientHeight);
  }, [text]);

  return (
    <div>
      <p
        ref={textRef}
        className={`text-gray-700 leading-relaxed text-lg transition-all duration-300 whitespace-normal
        ${expanded ? "" : "line-clamp-6 md:line-clamp-8 lg:line-clamp-none"}`}
      >
        {text}
      </p>

      {/* ✅ SHOW BUTTON ONLY IF TEXT IS LONG */}
      {isClamped && (
        <div className="mt-2 lg:hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--secondary-gold)] transition duration-300 cursor-pointer group"
          >
            {expanded ? "View Less" : "View More"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
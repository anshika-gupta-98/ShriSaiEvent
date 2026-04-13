"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";

export default function ServicesSection({ services }) {

  const featured = services.slice(0, 3);
  const explore = services.slice(3, 10);
  const detailed = services.slice(10, 14);

  return (
    <section className="bg-white text-[var(--text-gray)] py-14 md:py-20 px-4 md:px-8">

      <div className="container-wrapper">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featured.map((service) => (
            <SliderCard key={service.id} service={service} big />
          ))}
        </div>

        <div className="mb-20">
          <h2 className="theme-h2 mb-6">
            Explore More Services
          </h2>

          <div className="relative">

            {/* LEFT */}
            <button
              onClick={() => {
                document.getElementById("explore-scroll")?.scrollBy({
                  left: -320,
                  behavior: "smooth",
                });
              }}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 
              bg-[var(--text-light)] border border-[var(--light-gray)] shadow-md 
              rounded-full p-2 
              hover:bg-[var(--secondary-gold)] hover:text-[var(--text-light)] transition"
            >
              <ChevronLeftCircleIcon size={24} />
            </button>

            {/* RIGHT */}
            <button
              onClick={() => {
                document.getElementById("explore-scroll")?.scrollBy({
                  left: 320,
                  behavior: "smooth",
                });
              }}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 
              bg-[var(--text-light)] border border-[var(--light-gray)] shadow-md 
              rounded-full p-2 
              hover:bg-[var(--secondary-gold)] hover:text-[var(--text-light)] transition"
            >
              <ChevronRightCircleIcon size={24} />
            </button>

            {/* SCROLL */}
            <div
              id="explore-scroll"
              className="overflow-x-auto scroll-smooth no-scrollbar"
            >
              <div className="flex gap-6 animate-scroll">
                {[...explore, ...explore].map((service, i) => (
                  <div className="min-w-[300px] flex-shrink-0" key={i}>
                    <SliderCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED */}
        <div className="space-y-20">
          {detailed.map((service, i) => (
            <div
              key={`${service.id}-${i}`}
              className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 ? "md:flex-row-reverse" : ""
                }`}
            >
              <DetailedImage service={service} />

              <div className="md:w-[45%] relative">

                {/* 💎 GLASS CARD */}
                <div className="relative z-10  bg-white/80 backdrop-blur-xl border border-[var(--light-gray)]  rounded-3xl p-6 md:p-8  shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                  <h2 className="theme-h2 mb-3">
                    {service.title}
                  </h2>

                  <p className="mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--secondary-gold)] mt-1">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute -top-8 -left-8 w-40 h-40  bg-[var(--secondary-gold)]/10 rounded-full blur-3xl" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function SliderCard({ service, big }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const images = service.images?.filter(Boolean) || [];

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`group cursor-pointer relative overflow-hidden rounded-2xl 
        bg-[var(--overlay-light)] border border-[var(--light-gray)] 
        hover:border-[var(--secondary-gold)] 
        shadow-sm hover:shadow-[0_0_30px_var(--gold-glow)] transition 
        ${big ? "h-[380px]" : "h-[260px]"}`}
      >
        <Image
          src={images[index] || "/images/our-services/wedding1.jpg"}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-12 h-12 rounded-full bg-[var(--text-light)] flex items-center justify-center text-black text-2xl font-bold shadow-lg scale-75 group-hover:scale-100 transition">
            +
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-[var(--text-light)]">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm text-[var(--light-gray)]">
            {service.shortDesc}
          </p>
        </div>

        <div className="absolute bottom-2 right-3 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-[var(--text-light)]" : "bg-[var(--text-light)]/40"
                }`}
            />
          ))}
        </div>
      </div>

      {open && (
        <ImageModal
          images={images}
          index={index}
          setIndex={setIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}


function DetailedImage({ service }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const images = service.images?.filter(Boolean) || [];

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative w-full md:w-[55%] h-[360px] rounded-3xl overflow-hidden cursor-pointer
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      >
        <Image
          src={images[index]}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--secondary-gold)]" />

        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition">
          <div className="w-12 h-12 rounded-full bg-[var(--secondary-gold)] text-white flex items-center justify-center shadow-lg">
            +
          </div>
        </div>
      </div>

      {open && (
        <ImageModal
          images={images}
          index={index}
          setIndex={setIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}


function ImageModal({ images, index, setIndex, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl flex items-center justify-center">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[var(--text-light)] 
        bg-black/40 hover:bg-black/60 backdrop-blur-md 
        p-3 rounded-full transition cursor-pointer"
      >
        <IoClose size={24} />
      </button>

      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-6 text-[var(--text-light)] text-4xl cursor-pointer"
      >
        <ChevronLeftCircleIcon />
      </button>

      <div className="relative w-[95%] max-w-6xl h-[85vh] rounded-2xl overflow-hidden">
        <Image
          src={images[index]}
          alt="preview"
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-6 text-[var(--text-light)] text-4xl cursor-pointer"
      >
        <ChevronRightCircleIcon />
      </button>
    </div>
  );
}
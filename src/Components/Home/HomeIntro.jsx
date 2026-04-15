import Image from "next/image";
import Link from "next/link";
import TextClamp from "../Shared/TextClamp";
import { FiArrowRight } from "react-icons/fi";

export default function HomeIntro({ data }) {
  return (
    <section className="py-10 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-white">
      <div className="container-wrapper grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative flex justify-center order-2 lg:order-1">

          <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-full h-full rounded-3xl border-2 border-[var(--secondary-gold)] opacity-80"></div>

          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">

            <Image
              src={data.image}
              alt="event"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />

          </div>

          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-[var(--gold-glow)] blur-3xl rounded-full"></div>

        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[var(--secondary-gold)] text-2xl md:text-3xl mb-2 script-subtitle">
            {data.subtitle}
          </p>

          <h2 className="theme-h2 mb-6 leading-tight serif-title text-[var(--primary-dark)]">
            {data.title}
          </h2>

          <div className="mb-5 text-justify">
            <TextClamp text={data.description} />
          </div>

          <Link href="/contact" className="btn-primary">
            Plan Your Event
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
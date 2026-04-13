import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HomeServices({ services }) {
    return (
        <section className="py-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-white pb-14">
            <div className="container-wrapper">

                <div className="text-left lg:text-center mb-16">
                    <p className="text-(--secondary-gold) text-2xl mb-2 serif-subtitle ">
                        Our Services
                    </p>

                    <h2 className="theme-h2 text-[var(--primary-dark)] mb-4 leading-tight serif-title ">
                        Premium Event & Decoration Services
                    </h2>

                    <div className="w-16 h-[2px] bg-[var(--secondary-gold)] mb-5 lg:mx-auto"></div>
                    <p className="max-w-xl lg:mx-auto">
                        Explore our thoughtfully designed services crafted to make your celebrations elegant, memorable, and truly special.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group [perspective:1000px]">
                            <div className="relative w-full h-[400px] transition-transform duration-700 [transform-style:preserve-3d] [transform:rotateY(180deg)] lg:[transform:rotateY(0deg)] lg:group-hover:[transform:rotateY(180deg)]">

                                <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">

                                    <Image
                                        src={service.images[0]}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/40"></div>

                                    <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                                        <h3 className="theme-h3 tracking-wide border-t border-b border-white py-2">
                                            {service.title}
                                        </h3>
                                    </div>

                                </div>

                                <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">

                                    <Image
                                        src={service.images[0]}
                                        alt={service.title}
                                        fill
                                        className="object-cover blur-[1px] scale-105" />

                                    {/* DARK OVERLAY */}
                                    <div className="absolute inset-0 bg-black/60"></div>

                                    {/* CONTENT */}
                                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 gap-3 text-white">

                                        <h3 className="theme-h3">
                                            {service.title}
                                        </h3>

                                        <p className=" text-[var(--light-gray)] line-clamp-3">
                                            {service.shortDesc}
                                        </p>

                                        <Link
                                            href="/our-services"
                                            className="btn-primary mt-2 text-sm rounded-full px-5 py-2 hover:scale-105 group"
                                        >
                                            <span>View More</span>
                                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
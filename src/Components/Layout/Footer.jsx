import Image from "next/image";
import Link from "next/link";
import {
    FaEnvelope,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaRegCommentDots,
    FaWhatsapp,
} from "react-icons/fa";
import { data } from "@/Data/global-content";

export default function Footer() {

    const socialLinks = [
        {
            icon: FaInstagram,
            link: data.socialLinks[0].link,
            label: "Instagram",
        },
        {
            icon: FaWhatsapp,
            link: data.socialLinks[1].link,
            label: "WhatsApp",
        },
        {
            icon: FaRegCommentDots,
            link: data.socialLinks[2].link,
            label: "Enquiry",
        },
    ];

    return (
        <footer className="relative bg-[var(--footer-bg)] text-[var(--light-gray)] pt-8 lg:pt-14 pb-8 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-gold)]/10 via-transparent to-[var(--secondary-gold)]/10 blur-3xl opacity-40 animate-pulse"></div>

            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--secondary-gold)] to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 flex flex-col items-center hover:border-[var(--secondary-gold)]/40 transition duration-500    hover:-translate-y-2">

                    <Image
                        src={data.logo}
                        alt="logo"
                        width={280}
                        height={280}
                        quality={100}
                        className="transition duration-500 hover:scale-110"
                    />

                    <p className="text-[var(--light-gray)] text-center leading-relaxed">
                        Creating unforgettable celebrations with elegance, style, and perfection.
                    </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[var(--secondary-gold)]/40 transition duration-500 hover:-translate-y-2">

                    <h3 className="theme-h3 text-[var(--text-light)] mb-5 relative inline-block">
                        Quick Links
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[var(--secondary-gold)] to-transparent"></span>
                    </h3>

                    <ul className="space-y-3 text-base">
                        {data.navLinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-2 transition duration-300 hover:text-[var(--secondary-gold)] hover:translate-x-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-[var(--secondary-gold)] rounded-full opacity-0 group-hover:opacity-100"></span>
                                    <span className="w-1.5 h-1.5 bg-[var(--secondary-gold)] rounded-full opacity-0 opacity-100 transition"></span>

                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[var(--secondary-gold)]/40 transition duration-500 hover:-translate-y-2">

                    <h3 className="text-[var(--text-light)] theme-h3 mb-5 relative inline-block">
                        Expert Services
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[var(--secondary-gold)] to-transparent"></span>
                    </h3>

                    <ul className="space-y-3 text-base text-[var(--light-gray)]">
                        {data.services.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.link}
                                    className="group flex items-center gap-2 transition duration-300 hover:text-[var(--secondary-gold)] hover:translate-x-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-[var(--secondary-gold)] rounded-full opacity-0 opacity-100 transition"></span>

                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[var(--secondary-gold)]/40 transition duration-500 hover:-translate-y-2">

                    <h3 className="text-[var(--text-light)] theme-h3 mb-5 relative inline-block">
                        Contact Us
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[var(--secondary-gold)] to-transparent"></span>
                    </h3>

                    <div className="space-y-4 text-base">

                        <div className="flex items-start gap-3 group">
                            <FaMapMarkerAlt className="text-[var(--secondary-gold)] mt-1 group-hover:scale-110 transition" />
                            <p className="leading-relaxed text-[var(--light-gray)] group-hover:text-[var(--secondary-gold)] transition">
                                {data.contact.address.map((line, i) => (
                                    <span key={i}>
                                        {line}<br />
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 group">
                            <FaPhoneAlt className="text-[var(--secondary-gold)] group-hover:scale-110 transition" />
                            <p className="text-[var(--light-gray)] group-hover:text-[var(--secondary-gold)] transition cursor-pointer">
                                {data.contact.phone}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 group">
                            <FaEnvelope className="text-[var(--secondary-gold)] group-hover:scale-110 transition" />
                            <p className="text-[var(--light-gray)] group-hover:text-[var(--secondary-gold)] transition cursor-pointer">
                                {data.contact.email}
                            </p>
                        </div>

                    </div>

                    <div className="flex gap-4 mt-6 flex-wrap">
                        {socialLinks.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    aria-label={item.label}
                                    title={item.label}
                                    className="group relative"
                                >
                                    {/* ✅ hidden accessible text */}
                                    <span className="sr-only">{item.label}</span>

                                    <span className="absolute inset-0 rounded-full bg-[var(--secondary-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition"></span>

                                    <div className="relative w-12 h-12 flex items-center justify-center rounded-full  
        bg-gradient-to-br from-[var(--primary-mid)] to-[var(--primary-dark)] 
        border transition duration-300 text-[var(--secondary-gold)] border-[var(--secondary-gold)]
        hover:scale-110 active:scale-95
        shadow-[var(--gold-shadow)]">
                                        <Icon />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="relative text-center mt-10 px-6">
                <p className="text-[var(--secondary-gold)] italic text-sm md:text-base tracking-wider animate-pulse">
                    “Turning your moments into timeless celebrations with elegance and perfection.”
                </p>
            </div>

            <div className="text-center text-[var(--light-gray)] text-xs mt-6">
                © {new Date().getFullYear()} {data.name}. All Rights Reserved.
            </div>
        </footer>
    );
}
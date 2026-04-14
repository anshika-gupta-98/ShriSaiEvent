import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { data } from "@/Data/global-content";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${data.contact.phone.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

      <div className="relative flex items-center justify-center w-12 h-12 rounded-full 
      bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl
      shadow-lg transition duration-300
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]
      active:scale-95">

        <FaWhatsapp />
      </div>
    </Link>
  );
}
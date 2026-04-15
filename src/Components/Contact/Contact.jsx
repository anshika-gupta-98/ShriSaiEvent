"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

export default function Contact({ data }) {
    const { contact, justdial } = data;
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ VALIDATION
        if (!formData.name.trim()) {
            return setError("Name is required");
        }

        if (!/^[A-Za-z ]+$/.test(formData.name)) {
            return setError("Name should contain only letters");
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            return setError("Phone must be 10 digits");
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            return setError("Invalid email format");
        }

        if (!formData.message.trim()) {
            return setError("Message cannot be empty");
        }

        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                setError("Something went wrong!");
            }

        } catch (err) {
            setError("Server error!");
        }

        setLoading(false);
    };

    const cardClass =
        "relative p-6 rounded-2xl bg-white " +
        "border border-[var(--secondary-gold)]/30 " +
        "shadow-[0_10px_40px_rgba(0,0,0,0.08)] " +
        "overflow-hidden";

    return (
        <div className=" text-gray-800 overflow-hidden">

            {/* 🔥 CONTACT CARDS */}
            <div className="container-wrapper grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-20 mb-10 relative z-10">

                {[
                    {
                        icon: <FiPhone />,
                        title: "Phone",
                        value: contact.phone,
                        link: `tel:${contact.phone}`,
                    },
                    {
                        icon: <FiMail />,
                        title: "Email",
                        value: contact.email,
                        link: `mailto:${contact.email}`,
                    },
                ].map((item, i) => (
                    <motion.div key={i} className={cardClass}>

                        {/* 🔥 GOLD LIGHT GLOW */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-gold)]/10 via-transparent to-transparent"></div>

                        {/* ICON */}
                        <div className="relative z-10 text-[var(--secondary-gold)] mb-4 
            w-12 h-12 flex items-center justify-center 
            rounded-xl bg-[var(--secondary-gold)]/10 text-2xl">
                            {item.icon}
                        </div>

                        {/* TITLE */}
                        <p className="relative z-10 text-lg font-semibold text-[var(--primary-dark)]">
                            {item.title}
                        </p>

                        {/* VALUE */}
                        <Link
                            href={item.link}
                            className="relative z-10 text-gray-700 mt-1 inline-block"
                        >
                            {item.value}
                        </Link>
                    </motion.div>
                ))}

                {/* MAIN OFFICE */}
                <motion.div className={cardClass}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-gold)]/10 via-transparent to-transparent"></div>

                    <div className="relative z-10 text-[var(--secondary-gold)] mb-4 
          w-12 h-12 flex items-center justify-center 
          rounded-xl bg-[var(--secondary-gold)]/10 text-2xl">
                        <FiMapPin />
                    </div>

                    <p className="relative z-10 text-lg font-semibold text-[var(--primary-dark)] mb-1">
                        Main Office
                    </p>

                    {contact.address.map((line, i) => (
                        <p key={i} className="relative z-10 text-gray-600 leading-relaxed">
                            {line}
                        </p>
                    ))}
                </motion.div>

                {/* BRANCH */}
                <motion.div className={cardClass}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-gold)]/10 via-transparent to-transparent"></div>

                    <div className="relative z-10 text-[var(--secondary-gold)] mb-4 
          w-12 h-12 flex items-center justify-center 
          rounded-xl bg-[var(--secondary-gold)]/10 text-2xl">
                        <FaBuilding />
                    </div>

                    <p className="relative z-10 text-lg font-semibold text-[var(--primary-dark)] mb-1">
                        Branch
                    </p>

                    {contact.branch.map((line, i) => (
                        <p key={i} className="relative z-10 text-gray-600 leading-relaxed">
                            {line}
                        </p>
                    ))}
                </motion.div>

            </div>

            {/* 🔥 FORM + MAP */}
            <section className="container-wrapper py-20 grid lg:grid-cols-2 gap-12 items-center">

                {/* FORM */}
                <motion.div
                    id="contact-form"   // ✅ ADD THIS
                    className="bg-white p-8 rounded-3xl 
  border border-[var(--secondary-gold)]/30
  shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                    <h2 className="theme-h2 mb-4 text-[var(--primary-dark)]">
                        Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full mb-3 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--secondary-gold)] outline-none"
                        />

                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full mb-3 p-3 rounded-xl border border-gray-300"
                        />

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full mb-3 p-3 rounded-xl border border-gray-300"
                        />

                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full mb-3 p-3 rounded-xl border border-gray-300"
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="4"
                            className="w-full mb-3 p-3 rounded-xl border border-gray-300"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-[var(--secondary-gold)] text-black font-semibold flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {loading ? "Sending..." : "Submit"}
                            <FiSend />
                        </button>
                    </form>

                    {success && (
                        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                            <FiCheckCircle className="text-xl" />
                            <span>Message sent successfully! We'll contact you soon.</span>
                        </div>
                    )}

                    {error && (
                        <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-lg flex items-center gap-2">
                            <FiAlertCircle className="text-xl" />
                            <span>{error}</span>
                        </div>
                    )}
                </motion.div>

                {/* MAP */}
                <motion.div className="rounded-3xl overflow-hidden border border-[var(--secondary-gold)]/20 shadow-md">
                    <iframe
                        src={contact.mapEmbed}
                        title="Google Map Location"
                        className="w-full h-[350px]"
                    />
                </motion.div>

            </section>

            {/* 🔥 JUSTDIAL */}
            <div className="container-wrapper mt-12 mb-24">

                <motion.div className="relative overflow-hidden p-10 rounded-3xl 
        border border-[var(--secondary-gold)]/40 
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-gold)]/20 via-white to-[var(--secondary-gold)]/10" />

                    <div className="relative z-10 text-center">

                        <h3 className="theme-h2 text-[var(--primary-dark)] mb-3">
                            You can also contact us here
                        </h3>

                        <p className="mb-6 max-w-xl mx-auto text-gray-600">
                            Reach out through our verified Justdial listing for quick enquiries.
                        </p>

                        <Link
                            href={justdial.link}
                            target="_blank"
                            className="btn-primary px-8 py-3 rounded-full text-sm flex items-center justify-center gap-2 mx-auto"
                        >
                            <span>{justdial.label}</span>
                            <BsArrowUpRight />
                        </Link>

                    </div>
                </motion.div>

            </div>
        </div>
    );
}
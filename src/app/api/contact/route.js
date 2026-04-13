import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, phone, subject, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("USER:", process.env.EMAIL_USER);
        console.log("PASS:", process.env.EMAIL_PASS);

        // 📧 EMAIL TO ADMIN
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // admin email
            subject: "New Contact Form Submission",
            html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        // 📧 EMAIL TO USER (confirmation)
        await transporter.sendMail({
            from: `"Shri Sai Event" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "We received your message",
            html: `
        <h2>Thank you, ${name}!</h2>
        <p>Your message has been received.</p>
        <p>We will contact you soon.</p>
      `,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.log("ERROR:", error); // 👈 ADD THIS

        return NextResponse.json({
            success: false,
            error: error.message || "Server error",
        });
    }
}
import { validationResult } from "express-validator";
import pool from "../database/db.js";
import { resend } from "../utils/mailer.js";

export const sendMessage = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        const { name, email, message } = req.body;

        // Save to DB
        const query = `
      INSERT INTO contact_messages(name, email, message)
      VALUES($1, $2, $3)
      RETURNING *;
    `;

        const values = [name, email, message];
        const result = await pool.query(query, values);

        // ==========================
        // Mail to YOU
        // ==========================
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `📩 New Portfolio Message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
        });

        // ==========================
        // Auto Reply
        // ==========================
        const autoReply = await resend.emails.send({
            from: "Paramasivan <onboarding@resend.dev>",
            to: email,
            subject: "Thanks for contacting me!",
            html: "...",
        });

        console.log("Auto Reply:", autoReply);

        res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: result.rows[0],
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
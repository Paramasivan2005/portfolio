import { validationResult } from "express-validator";
import pool from "../database/db.js";
import transporter from "../utils/mailer.js";

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
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
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
        await transporter.sendMail({
            from: `"Paramasivan" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thanks for contacting me!",
            html: `
                <h2>Hello ${name}, 👋</h2>

                <p>Your message has been received successfully.</p>

                <p>This is an automated email to confirm your submission.</p>

                <p>If necessary, I'll contact you regarding your message.</p>

                <br>

                <p>Regards,</p>
                <h3>Paramasivan</h3>
            `,
        });

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
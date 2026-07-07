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
            from: "Paramasivan <onboarding@paramasivan.online>",
            to: email,
            subject: "Thanks for contacting me!",
            html: `
    <div style="max-width:600px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
      
      <div style="background:#111827;padding:20px;text-align:center;">
        <h1 style="color:#ffffff;margin:0;">Thank You!</h1>
      </div>

      <div style="padding:30px;color:#374151;line-height:1.7;">
        <h2 style="margin-top:0;">Hi,</h2>

        <p>
          Thank you for reaching out through my portfolio website.
          I have successfully received your message.
        </p>

        <p>
          This is an automated confirmation email to let you know that your
          message has been received. I'll review it as soon as possible and
          get back to you shortly.
        </p>

        <p>
          I appreciate your interest and look forward to connecting with you.
        </p>

        <div style="margin:30px 0;padding:18px;background:#f9fafb;border-left:4px solid #2563eb;">
          <strong>What happens next?</strong>
          <ul style="padding-left:20px;margin:10px 0;">
            <li>Your message has been successfully received.</li>
            <li>I'll review your inquiry.</li>
            <li>You can expect a personal response as soon as possible.</li>
          </ul>
        </div>

        <p>
          Thank you once again for your time.
        </p>

        <p style="margin-top:30px;">
          Best regards,<br>
          <strong>Paramasivan A</strong><br>
          Full Stack Developer
        </p>
      </div>

      <div style="background:#f3f4f6;padding:15px;text-align:center;font-size:13px;color:#6b7280;">
        This is an automated email. Please do not reply to this message.
      </div>

    </div>
  `,
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
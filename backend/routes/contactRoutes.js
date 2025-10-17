import express from "express";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [
    body("FLNAME").notEmpty().withMessage("Name is required"),
    body("EMAIL").isEmail().withMessage("Valid email is required"),
    body("PHONE").notEmpty().withMessage("Phone number is required"),
    body("MESSAGE").notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { FLNAME, EMAIL, PHONE, MESSAGE } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Website Contact" <${EMAIL}>`,
        to: process.env.EMAIL_USER,
        subject: "New Contact Message",
        text: `
          Name: ${FLNAME}
          Email: ${EMAIL}
          Phone: ${PHONE}
          Message: ${MESSAGE}
        `,
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  }
);

export default router;

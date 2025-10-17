import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

const router = express.Router();

// ✅ Use memory storage (no uploads folder)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Validation
const validations = [
  body("name").notEmpty(),
  body("email").isEmail(),
  body("phone").notEmpty(),
  body("license").notEmpty(),
  body("vehicle").notEmpty(),
  body("area").notEmpty(),
  body("experience").notEmpty(),
];

// POST route
router.post("/", upload.single("cv"), validations, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, phone, license, vehicle, area, experience, languages } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Job Application" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Job Application",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        License: ${license}
        Vehicle: ${vehicle}
        Area: ${area}
        Experience: ${experience}
        Languages: ${languages}
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Application submitted successfully!" });
  } catch (err) {
    console.error("Error sending application:", err);
    res.status(500).json({ success: false, message: "Failed to submit application" });
  }
});

export default router;

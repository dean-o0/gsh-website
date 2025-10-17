// utils/recaptcha.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function verifyRecaptcha(token) {
  if (!process.env.RECAPTCHA_SECRET) return { success: true }; // skip if not set
  const secret = process.env.RECAPTCHA_SECRET;
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );
  return res.data; // contains success, score, action, ...
}

import { z } from "zod";

// This rule-set handles almost every v0.dev contact form
export const contactSchema = z.object({
  email: z.string().email("Please use a real email address"),
  subject: z.string().min(5, "Subject is too short"),
  message: z.string().max(500, "Keep it under 500 characters"),
});

// This rule-set handles v0.dev login components
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
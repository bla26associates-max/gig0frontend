import { z } from "zod";

// 1. Define the 'rules' for your v0 form
export const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// 2. Export the Type for TypeScript safety
export type ContactInput = z.infer<typeof contactSchema>;
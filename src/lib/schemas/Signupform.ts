import { z } from "zod";

// These are your "Rules" for the v0-generated components
export const SignUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  age: z.number().min(18, "You must be at least 18"),
});

export type SignUpFormValues = z.infer<typeof SignUpSchema>;
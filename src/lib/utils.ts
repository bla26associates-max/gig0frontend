// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with clsx and tailwind-merge.
 * This is essential for the high-fidelity Vercel/v0.dev look.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
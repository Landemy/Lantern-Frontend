import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines Tailwind classes intelligently, removing duplicates/conflicts
export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  
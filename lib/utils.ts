import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge Tailwind classes intelligently (clsx + tailwind-merge).
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

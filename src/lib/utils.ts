import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Maps a count to a Tailwind xl grid-cols class.
// All strings must be complete literals so Tailwind's scanner includes them.
const xlGridCols: Record<number, string> = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
  7: "xl:grid-cols-7",
  8: "xl:grid-cols-8",
};

export function getXlGridCols(count: number): string {
  return xlGridCols[count] ?? "xl:grid-cols-4";
}

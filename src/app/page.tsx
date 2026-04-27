import type { Metadata } from "next";
import { EntitySpotlight } from "@/components/sections/EntitySpotlight";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { TheDispatch } from "@/components/sections/TheDispatch";

export const metadata: Metadata = {
  title: "Codetopia | The Technology Ecosystem",
  description:
    "Codetopia is the organization behind a growing network of technology initiatives developing talent, producing content, driving innovation, and creating social impact across Ghana, Africa and beyond.",
  openGraph: {
    title: "Codetopia | The Technology Ecosystem",
    description:
      "One organization. A growing network of initiatives building talent, producing content, and driving innovation across Africa.",
    url: "https://codetopia.tech",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codetopia - The Technology Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetopia | The Technology Ecosystem",
    description:
      "One organization. A growing network of initiatives building talent, producing content, and driving innovation across Africa.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Hero />
      <EntitySpotlight />
      <TheDispatch />
      <Footer />
    </main>
  );
}

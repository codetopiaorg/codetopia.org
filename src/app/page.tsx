import type { Metadata } from "next";
import { EntitySpotlight } from "@/components/sections/EntitySpotlight";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { TheDispatch } from "@/components/sections/TheDispatch";
import { Vision } from "@/components/sections/Vision";

export const metadata: Metadata = {
  title: "Codetopia | The Technology Ecosystem",
  description:
    "Codetopia is the organization behind a growing network of technology initiatives developing talent, producing content, driving innovation, and creating social impact across Ghana, Africa and beyond.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <EntitySpotlight />
      <Vision />
      <TheDispatch />
      <Footer />
    </main>
  );
}

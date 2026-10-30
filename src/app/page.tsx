import type { Metadata } from "next";
import { EntitySpotlight } from "@/components/sections/EntitySpotlight";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { PartnerStrip } from "@/components/sections/Partners";
import { Pillars } from "@/components/sections/Pillars";
import { TheDispatch } from "@/components/sections/TheDispatch";

export const metadata: Metadata = {
  title: { absolute: "Codetopia" },
  description:
    "We build organizations that build the future. Codetopia is the parent organization of a growing network of technology initiatives developing talent, producing content, driving innovation and creating social impact across Ghana, Africa and beyond.",
  openGraph: {
    title: "Codetopia",
    description: "We build organizations that build the future.",
    url: "https://codetopia.org",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codetopia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetopia",
    description: "We build organizations that build the future.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-[#080808]">
      <Hero />
      <PartnerStrip />
      <Mission />
      <EntitySpotlight />
      <Pillars
        title="Five commitments."
        intro="Every initiative Codetopia builds exists to advance one or more of these. They are not goals. They are the standard."
      />
      <TheDispatch />
      <Footer />
    </main>
  );
}

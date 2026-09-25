import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { InitiativeIndex } from "@/components/sections/InitiativeIndex";
import { NextPage } from "@/components/sections/NextPage";
import { PageHero } from "@/components/sections/PageHero";
import { initiatives } from "@/lib/initiatives";

const numberWords = [
  "No",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

export const metadata: Metadata = {
  title: "Initiatives | Codetopia",
  description:
    "Each Codetopia initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
  openGraph: {
    title: "Initiatives | Codetopia",
    description:
      "Each initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
    url: "https://codetopia.tech/initiatives",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codetopia Initiatives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initiatives | Codetopia",
    description:
      "Each initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
    images: ["/og.png"],
  },
};

export default function InitiativesPage() {
  const count = numberWords[initiatives.length] ?? initiatives.length;

  return (
    <main className="min-h-screen bg-[#080808]">
      <PageHero
        label="Initiatives"
        title={`${count} initiatives. One direction.`}
        intro={
          <p>
            Each initiative is purpose-built to close a specific gap in the
            technology ecosystem. Independent in identity, unified in direction.
          </p>
        }
      />

      <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <InitiativeIndex withDescriptions />
        </div>
      </section>

      <NextPage
        href="/about"
        title="About Codetopia"
        description="Why these gaps exist, and the principles every initiative answers to."
      />

      <Footer />
    </main>
  );
}

import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/sections/Footer";
import { ButtonLink, Chapter, Closing, PageIntro } from "@/components/site/kit";
import { type Initiative, initiatives } from "@/lib/initiatives";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Each Codetopia initiative is purpose-built to bridge a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
  openGraph: {
    title: "Initiatives | Codetopia",
    description:
      "Each initiative is purpose-built to bridge a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
    url: "https://codetopia.org/initiatives",
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
      "Each initiative is purpose-built to bridge a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
    images: ["/og.png"],
  },
};

export default function InitiativesPage() {
  const active = initiatives.filter((i) => i.status === "Active");
  const coming = initiatives.filter((i) => i.status !== "Active");

  return (
    <main id="main" className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Initiatives"
        title="Many initiatives. One direction."
        intro={
          <p>
            Each initiative is built to bridge a specific gap in the technology
            ecosystem. Independent in identity, unified in direction.
          </p>
        }
      />

      <Chapter
        label="Active"
        title="Running today."
        intro={<p>Visit each one on its own site.</p>}
      >
        <InitiativeRows items={active} />
      </Chapter>

      <Chapter
        label="Coming next"
        title="In the works."
        intro={<p>Each will get its own site when it launches.</p>}
      >
        <InitiativeRows items={coming} />
      </Chapter>

      <Closing title="Want to build one of these with us?">
        <ButtonLink href="/partners">Partner with us</ButtonLink>
        <ButtonLink href="/about" variant="secondary">
          About Codetopia
        </ButtonLink>
      </Closing>

      <Footer />
    </main>
  );
}

// One ruled row per initiative: logo, name, what it does, and its link
function InitiativeRows({ items }: { items: Initiative[] }) {
  return (
    <ul>
      {items.map((initiative) => {
        const row = (
          <>
            <span className="md:col-span-4">
              <Image
                src={initiative.logo}
                alt={initiative.name}
                className="h-9 md:h-10 w-auto object-contain object-left brightness-0"
              />
            </span>
            <span className="md:col-span-6 text-zinc-600 leading-relaxed">
              {initiative.description}
            </span>
            <span className="md:col-span-2 md:justify-self-end text-sm text-zinc-500">
              {initiative.link ? (
                <span className="inline-flex items-center gap-1.5 text-black group-hover:underline underline-offset-4">
                  Visit
                  <ArrowUpRight size={14} />
                </span>
              ) : (
                "Coming soon"
              )}
            </span>
          </>
        );
        const classes =
          "group grid grid-cols-1 md:grid-cols-12 items-center gap-x-8 gap-y-4 py-8 md:py-10";
        return (
          <li key={initiative.name}>
            {initiative.link ? (
              <a
                href={initiative.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
              >
                {row}
              </a>
            ) : (
              <div className={classes}>{row}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Footer } from "@/components/sections/Footer";
import { PartnerGrid } from "@/components/sections/Partners";
import {
  ButtonLink,
  Chapter,
  Closing,
  PageIntro,
  RuledGrid,
} from "@/components/site/kit";
import { initiatives } from "@/lib/initiatives";

const description =
  "Sponsorship, education and institutional partnerships, and community partnerships. One point of contact across everything Codetopia does.";

export const metadata: Metadata = {
  title: "Partners",
  description,
  openGraph: {
    title: "Partners | Codetopia",
    description,
    url: "https://codetopia.org/partners",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Partner with Codetopia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Codetopia",
    description,
    images: ["/og.png"],
  },
};

const PARTNER_URL =
  "mailto:hello@codetopia.org?subject=Partnership%20with%20Codetopia";

// Commissioned projects are left out until Codetopia Labs can deliver them.
const ways = [
  {
    title: "Sponsorship",
    description:
      "Support our events, programs and initiatives, with your support credited wherever it appears.",
    through: ["All initiatives"],
  },
  {
    title: "Education and institutions",
    description:
      "Universities, schools, hubs and public bodies working with us to develop technology talent.",
    through: ["Academy", "Foundation"],
  },
  {
    title: "Community and events",
    description:
      "Co-host events, run joint programs, or bring your community together with ours.",
    through: ["Community"],
  },
];

const linkClass =
  "text-black underline underline-offset-4 decoration-zinc-300 hover:decoration-black transition-colors";

// Names each initiative a way goes through. A live initiative links to its
// site; one without a site yet shows as plain text, and becomes a link on
// its own once `initiatives.ts` gives it one.
const InitiativeLinks = ({ names }: { names: string[] }) => (
  <p className="mt-4 text-sm text-zinc-500">
    {names.map((name, i) => {
      const initiative = initiatives.find((item) => item.shortName === name);
      let label: React.ReactNode = name;
      if (name === "All initiatives") {
        label = (
          <Link href="/initiatives" className={linkClass}>
            {name}
          </Link>
        );
      } else if (initiative?.link) {
        label = (
          <a
            href={initiative.link}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {name}
          </a>
        );
      }
      return (
        <Fragment key={name}>
          {i > 0 && (
            <span aria-hidden="true" className="mx-2 text-zinc-300">
              |
            </span>
          )}
          {label}
        </Fragment>
      );
    })}
  </p>
);

const steps = [
  "Send us an email.",
  "We talk through what you want to achieve.",
  "We bring in the right initiative.",
  "We agree the scope together.",
];

export default function PartnersPage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Partners"
        title="Partner with Codetopia."
        intro={
          <p>
            One organization, many ways in, through a single point of contact.
            Tell us what you have in mind, and we&apos;ll bring in the right
            initiative.
          </p>
        }
      >
        <ButtonLink href={PARTNER_URL}>Get in touch</ButtonLink>
      </PageIntro>

      <Chapter label="Ways to partner" title="Three ways in.">
        <RuledGrid
          items={ways.map((way) => ({
            title: way.title,
            body: (
              <>
                <p>{way.description}</p>
                <InitiativeLinks names={way.through} />
              </>
            ),
          }))}
        />
      </Chapter>

      <Chapter
        label="Who we work with"
        title="Organizations across the ecosystem."
        intro={
          <p>
            Organizations we work with across our initiatives, current and past.
          </p>
        }
      >
        <PartnerGrid />
      </Chapter>

      <Chapter label="How it starts" title="Four steps.">
        <RuledGrid
          columns={4}
          items={steps.map((step, i) => ({
            title: (
              <span className="tabular-nums text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </span>
            ),
            body: <span className="text-lg text-black">{step}</span>,
          }))}
        />
      </Chapter>

      <Closing title="Tell us what you have in mind.">
        <ButtonLink href={PARTNER_URL}>Get in touch</ButtonLink>
      </Closing>

      <Footer />
    </main>
  );
}

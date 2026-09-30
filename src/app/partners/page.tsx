import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { PartnerGrid } from "@/components/sections/Partners";
import { SectionHeading } from "@/components/sections/SectionHeading";

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
    through: "Across Codetopia",
  },
  {
    title: "Education and institutions",
    description:
      "Universities, schools, hubs and public bodies working with us to develop technology talent.",
    through: "With the Academy and Foundation",
  },
  {
    title: "Community and events",
    description:
      "Co-host events, run joint programs, or bring your community together with ours.",
    through: "With the Community",
  },
];

const steps = [
  "Get in touch.",
  "We talk through what you want to achieve.",
  "We bring in the right initiative.",
  "We agree the scope together.",
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <PageHero
        label="Partners"
        title="Partner with Codetopia."
        intro={
          <p>
            One organization, many ways in: community, education and outreach,
            through a single point of contact. Tell us what you have in mind,
            and we&rsquo;ll bring in the right initiative.
          </p>
        }
        link={{ href: PARTNER_URL, label: "Get in touch" }}
      />

      {/* What: the ways to partner */}
      <section className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Ways to partner." />
          <ol>
            {ways.map((way, i) => (
              <li
                key={way.title}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_minmax(0,4fr)_minmax(0,6fr)] gap-x-4 md:gap-x-8 gap-y-2 py-7 md:py-9 items-start"
              >
                <span className="pt-2 md:pt-3 text-sm text-zinc-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-0.03em] text-white">
                  {way.title}
                </h3>
                <div className="col-start-2 md:col-start-auto md:pt-3 max-w-xl">
                  <p className="text-sm md:text-base leading-relaxed text-zinc-400">
                    {way.description}
                  </p>
                  <p className="mt-4 text-sm text-zinc-300">{way.through}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who: proof, straight after the offer */}
      <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Who we work with.">
            <p className="text-lg text-zinc-400 leading-relaxed">
              Organizations we work with across our initiatives, current and
              past.
            </p>
          </SectionHeading>
          <PartnerGrid />
        </div>
      </section>

      {/* How: what happens next. No timings promised until someone owns replies. */}
      <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How it starts." />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8">
            {steps.map((step, i) => (
              <li key={step}>
                <span className="text-sm text-zinc-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg text-white leading-snug max-w-xs">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <a
            href={PARTNER_URL}
            className="group mt-12 inline-flex items-center gap-2 text-sm text-white"
          >
            Get in touch
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

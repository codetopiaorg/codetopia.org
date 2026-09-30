import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { NextPage } from "@/components/sections/NextPage";
import { PageHero } from "@/components/sections/PageHero";
import { PartnerGrid } from "@/components/sections/Partners";
import { SectionHeading } from "@/components/sections/SectionHeading";

const description =
  "Sponsorship, institutional partnerships, commissioned projects and community partnerships. One point of contact across everything Codetopia does.";

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

const COMMUNITY_WORK_WITH_US = "https://community.codetopia.org/work-with-us";

const ways = [
  {
    title: "Sponsorship",
    description:
      "Support our events, programs and initiatives, with your support credited wherever it appears.",
  },
  {
    title: "Institutional partnerships",
    description:
      "Work with us over time as a university, school, hub or public body developing technology talent. We connect you with the initiative that fits.",
  },
  {
    title: "Commissioned projects",
    description:
      "Talk to us about technology projects your organization needs delivered.",
  },
  {
    title: "Community partnerships",
    description:
      "Co-host events, run joint programs, or bring your community together with ours.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <PageHero
        label="Partners"
        title="Partner with Codetopia."
        intro={
          <p>
            One point of contact across everything Codetopia does. Tell us what
            you have in mind, and we&rsquo;ll bring in the right initiative.
          </p>
        }
        link={{ href: PARTNER_URL, label: "Get in touch" }}
      />

      <section className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Ways to partner." />
          <ol className="border-t border-zinc-900">
            {ways.map((way, i) => (
              <li
                key={way.title}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_minmax(0,4fr)_minmax(0,6fr)] gap-x-4 md:gap-x-8 gap-y-2 py-7 md:py-9 border-b border-zinc-900 items-start"
              >
                <span className="pt-2 md:pt-3 text-sm text-zinc-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-0.03em] text-white">
                  {way.title}
                </h3>
                <p className="col-start-2 md:col-start-auto md:pt-3 text-sm md:text-base leading-relaxed text-zinc-400 max-w-xl">
                  {way.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Working with our members?"
            className="mb-0 md:mb-0"
          >
            <p className="text-lg text-zinc-400 leading-relaxed">
              Hiring, sharing a challenge, speaking or hosting a meetup happens
              directly with Codetopia Community.
            </p>
            <a
              href={COMMUNITY_WORK_WITH_US}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm text-white"
            >
              Work with the community
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </SectionHeading>
        </div>
      </section>

      <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Who we work with.">
            <p className="text-lg text-zinc-400 leading-relaxed">
              Organizations we&rsquo;ve worked with across our initiatives.
            </p>
          </SectionHeading>
          <PartnerGrid />
        </div>
      </section>

      <NextPage
        href="/initiatives"
        title="Initiatives"
        description="The parts of Codetopia, and the gap each one exists to close."
      />

      <Footer />
    </main>
  );
}

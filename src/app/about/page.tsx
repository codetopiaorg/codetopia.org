import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { NextPage } from "@/components/sections/NextPage";
import { PageHero } from "@/components/sections/PageHero";
import { Pillars } from "@/components/sections/Pillars";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "About | Codetopia",
  description:
    "Codetopia is building the organizations that build the future of technology in Ghana, Africa, and beyond.",
  openGraph: {
    title: "About | Codetopia",
    description:
      "The talent exists. The platform doesn't. Codetopia builds focused initiatives, each purpose-built to close a specific gap in Africa's technology ecosystem.",
    url: "https://codetopia.tech/about",
    siteName: "Codetopia",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "About Codetopia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Codetopia",
    description:
      "The talent exists. The platform doesn't. Purpose-built initiatives closing gaps in Africa's technology ecosystem.",
    images: ["/og.png"],
  },
};

const principles = [
  {
    title: "Gaps don't close themselves",
    body: "Codetopia exists because the technology ecosystem has gaps that need deliberate, focused action to close. We identify them. We build around them. That is the only reason any initiative exists.",
  },
  {
    title: "Each gap gets its own initiative",
    body: "A gap in talent demands a different response than a gap in content, access, or innovation. Each initiative is its own entity because each problem is specific enough to deserve full, undivided attention.",
  },
  {
    title: "The network grows as the gaps become clear",
    body: "We don't build on a schedule. We build when a gap is real and the case for closing it is clear. The network expands as the ecosystem demands it.",
  },
  {
    title: "We measure whether the gap closed",
    body: "Launching an initiative is not the achievement. Closing the gap it was built for is. That is the question every initiative has to answer.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <PageHero
        label="About Codetopia"
        title="The talent exists. The platform doesn't."
        intro={
          <>
            <p>
              Africa&apos;s technology gap isn&apos;t a talent problem. The
              engineers, designers, builders and thinkers are here, with the
              ambition and capacity to compete with anyone in the world.
            </p>
            <p className="text-zinc-400">
              What&apos;s missing is the infrastructure around them: structured
              learning, real-world opportunity, communities that push them
              further, and organizations built to carry them forward. That gap
              is what Codetopia exists to close.
            </p>
          </>
        }
      />

      <section className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="One organization. Many focused initiatives."
            className="mb-0 md:mb-0"
          >
            <div className="space-y-5 leading-relaxed">
              <p className="text-zinc-300 text-lg">
                We don&apos;t try to solve everything through a single product.
                Each initiative is its own entity, with its own identity,
                mission and operating model.
              </p>
              <p className="text-zinc-500">
                Independent enough to go deep. Connected enough to reinforce
                each other. The network grows as new gaps become clear.
              </p>
            </div>
          </SectionHeading>
        </div>
      </section>

      <Pillars
        title="Five commitments."
        intro="Every initiative Codetopia builds exists to advance one or more of these. They are not goals. They are the standard."
      />

      <section className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Principles." />
          <ol>
            {principles.map((principle, i) => (
              <li
                key={principle.title}
                className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_minmax(0,4fr)_minmax(0,6fr)] gap-x-4 md:gap-x-8 gap-y-3 py-8 md:py-10 items-baseline"
              >
                <span className="text-sm text-zinc-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-medium tracking-[-0.02em] text-white">
                  {principle.title}
                </h3>
                <p className="col-start-2 md:col-start-auto text-zinc-500 leading-relaxed max-w-xl">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <NextPage
        href="/initiatives"
        title="Initiatives"
        description="Where these commitments become organizations, each built for one gap."
      />

      <Footer />
    </main>
  );
}

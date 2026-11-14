import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import {
  ButtonLink,
  Chapter,
  Closing,
  PageIntro,
  RuledGrid,
} from "@/components/site/kit";
import { pillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "About",
  description:
    "Codetopia is building the organizations that build the future of technology in Ghana, Africa, and beyond.",
  openGraph: {
    title: "About | Codetopia",
    description:
      "The talent exists. The platform doesn't. Codetopia builds focused initiatives, each purpose-built to bridge a specific gap in Africa's technology ecosystem.",
    url: "https://codetopia.org/about",
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
      "The talent exists. The platform doesn't. Purpose-built initiatives bridging gaps in Africa's technology ecosystem.",
    images: ["/og.png"],
  },
};

const principles = [
  {
    title: "Gaps don't bridge themselves",
    body: "Codetopia exists because the technology ecosystem has gaps that need deliberate, focused action to bridge. We identify them. We build around them. That is the only reason any initiative exists.",
  },
  {
    title: "Each gap gets its own initiative",
    body: "A gap in talent demands a different response than a gap in content, access, or innovation. Each initiative is its own entity because each problem is specific enough to deserve full, undivided attention.",
  },
  {
    title: "The network grows as the gaps become clear",
    body: "We don't build on a schedule. We build when a gap is real and the case for bridging it is clear. The network expands as the ecosystem demands it.",
  },
  {
    title: "We measure whether the gap is bridged",
    body: "Launching an initiative is not the achievement. Bridging the gap it was built for is. That is the question every initiative has to answer.",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      <PageIntro
        eyebrow="About Codetopia"
        title="The talent exists. The platform doesn't."
        intro={
          <p>
            Africa&apos;s technology gap isn&apos;t a talent problem. The
            engineers, designers, builders and thinkers are here. What&apos;s
            missing is the infrastructure around them.
          </p>
        }
      />

      <Chapter
        label="The gap"
        title="What's missing is everything around the talent."
        intro={
          <p>
            Structured learning, real-world opportunity, communities that push
            people further, and organizations built to carry them forward. That
            gap is what Codetopia exists to bridge.
          </p>
        }
      />

      <Chapter
        label="How we work"
        title="One organization. Many focused initiatives."
        intro={
          <p>
            We don&apos;t try to solve everything through a single product. Each
            initiative is its own entity, with its own identity, mission and way
            of working. Independent enough to go deep, connected enough to
            reinforce each other.
          </p>
        }
      >
        <ButtonLink href="/initiatives" variant="secondary">
          See the initiatives
        </ButtonLink>
      </Chapter>

      <Chapter
        label="Commitments"
        title="Five commitments."
        intro={
          <p>
            Every initiative exists to advance one or more of these. They are
            not goals. They are the standard.
          </p>
        }
      >
        <RuledGrid
          columns={5}
          items={pillars.map((pillar) => ({
            title: pillar.label,
            body: pillar.description,
          }))}
        />
      </Chapter>

      <Chapter label="Principles" title="Principles.">
        <ol>
          {principles.map((principle, i) => (
            <li
              key={principle.title}
              className="grid grid-cols-[3rem_1fr] md:grid-cols-12 gap-x-8 gap-y-2 py-8 md:py-10"
            >
              <span className="md:col-span-1 text-sm tabular-nums text-zinc-500 md:pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-5 font-display text-xl md:text-2xl font-medium tracking-[-0.02em] text-black">
                {principle.title}
              </h3>
              <p className="col-start-2 md:col-start-auto md:col-span-6 text-zinc-600 leading-relaxed">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
      </Chapter>

      <Closing title="See where these commitments become organizations.">
        <ButtonLink href="/initiatives">Explore the initiatives</ButtonLink>
      </Closing>

      <Footer />
    </main>
  );
}

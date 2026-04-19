import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { pillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "About | Codetopia",
  description:
    "Codetopia is building the organizations that build the future of technology in Ghana, Africa, and beyond.",
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
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-36 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
            About Codetopia
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.9] text-black max-w-5xl">
            We build the organizations that build the future.
          </h1>
          <p className="text-zinc-600 font-sans text-base leading-relaxed max-w-lg md:text-lg">
            One organization. A growing network of focused initiatives — each
            purpose-built to close a specific gap in Africa's technology
            ecosystem.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            The Problem
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white max-w-3xl">
            The talent exists.
            <br />
            The platform doesn't.
          </h2>
          <div className="max-w-2xl space-y-5 text-zinc-500 font-sans text-base leading-relaxed">
            <p>
              Africa's technology talent gap isn't a talent problem — it's a
              platform problem. The engineers, designers, builders, and thinkers
              are here. They have the ambition and the capacity to compete with
              anyone in the world.
            </p>
            <p>
              What's missing is the infrastructure around them: structured
              learning paths, real-world opportunities, communities that push
              them further, and organizations built to carry them forward.
            </p>
            <p className="text-white">
              That gap is what Codetopia exists to close.
            </p>
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="py-20 md:py-32 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            The Model
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white max-w-3xl">
            One organization.
            <br />
            Many focused initiatives.
          </h2>
          <p className="max-w-2xl text-zinc-500 font-sans text-base leading-relaxed">
            We don't try to solve everything through a single product. Each
            initiative is its own entity — with its own identity, mission, and
            operating model. Independent enough to go deep. Connected enough to
            reinforce each other. The network grows as new gaps become clear.
          </p>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 md:py-32 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              Our Mission
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white max-w-3xl">
              Five commitments.
              <br />
              Everything maps back.
            </h2>
            <p className="text-zinc-500 font-sans text-base leading-relaxed max-w-lg">
              Every initiative Codetopia builds exists to advance one or more of
              these. They are not goals — they are the standard.
            </p>
          </div>

          <div className="divide-y divide-zinc-900">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="py-8 flex flex-col md:flex-row md:items-start md:gap-16"
              >
                <h3 className="w-full md:w-48 shrink-0 text-base font-black uppercase tracking-widest text-white mb-3 md:mb-0">
                  {pillar.label}
                </h3>
                <p className="flex-1 text-zinc-500 font-sans text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-32 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              What We Stand For
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white max-w-3xl">
              The principles that
              <br />
              govern everything.
            </h2>
          </div>

          <div className="divide-y divide-zinc-900">
            {principles.map((principle, i) => (
              <div key={principle.title} className="py-10 space-y-3">
                <span className="text-[10px] font-black text-zinc-700 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-black uppercase tracking-tight text-white">
                  {principle.title}
                </h3>
                <p className="text-zinc-500 font-sans text-base leading-relaxed max-w-2xl">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

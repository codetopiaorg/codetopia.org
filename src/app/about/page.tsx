import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { LogoBg } from "@/components/ui/LogoBg";
import { Reveal } from "@/components/ui/Reveal";
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
    <main className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="relative pt-40 pb-32 md:pt-52 md:pb-44 px-6 md:px-12 bg-white border-b border-zinc-200 overflow-hidden">
        <LogoBg opacity={0.05} />
        <div className="relative max-w-7xl mx-auto space-y-10">
          <p className="font-sans text-xs text-zinc-400 tracking-[0.4em] uppercase">
            About Codetopia
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-black tracking-tighter leading-[0.9] text-black max-w-5xl">
            We build the
            <br />
            organizations that
            <br />
            build the future.
          </h1>
          <p className="text-zinc-500 text-base leading-relaxed max-w-md">
            One organization. A growing network of focused initiatives, each
            purpose-built to close a specific gap in Africa&apos;s technology
            ecosystem.
          </p>
          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] px-7 py-4 hover:bg-zinc-900 transition-colors group"
          >
            Our Initiatives
            <ArrowRight
              size={11}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-28 md:py-44 px-6 md:px-12 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 glow-top pointer-events-none" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <Reveal from="left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
              The talent exists.
              <br />
              The platform
              <br />
              doesn&apos;t.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-zinc-500 leading-relaxed lg:pt-4">
              <p>
                Africa&apos;s technology talent gap isn&apos;t a talent problem.
                It&apos;s a platform problem. The engineers, designers,
                builders, and thinkers are here. They have the ambition and the
                capacity to compete with anyone in the world.
              </p>
              <p>
                What&apos;s missing is the infrastructure around them:
                structured learning paths, real-world opportunities, communities
                that push them further, and organizations built to carry them
                forward.
              </p>
              <p className="text-base font-semibold text-white">
                That gap is what Codetopia exists to close.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Model */}
      <section className="relative py-28 md:py-44 px-6 md:px-12 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 glow-center pointer-events-none" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <Reveal from="left">
            <div className="space-y-6">
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
                The Model
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
                One organization.
                <br />
                Many focused
                <br />
                initiatives.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 md:pt-16 leading-relaxed">
              <p className="text-zinc-300 text-base md:text-lg">
                We don&apos;t try to solve everything through a single product.
                Each initiative is its own entity, with its own identity,
                mission, and operating model.
              </p>
              <p className="text-zinc-500">
                Independent enough to go deep. Connected enough to reinforce
                each other. The network grows as new gaps become clear.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-28 md:py-44 px-6 md:px-12 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto space-y-20">
          <Reveal>
            <div className="space-y-5">
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
                Mission
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white max-w-xl">
                Five commitments.
                <br />
                Everything maps back.
              </h2>
              <p className="text-zinc-500 leading-relaxed max-w-md">
                Every initiative Codetopia builds exists to advance one or more
                of these. They are not goals. They are the standard.
              </p>
            </div>
          </Reveal>

          <div className="divide-y divide-white/[0.07]">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 50}>
                <div className="py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-16">
                  <div className="flex items-center gap-4 sm:w-56 shrink-0">
                    <span className="font-sans text-xs text-zinc-700 tabular-nums w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {pillar.label}
                    </h3>
                  </div>
                  <p className="text-zinc-500 leading-relaxed flex-1 sm:pt-0.5 text-sm">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-28 md:py-44 px-6 md:px-12 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 glow-top pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-20">
          <Reveal>
            <div className="space-y-5">
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
                Principles
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white max-w-xl">
                The principles that
                <br />
                govern everything.
              </h2>
            </div>
          </Reveal>

          <div className="divide-y divide-white/[0.07]">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 60}>
                <div className="py-10 grid grid-cols-1 md:grid-cols-[72px_1fr_2fr] gap-6 md:gap-10 items-start">
                  <span className="font-sans text-xs text-zinc-700 tabular-nums md:pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

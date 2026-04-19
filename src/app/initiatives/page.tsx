import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/sections/Footer";
import { initiatives } from "@/lib/initiatives";

export const metadata: Metadata = {
  title: "Initiatives | Codetopia",
  description:
    "Each Codetopia initiative is purpose-built to close a specific gap in the technology ecosystem. Independent in identity, unified in direction.",
};

const numberWords = [
  "Zero",
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

export default function InitiativesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-36 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            The Initiatives
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.9] text-white max-w-4xl">
            {numberWords[initiatives.length] ?? initiatives.length} fronts.
            <br />
            One mission.
          </h1>
          <p className="text-zinc-500 font-sans leading-relaxed max-w-xl text-base md:text-lg pt-2">
            Each Codetopia initiative is purpose-built to close a specific gap
            in the technology ecosystem. Independent in identity, unified in
            direction.
          </p>
        </div>
      </section>

      {/* Initiative list */}
      <section className="py-20 md:py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto divide-y divide-zinc-900">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.name}
              className="py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start group"
            >
              {/* Left */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <initiative.icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-zinc-600"
                  />
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <Image
                  src={initiative.logo}
                  alt={initiative.name}
                  height={28}
                  className="h-7 w-auto object-contain brightness-0 invert opacity-70"
                />
                <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
                  {initiative.name}
                </h2>
                <span
                  className={`inline-block text-[9px] font-black uppercase tracking-widest px-3 py-1.5 ${
                    initiative.status === "Active"
                      ? "bg-white text-black"
                      : "bg-zinc-900 text-zinc-600 border border-zinc-800"
                  }`}
                >
                  {initiative.status}
                </span>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <p className="text-zinc-400 font-sans leading-relaxed text-base md:text-lg">
                  {initiative.description}
                </p>
                <InitiativeAction initiative={initiative} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              Stay Updated
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
              More initiatives
              <br />
              are on the way.
            </h2>
            <p className="text-zinc-500 font-sans leading-relaxed">
              Studio, Labs, Foundation, and Academy are all in development.
              Subscribe to The Dispatch to know when each one launches.
            </p>
          </div>
          <a
            href="/#dispatch"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black bg-white px-6 py-4 hover:bg-zinc-100 transition-colors shrink-0"
          >
            Subscribe to The Dispatch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InitiativeAction({
  initiative,
}: {
  initiative: (typeof initiatives)[number];
}) {
  if (initiative.link) {
    return (
      <a
        href={initiative.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white border border-zinc-800 px-5 py-3 hover:border-zinc-600 transition-colors group"
      >
        Visit {initiative.shortName}
        <ArrowRight
          size={12}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </a>
    );
  }

  return (
    <a
      href="/#dispatch"
      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors"
    >
      Get notified when it launches
    </a>
  );
}

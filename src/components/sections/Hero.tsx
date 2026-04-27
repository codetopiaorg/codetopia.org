import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LogoBg } from "@/components/ui/LogoBg";
import { TextCycler } from "@/components/ui/TextCycler";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#080808] px-6 md:px-12 relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 glow-top pointer-events-none" />
      <LogoBg invert opacity={0.04} />

      <div className="relative max-w-7xl mx-auto w-full">
        <h1 className="text-[clamp(44px,10.5vw,164px)] font-black tracking-tighter leading-[0.83] text-white animate-fade-up">
          The Technology
          <br />
          Ecosystem.
        </h1>

        <p className="mt-16 text-[clamp(22px,4vw,64px)] font-black tracking-tighter leading-[0.83] text-white/15 animate-fade-up delay-100 overflow-hidden font-display">
          CODETOPIA <TextCycler className="text-white/30" />
        </p>

        <p className="mt-8 text-zinc-500 leading-relaxed text-base max-w-sm animate-fade-up delay-200">
          One organization. A growing network of initiatives building talent,
          producing content, and driving innovation across Africa.
        </p>

        <Link
          href="#initiatives"
          className="mt-10 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] bg-white text-black px-7 py-4 hover:bg-zinc-100 transition-colors group w-fit animate-fade-up delay-300"
        >
          Explore initiatives
          <ArrowRight
            size={11}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

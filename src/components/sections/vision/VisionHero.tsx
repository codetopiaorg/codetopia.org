"use client";

import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const VisionHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden border-b border-zinc-900">
      {/* Background Brand Abstract */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[70vw] h-[70vw] opacity-[0.015] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl space-y-12">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
              The Genesis
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            The <span className="text-zinc-800">Umbrella.</span>
          </h1>

          <div className="space-y-8 pt-8">
            <p className="text-xl md:text-2xl font-sans text-zinc-400 leading-relaxed max-w-2xl italic">
              "Codetopia is the mother company—the architectural core for a
              global ecosystem of technical divisions."
            </p>
            <div className="prose prose-invert prose-zinc max-w-3xl">
              <p className="text-zinc-500 text-lg leading-relaxed">
                We are the overarching authority. Codetopia acts as the parent
                organization for a suite of specialized entities—Community,
                Labs, Studio, and Media. While each division operates with
                autonomy, they are all governed by the same rigorous engineering
                standards and the same relentless pursuit of excellence that
                defines the Mother Company.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed">
                As the technical umbrella, our role is orchestration. We provide
                the unified vision, the capital, and the infrastructure that
                allow our divisions to flourish as independent but synergistic
                powerhouses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

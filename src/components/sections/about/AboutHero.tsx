"use client";

import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden border-b border-zinc-900">
      {/* Background Brand Abstract */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] opacity-[0.02] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl space-y-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            Codetopia: <br />{" "}
            <span className="text-zinc-800">
              Driving a Global Technology Ecosystem.
            </span>
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-800" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
              Established March 2020
            </span>
          </div>

          <div className="space-y-12 pt-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 border-t border-zinc-900 pt-12">
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white">
                  Perspective
                </h2>
                <p className="text-zinc-500 text-lg font-sans leading-relaxed">
                  Progress happens when leaders have freedom to experiment
                  within a structure that values collective quality and
                  performance.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white">
                  Approach
                </h2>
                <p className="text-zinc-500 text-lg font-sans leading-relaxed">
                  Codetopia provides the environment, infrastructure, and
                  guidance so initiatives can focus on building, scaling, and
                  creating global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

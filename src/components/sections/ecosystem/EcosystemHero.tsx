"use client";

import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const EcosystemHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden border-b border-zinc-900 text-center">
      {/* Background Brand Abstract */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] opacity-[0.02] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        <div className="flex justify-center mb-12">
          <div className="w-12 h-px bg-zinc-800" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
          The Codetopia <br /> <span className="text-zinc-800">Ecosystem.</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-6 pt-8">
          <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-500 leading-tight">
            Codetopia is a technology organization supporting independent initiatives in innovation, education, and advanced technology.
          </p>
          <p className="text-zinc-600 text-base md:text-lg font-sans leading-relaxed">
            Each initiative operates independently while sharing infrastructure, standards, and leadership under the Codetopia ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

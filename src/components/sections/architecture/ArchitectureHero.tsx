"use client";

import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const ArchitectureHero = () => {
    return (
        <section className="pt-32 pb-20 px-6 bg-black relative overflow-hidden border-b border-zinc-900 text-center">
            {/* Background Abstract */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] opacity-[0.015] pointer-events-none select-none">
                <Image
                    src={logo}
                    alt=""
                    fill
                    className="object-contain brightness-0 invert"
                />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 space-y-12">

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                    Strategy & <br /> <span className="text-zinc-800">Architecture.</span>
                </h1>

                <div className="max-w-3xl mx-auto space-y-8 pt-4 text-left md:text-center">
                    <p className="text-xl md:text-3xl font-black uppercase tracking-tight text-zinc-400 leading-tight">
                        Codetopia.org serves as the coordinating core for a network of independent initiatives.
                    </p>
                    <div className="space-y-6">
                        <p className="text-zinc-600 text-sm md:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
                            As the mother organization, it provides governance, infrastructure, and standards that enable specialized divisions to operate autonomously while remaining aligned with the ecosystem’s long-term strategy. This structure ensures initiatives grow independently without compromising overall cohesion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

"use client";

import { Layers, ArrowUpRight } from "lucide-react";

export const ScalabilityModel = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-black border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="space-y-4">
                            <div className="h-24 border border-zinc-900 bg-zinc-950 flex items-center justify-between px-8 group hover:border-zinc-500 transition-all">
                                <span className="text-xs font-black uppercase tracking-widest text-zinc-700 group-hover:text-white">Tier 01: Core Architecture</span>
                                <Layers className="w-5 h-5 text-zinc-800 group-hover:text-zinc-400" />
                            </div>
                            <div className="h-24 border border-zinc-900 bg-zinc-950 flex items-center justify-between px-8 group hover:border-zinc-500 transition-all ml-4">
                                <span className="text-xs font-black uppercase tracking-widest text-zinc-700 group-hover:text-white">Tier 02: Strategic Initiatives</span>
                                <Layers className="w-5 h-5 text-zinc-800 group-hover:text-zinc-400" />
                            </div>
                            <div className="h-24 border border-zinc-800 bg-black flex items-center justify-between px-8 group border-dashed ml-8 animate-pulse">
                                <span className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-white">Tier 03: Future Expansion</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-zinc-800" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                                Scalability
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                            Scalability.
                        </h2>
                        <div className="space-y-6">
                            <p className="text-zinc-600 text-base font-sans leading-relaxed">
                                Codetopia’s architecture is built for seamless, long-term expansion. New initiatives integrate smoothly into the network, leveraging shared standards to maintain cohesion while scaling the ecosystem’s capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

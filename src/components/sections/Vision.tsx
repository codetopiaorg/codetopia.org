import React from "react";

export const Vision = () => {
    return (
        <section className="py-32 px-6 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative">
            {/* Background Watermark */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase select-none pointer-events-none tracking-tighter">
                Vision
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="space-y-12">
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        <div className="w-8 h-px bg-zinc-800" />
                        Our Philosophy
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                        Building the <span className="text-zinc-600 block md:inline">Technology Infrastructure</span> of Tomorrow.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold uppercase text-white">The Ecosystem Model</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                We don&apos;t just build products; we build pathways. Codetopia is structured as an interconnected ecosystem where software, media, and community feed into each other to accelerate technical growth.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold uppercase text-white">Measurable Impact</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                Innovation without result is noise. We prioritize technical training and experimental prototyping that yields tangible, high-performance solutions for the African tech landscape and beyond.
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 flex flex-wrap gap-x-12 gap-y-6">
                        <div className="space-y-1">
                            <div className="text-3xl font-black uppercase">100%</div>
                            <div className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">Built for Builders</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-black uppercase">4+</div>
                            <div className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">Active Divisions</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-black uppercase">∞</div>
                            <div className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">Growth Potential</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

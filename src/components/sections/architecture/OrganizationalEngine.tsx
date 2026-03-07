"use client";

import { Microscope, Code2, Radiation } from "lucide-react";

export const OrganizationalEngine = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-8 mb-24">
                    <div className="inline-flex items-center gap-3">
                        <div className="w-8 h-[2px] bg-zinc-800" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                            Growth Lifecycle
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                        Growth <br /> <span className="text-zinc-800">Lifecycle.</span>
                    </h2>
                    <div className="space-y-6 max-w-2xl mx-auto">
                        <p className="text-zinc-500 text-lg md:text-xl font-sans leading-relaxed">
                            Structured Integration
                        </p>
                        <p className="text-zinc-600 text-base font-sans leading-relaxed">
                            New initiatives are supported through a structured lifecycle, moving from concept to fully operational divisions while adhering to the core framework.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 max-w-5xl mx-auto">
                    <EngineTier
                        tier="01"
                        icon={Code2}
                        label="Exploration"
                        desc="Identify opportunities aligned with Codetopia’s vision."
                    />
                    <EngineTier
                        tier="02"
                        icon={Microscope}
                        label="Prototyping"
                        desc="Establish leadership, team, and operational foundations for the initiative."
                    />
                    <EngineTier
                        tier="03"
                        icon={Radiation}
                        label="Integration"
                        desc="Launch as a full ecosystem member with alignment to shared governance and infrastructure."
                    />
                </div>
            </div>
        </section>
    );
};

const EngineTier = ({ tier, icon: Icon, label, desc }: { tier: string; icon: any; label: string; desc: string }) => (
    <div className="bg-black p-10 md:p-12 space-y-8 hover:bg-zinc-950 transition-colors group">
        <div className="flex items-center justify-between">
            <Icon className="w-6 h-6 text-zinc-800 group-hover:text-white transition-colors" />
            <span className="text-4xl font-black text-zinc-900 group-hover:text-zinc-800 transition-colors">{tier}</span>
        </div>
        <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">
                {label}
            </h3>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                {desc}
            </p>
        </div>
    </div>
);

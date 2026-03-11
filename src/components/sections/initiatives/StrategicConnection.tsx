"use client";

import { Shield, Zap, Cpu } from "lucide-react";

export const StrategicConnection = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                            Strategic <br /> <span className="text-zinc-800">Connection.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg font-sans leading-relaxed max-w-lg">
                            All initiatives are connected through the shared pillars of the Codetopia ecosystem:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
                    <ConnectionPillar
                        icon={Shield}
                        title="Shared Governance"
                        desc="Unified organizational standards and ethical frameworks that maintain ecosystem-wide alignment."
                    />
                    <ConnectionPillar
                        icon={Zap}
                        title="Common Infrastructure"
                        desc="Scalable resources and operational frameworks accessible to all initiatives."
                    />
                    <ConnectionPillar
                        icon={Cpu}
                        title="Knowledge Synergy"
                        desc="Strategic sharing of insights and best practices across all divisions."
                    />
                </div>
            </div>
        </section>
    );
};

const ConnectionPillar = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
    <div className="bg-black p-10 md:p-12 space-y-6 group hover:bg-zinc-950 transition-colors">
        <Icon className="w-8 h-8 text-zinc-800 group-hover:text-white transition-colors" />
        <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-zinc-400">
                {title}
            </h3>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                {desc}
            </p>
        </div>
    </div>
);

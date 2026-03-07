"use client";

import { Network, Shield, Zap } from "lucide-react";

export const NetworkModel = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-zinc-800" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                                Network Model
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                            Network <br /> <span className="text-zinc-800">Model.</span>
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-zinc-500 text-lg font-sans leading-relaxed max-w-lg">
                            Decentralized Architecture
                        </p>
                        <div className="space-y-4">
                            <p className="text-zinc-600 text-base font-sans leading-relaxed">
                                Codetopia operates through a network model designed for scalable autonomy. Each initiative maintains control over its domain while connecting to the central coordination core.
                            </p>
                            <p className="text-zinc-600 text-base font-sans leading-relaxed">
                                This approach allows divisions to evolve and pivot quickly, preserving ecosystem-wide alignment without creating dependencies.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Specialized Leadership</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Initiatives are led by individuals focused exclusively on the mission of their division, ensuring domain expertise drives decisions.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Shared Governance</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            The Codetopia core sets organizational standards and frameworks that maintain strategic alignment across the ecosystem.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Operational Independence</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Divisions can act decisively within their domains, free from centralized bottlenecks, while still adhering to shared governance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

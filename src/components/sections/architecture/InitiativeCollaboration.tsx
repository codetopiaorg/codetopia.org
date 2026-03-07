"use client";

import { Cpu, Zap, Share2 } from "lucide-react";

export const InitiativeCollaboration = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-black border-b border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-zinc-800" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                                    Coordination
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                                Coordination <br /> <span className="text-zinc-800">& Alignment.</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-zinc-500 text-lg font-sans leading-relaxed max-w-lg">
                                The core provides strategic guidance and organizational support that strengthens synergy across initiatives. Shared frameworks ensure insights and best practices move seamlessly between divisions.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <SyncItem
                                icon={Cpu}
                                title="Shared Infrastructure"
                                desc="Initiatives operate on a common organizational foundation that provides governance, coordination, and operational support."
                            />
                            <SyncItem
                                icon={Zap}
                                title="Knowledge Exchange"
                                desc="Insights and developments produced within one initiative can inform and support the work of others."
                            />
                            <SyncItem
                                icon={Share2}
                                title="Strategic Alignment"
                                desc="The Codetopia core ensures that initiatives grow in ways that strengthen the broader ecosystem."
                            />
                        </div>
                    </div>

                    <div className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center">
                        <div className="absolute inset-0 border border-zinc-900 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute inset-10 border border-zinc-900 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                        <div className="absolute inset-20 border border-zinc-800 rounded-full" />

                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 flex items-center justify-center font-black text-zinc-500 uppercase text-[10px] tracking-widest italic animate-pulse">
                                Sync
                            </div>
                            <div className="w-20 h-20 bg-black border border-zinc-900 flex items-center justify-center font-black text-zinc-800 uppercase text-[10px] tracking-widest italic">
                                Core
                            </div>
                            <div className="w-20 h-20 bg-black border border-zinc-900 flex items-center justify-center font-black text-zinc-800 uppercase text-[10px] tracking-widest italic">
                                Hub
                            </div>
                            <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 flex items-center justify-center font-black text-zinc-500 uppercase text-[10px] tracking-widest italic animate-pulse">
                                Data
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-900 -z-10" />
                        <div className="absolute top-0 left-1/2 h-full w-px bg-zinc-900 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SyncItem = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
    <div className="flex gap-6 group">
        <div className="flex-shrink-0 w-12 h-12 bg-zinc-950 border border-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
            <Icon className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
        </div>
        <div className="space-y-2">
            <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">
                {title}
            </h3>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed max-w-sm">
                {desc}
            </p>
        </div>
    </div>
);

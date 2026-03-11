"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const initiatives = [
    {
        name: "Codetopia Community",
        domain: "Mentorship & Learning",
        description: "A global ecosystem for developers, focusing on mentorship, leadership, and collaborative growth.",
        href: "https://community.codetopia.tech",
    },
    {
        name: "Codetopia Labs",
        domain: "R&D & Prototyping",
        description: "A dedicated division for experimentation, supporting innovation within the ecosystem’s framework.",
        href: "https://labs.codetopia.tech",
    },
    {
        name: "Codetopia Studio",
        domain: "Knowledge & Production",
        description: "A media-focused division producing high-quality educational content and knowledge assets.",
        href: "https://studio.codetopia.tech",
    },
];

export const InitiativeGrid = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-black border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-3 mb-12">
                    <div className="w-8 h-[2px] bg-zinc-800" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                        Core Initiatives
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
                    {initiatives.map((item) => (
                        <div
                            key={item.name}
                            className="bg-black p-10 md:p-12 space-y-12 flex flex-col justify-between hover:bg-zinc-950 transition-all duration-500 group"
                        >
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="inline-block border border-zinc-800 px-3 py-1 bg-zinc-950">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
                                            {item.domain}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-zinc-500 font-sans leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>

                            <Link
                                href={item.href}
                                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all group/link"
                            >
                                Explore Initiative
                                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import React from "react";
import { cn } from "@/lib/utils";
import { Users, Video, Share2, Beaker } from "lucide-react";
import Image from "next/image";

import communityLogo from "@/assets/images/logos/community-logo.png";
import studioLogo from "@/assets/images/logos/studio-logo.png";
import mediaLogo from "@/assets/images/logos/media-logo.png";

const entities = [
    {
        name: "Codetopia Community",
        description: "Our active flagship. A mentorship-driven hub where developers become leaders through high-impact collaboration.",
        logo: communityLogo,
        status: "Active",
        link: "https://community.codetopia.dev",
        active: true,
    },
    {
        name: "Codetopia Studio",
        description: "The production house for high-fidelity technical tutorials, podcasts, and digital content.",
        logo: studioLogo,
        status: "Coming Soon",
        active: false,
    },
    {
        name: "Codetopia Media",
        description: "Amplifying the stories of African tech builders and expanding our brand's global reach.",
        logo: mediaLogo,
        status: "Coming Soon",
        active: false,
    },
    {
        name: "Codetopia Labs",
        description: "The R&D arm centered on experimental prototypes and high-performance open source software.",
        icon: Beaker,
        status: "Coming Soon",
        active: false,
    },
];

export const EntitySpotlight = () => {
    return (
        <section className="py-24 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                            The Ecosystem
                        </h2>
                        <p className="text-zinc-500 max-w-xl text-lg font-sans">
                            Codetopia is a multi-dimensional platform. Each division represents a pillar of our mission to engineer a better technical future.
                        </p>
                    </div>
                    <div className="h-px flex-1 bg-zinc-900 hidden md:block mb-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {entities.map((entity) => (
                        <div
                            key={entity.name}
                            className={cn(
                                "group relative p-8 border transition-all duration-500 flex flex-col justify-between h-[360px]",
                                entity.active
                                    ? "bg-white border-white text-black scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                                    : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:scale-[1.01]"
                            )}
                        >
                            <div className="space-y-6">
                                <div className={cn(
                                    "w-12 h-12 flex items-center justify-center border overflow-hidden",
                                    entity.active ? "border-black bg-black" : "border-zinc-800 bg-zinc-950 group-hover:border-zinc-700"
                                )}>
                                    {entity.logo ? (
                                        <Image
                                            src={entity.logo}
                                            alt={entity.name}
                                            width={48}
                                            height={48}
                                            className={cn(
                                                "w-full h-full object-contain p-1",
                                                entity.active ? "" : "opacity-30 grayscale group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-500"
                                            )}
                                        />
                                    ) : (
                                        entity.icon && <entity.icon size={24} strokeWidth={1.5} className={cn(
                                            entity.active ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"
                                        )} />
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <h3 className={cn(
                                        "text-xl font-black uppercase tracking-tight",
                                        entity.active ? "text-black" : "text-zinc-300"
                                    )}>
                                        {entity.name}
                                    </h3>
                                    <p className={cn(
                                        "text-sm font-sans leading-relaxed",
                                        entity.active ? "text-zinc-700" : "text-zinc-500"
                                    )}>
                                        {entity.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-6">
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-widest",
                                    entity.active ? "text-black" : "text-zinc-600"
                                )}>
                                    {entity.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArrowRight = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

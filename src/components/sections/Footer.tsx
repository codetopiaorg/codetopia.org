"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Footer = () => {
    return (
        <footer className="bg-black pt-32 pb-12 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 mb-32">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                Join the <br /> <span className="text-zinc-800">Journey.</span>
                            </h2>
                            <p className="text-zinc-500 text-lg max-w-md font-sans leading-relaxed">
                                Codetopia is larger than any one division. It is a commitment to engineering excellence and technical sovereignty.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Instagram} />
                            <SocialLink href="#" icon={Linkedin} />
                            <SocialLink href="#" icon={Github} />
                        </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 space-y-8 relative overflow-hidden group">
                        {/* Mesh Background */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.01] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.02] transition-colors duration-1000" />

                        <div className="space-y-2 relative z-10">
                            <h3 className="text-2xl font-black uppercase italic tracking-wider">The Dispatch</h3>
                            <p className="text-zinc-500 text-sm font-sans">
                                Get the latest from the ecosystem. No noise, just engineering updates and mission logs.
                            </p>
                        </div>

                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="EMAIL@ADDRESS.COM"
                                    className="w-full bg-zinc-900 border border-zinc-800 px-6 h-16 uppercase text-xs font-bold tracking-[0.2em] focus:border-white focus:outline-none transition-colors"
                                />
                            </div>
                            <Button size="xl" variant="primary" className="w-full">
                                Subscribe <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Image
                            src={logo}
                            alt="Codetopia"
                            width={120}
                            height={40}
                            className="w-auto h-8 object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
                        />
                        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">
                            © 2026 Ecosystem Core
                        </p>
                    </div>

                    <div className="flex gap-12">
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Brand Assets</FooterLink>
                        <FooterLink href="#">Infrastructure</FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
    <a
        href={href}
        className="w-12 h-12 flex items-center justify-center border border-zinc-900 bg-zinc-950 text-zinc-600 hover:text-white hover:border-white transition-all duration-300 transform hover:-translate-y-1"
    >
        <Icon size={18} strokeWidth={1.5} />
    </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
    >
        {children}
    </a>
);

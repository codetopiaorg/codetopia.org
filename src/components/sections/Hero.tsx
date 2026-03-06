import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-20 px-6">
            {/* Subtle Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl w-full text-center space-y-24">
                <div className="flex justify-center animate-in fade-in zoom-in-95 duration-1000">
                    <Image
                        src={logo}
                        alt="Codetopia"
                        width={700}
                        height={220}
                        className="w-auto h-32 md:h-44 lg:h-52 object-contain brightness-0 invert transition-all duration-700 hover:scale-[1.03] cursor-default"
                        priority
                    />
                </div>

                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-black tracking-tighter leading-none text-white transition-all">
                        Engineering the Future
                    </h1>
                    <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl font-sans font-medium leading-relaxed tracking-tight opacity-80">
                        Building software, leading innovation, and shaping the next generation of technologists
                        <span className="block mt-6 text-xs font-black uppercase tracking-[0.4em] text-zinc-500">
                            Software • Innovation • Leadership
                        </span>
                    </p>
                </div>
            </div>

        </section>
    );
};

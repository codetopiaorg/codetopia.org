"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const TheDispatch = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-black relative overflow-hidden border-t border-zinc-900">
      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10 md:space-y-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Ecosystem Updates
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] text-white">
                Codetopia <br />
                Dispatch<span className="text-zinc-800">.</span>
              </h2>
            </div>
            <p className="max-w-md text-zinc-400 text-lg md:text-xl font-sans font-medium leading-relaxed tracking-tight opacity-80">
              Stay informed on our latest engineering breakthroughs, mission
              logs, and the expansion of the Codetopia ecosystem.
            </p>
          </div>

          <div className="relative">
            <div className="bg-zinc-950 border border-zinc-900 p-6 sm:p-10 md:p-16 space-y-10 md:space-y-12 relative group shadow-2xl">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight text-white">
                  Join the Network
                </h3>
                <p className="text-zinc-500 text-sm font-sans tracking-tight">
                  Weekly insights into high-performance engineering and
                  leadership.
                </p>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group/input">
                  <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-zinc-800 py-4 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] text-white focus:border-white transition-all outline-none placeholder:text-zinc-700"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-focus-within/input:w-full" />
                </div>

                <Button
                  size="xl"
                  variant="primary"
                  className="w-full h-14 md:h-20 group/btn text-sm md:text-lg px-6 md:px-10"
                >
                  Subscribe to Updates
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/btn:translate-x-1" />
                </Button>

                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest text-center">
                  Privacy protected. Zero spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

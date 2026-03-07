"use client";

import { Box } from "lucide-react";

export const EcosystemEvolution = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square border border-zinc-900 bg-black flex items-center justify-center opacity-50">
                <Box className="w-8 h-8 text-zinc-800" />
              </div>
              <div className="aspect-square border border-zinc-900 bg-black flex items-center justify-center opacity-50">
                <Box className="w-8 h-8 text-zinc-800" />
              </div>
              <div className="aspect-square border border-zinc-900 bg-black flex items-center justify-center opacity-50">
                <Box className="w-8 h-8 text-zinc-800" />
              </div>
              <div className="aspect-square border border-zinc-500 bg-black flex items-center justify-center animate-pulse">
                <Box className="w-8 h-8 text-zinc-400" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Future <br /> <span className="text-zinc-800">Initiatives.</span>
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="text-zinc-500 text-lg font-sans leading-relaxed">
                The Codetopia ecosystem is designed to grow. New initiatives can
                emerge as the organization expands while maintaining shared
                standards and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

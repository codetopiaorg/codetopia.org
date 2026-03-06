"use client";

import { Crosshair, Eye, Fingerprint, Gauge } from "lucide-react";

const values = [
  {
    title: "Precision & Impact",
    description: "Ensuring global-scale outcomes through precise execution.",
    icon: Crosshair,
  },
  {
    title: "Open Communication",
    description: "Transparency and accountability guide every action.",
    icon: Eye,
  },
  {
    title: "Iterate & Deliver",
    description: "Rapid prototyping to deliver high-quality results.",
    icon: Gauge,
  },
  {
    title: "Trust & Quality",
    description: "Maintaining ecosystem-wide excellence in all decisions.",
    icon: Fingerprint,
  },
];

export const CoreValues = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 md:mb-32">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[2px] bg-zinc-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                The Standards
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Core <br /> <span className="text-zinc-800">Values.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-sans leading-relaxed">
              The principles that drive our high-performance culture and
              operational standards:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, _idx) => (
            <div
              key={value.title}
              className="p-8 border border-zinc-900 bg-zinc-950/50 group hover:border-zinc-700 transition-all duration-500 space-y-6"
            >
              <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 transition-all">
                <value.icon className="w-5 h-5 text-zinc-600 group-hover:text-black transition-colors" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed uppercase tracking-wider">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

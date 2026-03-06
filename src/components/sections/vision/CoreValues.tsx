"use client";

import { Check, Shield, Target, Zap } from "lucide-react";

const values = [
  {
    title: "Technical Prowess",
    description:
      "We don't just use tools; we master the underlying architectures. Excellence is the only acceptable baseline.",
    icon: Zap,
  },
  {
    title: "Radical Transparency",
    description:
      "Governance through truth. We communicate clearly, act decisively, and own our performance metrics.",
    icon: Shield,
  },
  {
    title: "High-Performance Culture",
    description:
      "We work with intensity. Prototyping fast, failing faster, and deploying the optimal solution every time.",
    icon: Target,
  },
  {
    title: "Integrity of the Core",
    description:
      "Our standards are immutable. Every line of code and every business decision must align with the ecosystem's health.",
    icon: Check,
  },
];

export const CoreValues = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Core Values
            </h2>
            <p className="text-zinc-500 text-lg font-sans max-w-xl">
              The principles that drive our high-performance culture and dictate
              our engineering standards.
            </p>
          </div>
          <div className="text-[10px] font-mono text-zinc-700 hidden md:block">
            VALUE_SYSTEM_VERSION_1.0
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, _index) => (
            <div key={value.title} className="group space-y-6">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-900 bg-black group-hover:border-white transition-all duration-500">
                <value.icon className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                  {value.title}
                </h3>
                <p className="text-zinc-500 font-sans text-sm leading-relaxed group-hover:text-zinc-400 transition-colors text-pretty">
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

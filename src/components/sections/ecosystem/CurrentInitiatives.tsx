"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const initiatives = [
  {
    name: "Codetopia Community",
    focus: "Mentorship & Learning",
    description:
      "A global community where builders learn, collaborate, and develop technical leadership through mentorship, events, and open collaboration.",
    href: "https://community.codetopia.tech",
  },
  {
    name: "Codetopia Labs",
    focus: "R&D & Prototyping",
    description:
      "An experimental division focused on building new technologies, frameworks, and advanced systems through research and prototyping.",
    href: "https://labs.codetopia.tech",
  },
  {
    name: "Codetopia Studio",
    focus: "Knowledge & Production",
    description:
      "Produces high-quality educational content, tutorials, podcasts, and technical media that share knowledge across the ecosystem.",
    href: "https://studio.codetopia.tech",
  },
];

export const CurrentInitiatives = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 md:mb-32">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Initiatives.
            </h2>
            <p className="text-zinc-500 text-lg font-sans leading-relaxed max-w-lg">
              Independent divisions built under the Codetopia ecosystem:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {initiatives.map((item) => (
            <div
              key={item.name}
              className="bg-black p-10 md:p-12 space-y-12 flex flex-col justify-between hover:bg-zinc-950 transition-all duration-500 group"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <div className="inline-block border border-zinc-800 px-3 py-1 bg-zinc-950">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
                      {item.focus}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-500 font-sans leading-relaxed text-sm md:text-base">
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

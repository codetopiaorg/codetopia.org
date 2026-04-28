import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { initiatives } from "@/lib/initiatives";

export const EntitySpotlight = () => {
  const active = initiatives.filter((i) => i.status === "Active");
  const upcoming = initiatives.filter((i) => i.status !== "Active");

  return (
    <section
      id="initiatives"
      className="relative py-32 md:py-56 px-6 md:px-12 border-t border-white/[0.07] overflow-hidden"
    >
      <div className="absolute inset-0 glow-top pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <Reveal>
          <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase mb-6">
            Our Work
          </p>
          <h2 className="text-[clamp(40px,5.5vw,88px)] font-black tracking-tighter text-white leading-[0.88] mb-10">
            One organization.
            <br />
            Many fronts.
          </h2>
          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] bg-white text-black px-7 py-4 hover:bg-zinc-100 transition-colors group"
          >
            Explore all initiatives
            <ArrowRight
              size={11}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </Reveal>

        {/* Right */}
        <Reveal delay={120} className="lg:pt-16">
          <div className="space-y-8">
            <div>
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase mb-4">
                Active
              </p>
              <div className="space-y-3">
                {active.map((initiative) => (
                  <a
                    key={initiative.name}
                    href={initiative.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2 text-white hover:text-zinc-300 transition-colors"
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium">
                      <initiative.icon
                        size={14}
                        className="text-zinc-500 group-hover:text-zinc-300 transition-colors"
                      />
                      {initiative.shortName}
                    </span>
                    <ArrowRight
                      size={12}
                      className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase mb-4">
                In Development
              </p>
              <div className="space-y-3">
                {upcoming.map((initiative) => (
                  <div
                    key={initiative.name}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-zinc-600">
                      <initiative.icon size={14} className="text-zinc-700" />
                      {initiative.shortName}
                    </span>
                    <span className="font-sans text-xs text-zinc-700">
                      Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

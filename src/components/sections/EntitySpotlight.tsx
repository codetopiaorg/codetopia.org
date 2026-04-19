import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { initiatives } from "@/lib/initiatives";
import { cn } from "@/lib/utils";

export const EntitySpotlight = () => {
  return (
    <section
      id="initiatives"
      className="py-20 md:py-32 px-6 bg-black border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            The Initiatives
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            One organization.
            <br className="sm:hidden" /> Many fronts.
          </h2>
        </div>

        <div className="divide-y divide-zinc-900">
          {initiatives.map((initiative) => (
            <div key={initiative.name} className="py-10 md:py-12 space-y-4">
              {/* Line 1: icon + logo */}
              <div className="flex items-center gap-3">
                <initiative.icon
                  size={20}
                  strokeWidth={1.5}
                  className={cn(
                    initiative.link ? "text-zinc-400" : "text-zinc-700",
                  )}
                />
                <Image
                  src={initiative.logo}
                  alt={initiative.name}
                  height={24}
                  className={cn(
                    "h-6 w-auto object-contain brightness-0 invert",
                    !initiative.link && "opacity-25",
                  )}
                />
              </div>

              {/* Line 2: name + status */}
              <div className="flex items-center gap-3">
                <p
                  className={cn(
                    "text-base font-black tracking-tight font-display",
                    initiative.link ? "text-white" : "text-zinc-600",
                  )}
                >
                  {initiative.name}
                </p>
                <span
                  className={cn(
                    "text-xs font-black uppercase tracking-widest px-2 py-1",
                    initiative.link
                      ? "bg-white text-black"
                      : "border border-zinc-800 text-zinc-700",
                  )}
                >
                  {initiative.status}
                </span>
              </div>

              {/* Line 3: description */}
              <p className="text-zinc-500 font-sans text-base leading-relaxed max-w-2xl">
                {initiative.description}
              </p>

              {/* Line 4: action */}
              <div>
                {initiative.link ? (
                  <a
                    href={initiative.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white hover:text-zinc-300 transition-colors no-underline group"
                  >
                    Visit
                    <ArrowRight
                      size={10}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>
                ) : (
                  <a
                    href="#dispatch"
                    className="text-xs font-black uppercase tracking-widest text-zinc-700 hover:text-zinc-400 transition-colors no-underline"
                  >
                    Notify me
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

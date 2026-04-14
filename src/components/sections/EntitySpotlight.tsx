import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { type Initiative, initiatives } from "@/lib/initiatives";
import { cn, getXlGridCols } from "@/lib/utils";

export const EntitySpotlight = () => {
  return (
    <section
      id="initiatives"
      className="py-20 md:py-32 px-6 bg-black border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              The Initiatives
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter gradient-text">
              One organization.
              <br className="sm:hidden" /> Many fronts.
            </h2>
          </div>
          <a
            href="/initiatives"
            className="shrink-0 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors group"
          >
            View all
            <ArrowRight
              size={12}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900",
            getXlGridCols(initiatives.length),
          )}
        >
          {initiatives.map((initiative) =>
            initiative.link ? (
              <a
                key={initiative.name}
                href={initiative.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 flex flex-col gap-8 justify-between bg-white text-black hover:bg-zinc-50 transition-colors group"
              >
                <CardContent initiative={initiative} />
              </a>
            ) : (
              <div
                key={initiative.name}
                className="p-8 flex flex-col gap-8 justify-between bg-zinc-950 hover:bg-zinc-900/60 transition-colors"
              >
                <CardContent initiative={initiative} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const CardContent = ({ initiative }: { initiative: Initiative }) => (
  <>
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <initiative.icon
          size={18}
          strokeWidth={1.5}
          className={initiative.link ? "text-zinc-400" : "text-zinc-700"}
        />
        <Image
          src={initiative.logo}
          alt={initiative.name}
          height={18}
          className={`h-[18px] w-auto object-contain ${initiative.link ? "brightness-0" : "brightness-0 invert opacity-25"}`}
        />
      </div>
      <div className="space-y-2">
        <h3
          className={cn(
            "text-sm font-black uppercase tracking-tight",
            initiative.link ? "text-black" : "text-zinc-300",
          )}
        >
          {initiative.name}
        </h3>
        <p
          className={cn(
            "text-xs font-sans leading-relaxed",
            initiative.link ? "text-zinc-600" : "text-zinc-600",
          )}
        >
          {initiative.description}
        </p>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <span
        className={cn(
          "text-[9px] font-black uppercase tracking-widest",
          initiative.link ? "text-black" : "text-zinc-700",
        )}
      >
        {initiative.status}
      </span>
      {initiative.link ? (
        <ArrowRight
          size={14}
          className="text-black group-hover:translate-x-1 transition-transform"
        />
      ) : (
        <a
          href="#dispatch"
          className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-zinc-700 hover:text-white transition-colors group/notify"
        >
          Notify me
          <ArrowRight
            size={10}
            className="group-hover/notify:translate-x-0.5 transition-transform"
          />
        </a>
      )}
    </div>
  </>
);

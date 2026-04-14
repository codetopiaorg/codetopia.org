import { pillars } from "@/lib/pillars";
import { cn, getXlGridCols } from "@/lib/utils";

export const Vision = () => {
  return (
    <section
      id="mission"
      className="py-20 md:py-32 px-6 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
        <div className="max-w-2xl space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] gradient-text">
            Building the organizations
            <br />
            that shape tomorrow.
          </h2>
          <p className="text-zinc-500 font-sans leading-relaxed">
            Everything Codetopia does maps back to one of these commitments.
            Each initiative exists to advance them.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800",
            getXlGridCols(pillars.length),
          )}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className="bg-zinc-950 p-6 md:p-8 space-y-4 hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                  {pillar.label}
                </h3>
                <span className="text-[9px] font-black text-zinc-800 group-hover:text-zinc-700 transition-colors tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

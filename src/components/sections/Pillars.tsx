import { SectionHeading } from "@/components/sections/SectionHeading";
import { pillars } from "@/lib/pillars";

interface Props {
  title: React.ReactNode;
  intro: React.ReactNode;
}

export const Pillars = ({ title, intro }: Props) => {
  return (
    <section id="pillars" className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title}>
          <p className="text-zinc-400 leading-relaxed">{intro}</p>
        </SectionHeading>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8">
          {pillars.map((pillar, i) => (
            <li key={pillar.label} className="pt-6 pb-10">
              <span className="text-sm text-zinc-600 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.02em] text-white">
                {pillar.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {pillar.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

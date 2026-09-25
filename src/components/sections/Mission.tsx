import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Mission = () => {
  return (
    <section className="bg-[#080808] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Talent is equally distributed. Opportunity is not."
          className="mb-0 md:mb-0"
        >
          <p className="text-lg text-zinc-400 leading-relaxed">
            Codetopia exists to close that gap.
          </p>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-sm text-white"
          >
            About Codetopia
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </SectionHeading>
      </div>
    </section>
  );
};

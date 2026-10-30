import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Mission = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-24 md:py-32 selection:bg-[#080808] selection:text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Talent is equally distributed. Opportunity is not."
          className="mb-0 md:mb-0"
          titleClassName="text-[#080808]"
        >
          <p className="text-lg text-zinc-600 leading-relaxed">
            Codetopia exists to bridge that gap.
          </p>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-sm text-[#080808] focus-visible:outline-[#080808]"
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

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InitiativeIndex } from "@/components/sections/InitiativeIndex";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { initiatives } from "@/lib/initiatives";

export const EntitySpotlight = () => {
  return (
    <section
      id="initiatives"
      className="bg-[#080808] px-6 md:px-12 pt-10 md:pt-14 pb-24 md:pb-32 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={
            <>
              Initiatives{" "}
              <span className="text-zinc-600">
                ({String(initiatives.length).padStart(2, "0")})
              </span>
            </>
          }
        >
          <Link
            href="/initiatives"
            className="group inline-flex items-center gap-2 text-sm text-white"
          >
            What each initiative does
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </SectionHeading>

        <InitiativeIndex />
      </div>
    </section>
  );
};

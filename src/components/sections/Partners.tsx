import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { partners } from "@/lib/partners";

// The logo grid, shared by the homepage section and /partners.
export const PartnerGrid = () => (
  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-px pl-px">
    {partners.map((partner) => (
      <li key={partner.name} className="-mt-px -ml-px border border-zinc-900">
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-between gap-8 p-6 md:p-8"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            className="h-14 md:h-16 w-auto max-w-full object-contain object-left grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
          <div>
            <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
              {partner.name}
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              With Codetopia {partner.initiative}
            </p>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

// Homepage teaser: the logos, with the detail on /partners.
export const Partners = () => {
  return (
    <section
      id="partners"
      className="bg-[#080808] px-6 md:px-12 py-24 md:py-32 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Who we work with.">
          <p className="text-lg text-zinc-400 leading-relaxed">
            Organizations we work with across our initiatives, current and past.
          </p>
          <Link
            href="/partners"
            className="group mt-6 inline-flex items-center gap-2 text-sm text-white"
          >
            Partner with Codetopia
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </SectionHeading>

        <PartnerGrid />
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/partners";

// The full logo grid on /partners.
export const PartnerGrid = () => (
  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
    {partners.map((partner) => (
      <li key={partner.name}>
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-between gap-6"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            className="h-14 md:h-16 w-auto max-w-full object-contain object-left grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
          <div>
            <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
              {partner.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              With Codetopia {partner.initiative}
            </p>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

// A quiet row of logos straight under the homepage hero, as early proof.
export const PartnerStrip = () => (
  <section className="bg-[#080808] px-6 md:px-12 py-12 md:py-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 items-center">
      <p className="md:col-span-3 text-lg md:text-xl leading-relaxed text-zinc-400">
        Working with organizations across the ecosystem
      </p>
      <ul className="md:col-span-9 flex flex-wrap items-center gap-x-12 gap-y-8">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} (opens in a new tab)`}
              className="group block"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </a>
          </li>
        ))}
      </ul>
      <Link
        href="/partners"
        className="group md:col-start-4 md:col-span-9 w-fit inline-flex items-center gap-2 text-sm text-white"
      >
        Partner with Codetopia
        <ArrowRight
          size={14}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </Link>
    </div>
  </section>
);

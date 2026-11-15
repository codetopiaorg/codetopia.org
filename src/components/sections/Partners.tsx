import Image from "next/image";
import { partners } from "@/lib/partners";

// The full logo grid on /partners: ruled cells, logo, name, which initiative
export const PartnerGrid = () => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {partners.map((partner) => (
      <li key={partner.name}>
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-between gap-10 p-8"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            className={`h-12 w-auto max-w-full object-contain object-left grayscale group-hover:grayscale-0 transition-[filter] duration-300 ${partner.whiteLogo ? "invert" : ""}`}
          />
          <div>
            <p className="text-sm text-black">
              {partner.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              With Codetopia {partner.initiative}
            </p>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

// A quiet row of logos under the home page opening, like Linear's customer wall
export const LogoWall = () => (
  <section className="py-12 md:py-16">
    <div className="mx-auto max-w-[1200px] px-6">
      <p className="text-center text-sm text-zinc-500">
        Working with organizations across the ecosystem
      </p>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} (opens in a new tab)`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className={`h-9 md:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${partner.whiteLogo ? "invert" : ""}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

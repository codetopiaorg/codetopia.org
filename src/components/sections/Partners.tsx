import Image from "next/image";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { partners } from "@/lib/partners";

export const Partners = () => {
  return (
    <section
      id="partners"
      className="bg-[#080808] px-6 md:px-12 py-24 md:py-32 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Who we work with.">
          <p className="text-lg text-zinc-400 leading-relaxed">
            Organizations we&rsquo;ve worked with across our initiatives. To
            partner with Codetopia, write to{" "}
            <a
              href="mailto:hello@codetopia.org?subject=Partnership%20with%20Codetopia"
              className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors"
            >
              hello@codetopia.org
            </a>
            .
          </p>
        </SectionHeading>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-px pl-px">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="-mt-px -ml-px border border-zinc-900"
            >
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
      </div>
    </section>
  );
};

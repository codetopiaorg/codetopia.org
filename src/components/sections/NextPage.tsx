import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
  description: string;
}

// Closes an inner page with a single onward step, so no page is a dead end.
export const NextPage = ({ href, title, description }: Props) => (
  <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
    <div className="max-w-7xl mx-auto">
      <Link
        href={href}
        className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 pt-8 md:pt-10"
      >
        <span className="md:col-span-3 text-sm text-zinc-500">Next</span>
        <span className="md:col-span-9 flex items-start justify-between gap-6">
          <span>
            <span className="block font-display font-medium text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-[-0.04em] text-white">
              {title}
            </span>
            <span className="mt-4 block max-w-lg text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {description}
            </span>
          </span>
          <ArrowRight
            size={32}
            strokeWidth={1.5}
            className="mt-2 shrink-0 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all"
          />
        </span>
      </Link>
    </div>
  </section>
);

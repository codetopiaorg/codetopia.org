import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { initiatives } from "@/lib/initiatives";
import { cn } from "@/lib/utils";

interface Props {
  /** /initiatives shows logos and descriptions; the homepage lists names only. */
  withDescriptions?: boolean;
}

// The ruled list of initiatives, shared by the homepage and /initiatives.
export const InitiativeIndex = ({ withDescriptions = false }: Props) => (
  <ol>
    {initiatives.map((initiative, i) => {
      const live = initiative.status === "Active" && initiative.link;
      const row = (
        <div
          className={cn(
            "grid grid-cols-[2.5rem_1fr_auto] gap-x-4 md:gap-x-8 gap-y-2 py-7 md:py-9",
            withDescriptions
              ? "md:grid-cols-[4rem_minmax(0,4fr)_minmax(0,6fr)_9rem] items-start"
              : "md:grid-cols-[4rem_1fr_9rem] items-baseline",
          )}
        >
          <span
            className={cn(
              "text-sm text-zinc-600 tabular-nums",
              withDescriptions && "pt-2 md:pt-3.5",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "font-display text-2xl md:text-4xl font-medium tracking-[-0.03em] transition-colors",
              live ? "text-white" : "text-zinc-400",
            )}
          >
            {withDescriptions ? (
              // Official wordmark where each initiative is introduced.
              <Image
                src={initiative.logo}
                alt={initiative.name}
                sizes="260px"
                className={cn(
                  "block h-9 md:h-12 w-auto max-w-full object-contain object-left brightness-0 invert",
                  live ? "opacity-100" : "opacity-60",
                )}
              />
            ) : (
              initiative.shortName
            )}
          </h3>
          {withDescriptions && (
            <p className="col-start-2 col-span-2 md:col-start-auto md:col-span-1 row-start-2 md:row-start-auto md:pt-3 text-sm md:text-base leading-relaxed text-zinc-500 max-w-xl">
              {initiative.description}
            </p>
          )}
          <span
            className={cn(
              "col-start-3 row-start-1 md:col-start-auto md:row-start-auto justify-self-end inline-flex items-center gap-1.5 text-sm whitespace-nowrap",
              withDescriptions && "pt-2 md:pt-3.5",
              live ? "text-white" : "text-zinc-600",
            )}
          >
            {live ? (
              <>
                Visit
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </>
            ) : (
              "Forthcoming"
            )}
          </span>
        </div>
      );

      return (
        <li key={initiative.name}>
          {live ? (
            <a
              href={initiative.link ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${initiative.name} (opens in a new tab)`}
              className="group block hover:bg-white/[0.03] transition-colors"
            >
              {row}
            </a>
          ) : (
            row
          )}
        </li>
      );
    })}
  </ol>
);

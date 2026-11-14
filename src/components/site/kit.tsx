import { ArrowRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Shared building blocks for every page, in Linear's structure on white:
// a short opening, labelled chapters, ruled grids, one closing call to action

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("mx-auto w-full max-w-[1200px] px-6", className)}>
    {children}
  </div>
);

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "plain";
  className?: string;
};

export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) => {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cn(
    "group inline-flex h-10 items-center gap-2 px-4 text-sm font-medium transition-colors",
    variant === "primary" && "bg-black text-white hover:bg-zinc-800",
    variant === "secondary" && "bg-zinc-100 text-black hover:bg-zinc-200",
    variant === "plain" && "px-0 text-black hover:text-zinc-600",
    className,
  );
  const arrow = (
    <ArrowRight
      size={14}
      className="group-hover:translate-x-0.5 transition-transform"
    />
  );
  return external ? (
    <a
      href={href}
      className={classes}
      {...(href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      {arrow}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
};

// A faint glow at the top of the page: the only decoration on the site
export const Aura = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(55%_65%_at_50%_0%,rgba(99,102,241,0.16),rgba(236,72,153,0.06)_45%,transparent_75%)]"
  />
);

// The opening of every page: headline, one line, optional actions
export const PageIntro = ({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <section className="relative pt-40 md:pt-52 pb-8 md:pb-12">
    <Aura />
    <Container className="relative">
      {eyebrow && (
        <p className="mb-6 text-sm text-zinc-500 animate-fade-up">{eyebrow}</p>
      )}
      <h1 className="max-w-4xl text-balance font-display font-medium text-[clamp(44px,6.6vw,88px)] leading-[1] tracking-[-0.045em] text-black animate-fade-up">
        {title}
      </h1>
      {intro && (
        <div className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-zinc-600 animate-fade-up delay-100">
          {intro}
        </div>
      )}
      {children && (
        <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up delay-200">
          {children}
        </div>
      )}
    </Container>
  </section>
);

// A chapter: a small label, a big heading and a short line beside it
export const Chapter = ({
  label,
  logo,
  title,
  intro,
  id,
  children,
  className,
}: {
  label: string;
  // an initiative's logo, shown in place of the text label
  logo?: StaticImageData;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={cn("py-24 md:py-40", className)}>
    <Container>
      {logo ? (
        <Image
          src={logo}
          alt={label}
          className="h-8 md:h-9 w-auto object-contain object-left brightness-0"
        />
      ) : (
        <p className="text-sm text-zinc-500">{label}</p>
      )}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
        <h2 className="md:col-span-7 text-balance font-display font-medium text-[clamp(32px,4.4vw,56px)] leading-[1.02] tracking-[-0.04em] text-black">
          {title}
        </h2>
        {intro && (
          <div className="md:col-span-5 md:pt-2 text-lg leading-relaxed text-zinc-600">
            {intro}
          </div>
        )}
      </div>
      {children && <div className="mt-12 md:mt-16">{children}</div>}
    </Container>
  </section>
);

// Three (or more) points in a row, spaced, no lines
export const RuledGrid = ({
  items,
  columns = 3,
}: {
  items: { title: React.ReactNode; body: React.ReactNode }[];
  columns?: 2 | 3 | 4 | 5;
}) => (
  <ul
    className={cn(
      "grid grid-cols-1 gap-x-12 gap-y-10",
      columns === 2 && "md:grid-cols-2",
      columns === 3 && "md:grid-cols-3",
      columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
      columns === 5 && "md:grid-cols-3 lg:grid-cols-5",
    )}
  >
    {items.map((item, i) => (
      <li
        // biome-ignore lint/suspicious/noArrayIndexKey: fixed lists
        key={i}
      >
        <h3 className="font-medium text-black">{item.title}</h3>
        <div className="mt-2 text-zinc-600 leading-relaxed">{item.body}</div>
      </li>
    ))}
  </ul>
);

// A photo in a thin frame; a grey box until a photo exists
export const Frame = ({
  children,
  className,
  caption,
}: {
  children?: React.ReactNode;
  className?: string;
  caption?: string;
}) => (
  <figure>
    <div className={cn("relative overflow-hidden bg-zinc-100", className)}>
      {children ?? (
        <span className="absolute inset-0 flex items-center justify-center text-sm text-zinc-400">
          Photo to come
        </span>
      )}
    </div>
    {caption && (
      <figcaption className="mt-3 text-sm text-zinc-500">{caption}</figcaption>
    )}
  </figure>
);

// The closing call to action at the end of a page
export const Closing = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="py-24 md:py-40">
    <Container className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
      <h2 className="max-w-3xl text-balance font-display font-medium text-[clamp(36px,5vw,64px)] leading-[1] tracking-[-0.045em] text-black">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </Container>
  </section>
);

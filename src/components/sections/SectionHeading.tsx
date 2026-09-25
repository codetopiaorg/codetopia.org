import { cn } from "@/lib/utils";

interface Props {
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

// Section opener used across pages: large title left, supporting text right.
export const SectionHeading = ({ title, children, className }: Props) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 md:mb-20",
      className,
    )}
  >
    <h2 className="md:col-span-7 text-balance font-display font-medium text-[clamp(40px,5.5vw,80px)] leading-[0.95] tracking-[-0.04em] text-white">
      {title}
    </h2>
    {children && <div className="md:col-span-5 md:pt-3">{children}</div>}
  </div>
);

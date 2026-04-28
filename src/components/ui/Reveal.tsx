"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right" | "none";
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  from = "bottom",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = {
    bottom: "opacity-0 translate-y-8",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
    none: "opacity-0",
  }[from];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-x-0 translate-y-0" : hidden,
        className,
      )}
    >
      {children}
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAMES = [
  "COMMUNITY",
  "STUDIOS",
  "LABS",
  "FOUNDATION",
  "ACADEMY",
  "MARKET",
];

type Phase = "visible" | "exiting" | "entering";

interface Props {
  className?: string;
}

export const TextCycler = ({ className }: Props) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const interval = setInterval(() => {
      // Exit current word up
      setPhase("exiting");

      setTimeout(() => {
        // Jump to next word, snap to position below
        setIndex((i) => (i + 1) % NAMES.length);
        setPhase("entering");

        // Double rAF ensures the DOM commits the snap before animating in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase("visible");
          });
        });
      }, 420);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const style: React.CSSProperties =
    phase === "visible"
      ? {
          transform: "translateY(0)",
          opacity: 1,
          transition:
            "transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
        }
      : phase === "exiting"
        ? {
            transform: "translateY(-32px)",
            opacity: 0,
            transition:
              "transform 0.4s cubic-bezier(0.4,0,1,1), opacity 0.3s ease",
          }
        : { transform: "translateY(32px)", opacity: 0, transition: "none" };

  return (
    <span className={cn("inline-block", className)} style={style}>
      {NAMES[index]}
    </span>
  );
};

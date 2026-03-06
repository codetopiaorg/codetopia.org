import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-white text-black hover:bg-zinc-200 border-white",
            secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border-zinc-800",
            outline: "bg-transparent text-white border-white hover:bg-white hover:text-black",
            ghost: "bg-transparent text-white border-transparent hover:bg-zinc-900",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-13 px-8 text-base",
            xl: "h-16 px-10 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center border font-display font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

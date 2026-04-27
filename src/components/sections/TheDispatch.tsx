"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export const TheDispatch = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="dispatch"
      className="relative bg-[#080808] border-t border-white/[0.07] overflow-hidden"
    >
      <div className="absolute inset-0 glow-top pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-start">
          <Reveal>
            <div className="space-y-6">
              <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
                The Dispatch
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-white">
                Stay
                <br />
                in the
                <br />
                loop.
              </h2>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Initiative launches, milestones, and updates from across the
                Codetopia ecosystem, delivered directly to you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:pt-14">
            {submitted ? (
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center">
                  <Check size={18} className="text-black" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black tracking-tight text-white">
                    You&apos;re in.
                  </h3>
                  <p className="text-sm text-zinc-500">
                    We&apos;ll reach out when there&apos;s something worth
                    saying.
                  </p>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label
                  htmlFor="dispatch-email"
                  className="block font-sans text-xs text-zinc-600 tracking-[0.3em] uppercase mb-4"
                >
                  Your email address
                </label>
                <input
                  id="dispatch-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border border-white/[0.1] px-5 py-4 text-sm text-white placeholder:text-zinc-700 focus:border-white/[0.3] transition-colors outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2.5 h-12 px-8 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                  {!loading && (
                    <ArrowRight
                      size={11}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  )}
                </button>
                {error && (
                  <p className="font-sans text-xs text-red-500">{error}</p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

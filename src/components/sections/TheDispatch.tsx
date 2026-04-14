"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export const TheDispatch = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      className="relative px-6 bg-zinc-950 border-t border-zinc-900 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto py-24 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              The Dispatch
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9] gradient-text">
              Stay in
              <br />
              the loop.
            </h2>
            <p className="max-w-md text-zinc-500 text-base md:text-lg font-sans leading-relaxed">
              Initiative launches, milestones, and updates from across the
              Codetopia ecosystem, delivered directly to you.
            </p>
          </div>

          <div className="relative">
            {/* Accent line */}
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-8">
                <div className="w-12 h-12 bg-white flex items-center justify-center">
                  <Check size={20} className="text-black" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">
                    You&apos;re in.
                  </h3>
                  <p className="text-sm text-zinc-500 font-sans">
                    We&apos;ll reach out when there&apos;s something worth
                    saying.
                  </p>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    No spam. We only send when it matters.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-0">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL ADDRESS"
                    className="flex-1 bg-zinc-900 border border-zinc-800 px-5 py-4 text-[10px] font-bold tracking-[0.2em] text-white focus:border-zinc-600 transition-all outline-none placeholder:text-zinc-700 sm:border-r-0"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-14 px-8 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  >
                    {loading ? "..." : "Subscribe"}
                    {!loading && (
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

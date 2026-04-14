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
      className="py-24 md:py-40 px-6 bg-black border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              The Dispatch
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9] gradient-text">
              Stay in the loop.
            </h2>
            <p className="max-w-md text-zinc-500 text-base md:text-lg font-sans leading-relaxed">
              Initiative launches, milestones, and updates from across the
              Codetopia ecosystem, delivered directly to you.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm p-8 md:p-12 space-y-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  <Check size={18} className="text-black" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black uppercase tracking-tight text-white">
                    You&apos;re in.
                  </h3>
                  <p className="text-xs text-zinc-500 font-sans">
                    We&apos;ll reach out when there&apos;s something worth
                    saying.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white">
                    Subscribe
                  </h3>
                  <p className="text-xs text-zinc-500 font-sans">
                    No spam. We only send when it matters.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="YOUR EMAIL ADDRESS"
                      className="w-full bg-transparent border-b border-zinc-800 pb-4 text-[10px] font-bold tracking-[0.2em] text-white focus:border-zinc-500 transition-all outline-none placeholder:text-zinc-700"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-100 transition-colors flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Subscribing..." : "Subscribe to The Dispatch"}
                    {!loading && (
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    )}
                  </button>
                  {error && (
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                      {error}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

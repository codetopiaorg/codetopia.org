"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

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
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dispatch" className=" py-20 md:py-28 scroll-mt-16">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 items-end">
        <div className="md:col-span-6">
          <p className="text-sm text-zinc-500">The Dispatch</p>
          <h2 className="mt-4 font-display font-medium text-[clamp(28px,3.4vw,44px)] leading-[1.05] tracking-[-0.04em] text-black">
            News from across the ecosystem.
          </h2>
          <p className="mt-4 max-w-md text-zinc-600 leading-relaxed">
            Launches, milestones and updates, sent when there&apos;s something
            worth saying.
          </p>
        </div>

        <div className="md:col-span-6" aria-live="polite">
          {submitted ? (
            <div className="flex items-start gap-3">
              <Check size={18} className="mt-1 text-black shrink-0" />
              <div>
                <h3 className="font-medium text-black">You&apos;re in.</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  We&apos;ll write when there&apos;s news.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="dispatch-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="dispatch-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full sm:flex-1 min-w-0 h-10 border border-zinc-300 bg-white px-3 text-sm text-black placeholder:text-zinc-400 focus:border-black outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-10 items-center justify-center gap-2 bg-black px-4 text-sm font-medium text-white hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                  {!loading && (
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  )}
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-3 text-sm text-red-600">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

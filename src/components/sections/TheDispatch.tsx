"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import talkPhoto from "@/assets/images/photos/techx-ghana-talk.jpg";

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
    <section
      id="dispatch"
      className="bg-[#080808] px-6 md:px-12 py-24 md:py-32 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col">
          <p className="text-sm text-zinc-500 mb-8">The Dispatch</p>
          <h2 className="font-display font-medium text-[clamp(36px,4.5vw,64px)] leading-[0.98] tracking-[-0.04em] text-white">
            News from across the ecosystem.
          </h2>
          <p className="mt-6 max-w-md text-zinc-400 leading-relaxed">
            Initiative launches, milestones and updates, sent when there&apos;s
            something worth saying.
          </p>

          <div className="mt-12 lg:mt-auto lg:pt-12">
            {submitted ? (
              <div className="flex items-start gap-4 pt-6">
                <Check size={18} className="mt-1 text-white shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-white">
                    You&apos;re in.
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    We&apos;ll write when there&apos;s news.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="dispatch-email"
                  className="block text-sm text-zinc-500 mb-3"
                >
                  Email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="dispatch-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full sm:flex-1 min-w-0 h-12 bg-transparent border-b border-white/25 text-base text-white placeholder:text-zinc-700 focus:border-white transition-colors outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center justify-center gap-2 h-12 px-6 bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                    {!loading && (
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    )}
                  </button>
                </div>
                {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <figure className="lg:col-span-7">
          <div className="relative aspect-[3/2] overflow-hidden bg-zinc-900">
            <Image
              src={talkPhoto}
              alt="A Codetopia member speaking at IEEE CS SYP TechX Ghana"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[60%_50%]"
            />
          </div>
          <figcaption className="pt-3 text-xs text-zinc-500">
            Speaking at IEEE CS SYP TechX Ghana
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

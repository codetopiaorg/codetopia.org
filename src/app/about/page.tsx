import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { Footer } from "@/components/sections/Footer";
import { team } from "@/lib/team";
import type { SocialHandle } from "@/lib/team";

export const metadata: Metadata = {
  title: "About | Codetopia",
  description:
    "Codetopia is building the organizations that build the future of technology in Ghana, Africa, and beyond.",
};

const principles = [
  {
    title: "Gaps don't close themselves",
    body: "Codetopia exists because the technology ecosystem has gaps that need deliberate, focused action to close. We identify them. We build around them. That is the only reason any initiative exists.",
  },
  {
    title: "Each gap gets its own initiative",
    body: "A gap in talent demands a different response than a gap in content, access, or innovation. Each initiative is its own entity because each problem is specific enough to deserve full, undivided attention.",
  },
  {
    title: "The network grows as the gaps become clear",
    body: "We do not build initiatives on a schedule. We build when a gap is real and the case for bridging it is clear. The network expands as the ecosystem demands it.",
  },
  {
    title: "We measure whether the gap closed",
    body: "Launching an initiative is not the achievement. Bridging the gap it was built for is. That is the question every initiative has to answer, and the standard Codetopia holds itself to.",
  },
];

const socialIcon = (platform: SocialHandle["platform"]) => {
  const props = { size: 14 };
  if (platform === "twitter") return <FaXTwitter {...props} />;
  if (platform === "linkedin") return <FaLinkedinIn {...props} />;
  if (platform === "github") return <FaGithub {...props} />;
  if (platform === "instagram") return <FaInstagram {...props} />;
  return null;
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-36 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            About Codetopia
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.9] text-white max-w-5xl">
            We build the organizations that build the future.
          </h1>
          <p className="text-zinc-500 font-sans leading-relaxed max-w-xl text-base md:text-lg pt-2">
            Codetopia is the organization behind a growing network of technology
            initiatives. Developing talent, producing content, driving
            innovation, and creating access across Ghana, Africa, and beyond.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
              The talent exists.
              <br />
              The platform doesn't.
            </h2>
          </div>
          <div className="space-y-5 text-zinc-500 font-sans leading-relaxed">
            <p>
              The technology talent gap across Africa isn't a talent problem.
              It's a platform problem. There are engineers here. Designers,
              builders, and thinkers with the ambition and capacity to compete
              with anyone in the world.
            </p>
            <p>
              What's missing is the infrastructure around them: structured
              learning paths, real-world opportunities, communities that push
              them further, content that documents their progress, and
              organizations built to carry them forward.
            </p>
            <p>That gap is what Codetopia exists to close.</p>
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="py-20 md:py-32 px-6 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
              One organization.
              <br />
              Many focused initiatives.
            </h2>
          </div>
          <div className="space-y-5 text-zinc-500 font-sans leading-relaxed">
            <p>
              Codetopia doesn't try to solve everything through a single
              product. Instead, we build focused initiatives, each one
              purpose-built to close a specific gap in the ecosystem.
            </p>
            <p>
              Each initiative is its own entity with its own identity, mission,
              and operating model. They are independent enough to go deep, and
              connected enough to reinforce each other.
            </p>
            <p>
              The organization grows by adding new initiatives as new gaps
              become clear. That's the model.
            </p>
            <a
              href="/initiatives"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white border border-zinc-800 px-5 py-3 hover:border-zinc-600 transition-colors mt-2"
            >
              See all initiatives
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-5 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
              The people
              <br />
              building this.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member) => (
              <div
                key={member.slug}
                className="relative aspect-[3/4] overflow-hidden group bg-zinc-900"
              >
                {/* Photo */}
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Full-card link — sits above photo/gradient, below content */}
                <Link
                  href={`/about/${member.slug}`}
                  className="absolute inset-0 z-0"
                  aria-label={`View ${member.name}'s profile`}
                />

                {/* Content — sits above the full-card link */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3 z-10">
                  <div className="space-y-1">
                    <h3 className="text-white font-black tracking-tight text-lg leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                      {member.role}
                    </p>
                  </div>

                  {/* Social handles — also above the card link */}
                  <div className="flex items-center gap-3 pt-1">
                    {member.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${social.platform}`}
                        className="text-zinc-600 hover:text-white transition-colors"
                      >
                        {socialIcon(social.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-32 px-6 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
              The principles that
              <br />
              govern everything we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-black p-8 md:p-10 space-y-4"
              >
                <h3 className="text-sm font-black uppercase tracking-tight text-white">
                  {principle.title}
                </h3>
                <p className="text-zinc-500 font-sans text-sm leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

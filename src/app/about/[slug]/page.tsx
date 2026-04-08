import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Footer } from "@/components/sections/Footer";
import type { SocialHandle } from "@/lib/team";
import { team } from "@/lib/team";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} | Codetopia`,
    description: member.bio,
  };
}

const socialIcon = (platform: SocialHandle["platform"]) => {
  const props = { size: 16 };
  if (platform === "twitter") return <FaXTwitter {...props} />;
  if (platform === "linkedin") return <FaLinkedinIn {...props} />;
  if (platform === "github") return <FaGithub {...props} />;
  if (platform === "instagram") return <FaInstagram {...props} />;
  return null;
};

export default async function MemberPage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <main className="min-h-screen bg-black">
      {/* Back */}
      <div className="pt-32 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors"
          >
            <ArrowLeft size={12} />
            The Team
          </Link>
        </div>
      </div>

      {/* Hero — photo + identity */}
      <section className="pt-12 pb-24 md:pb-36 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 md:gap-20 items-end">
          {/* Photo */}
          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 w-full max-w-[320px] lg:max-w-none">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Identity */}
          <div className="space-y-8 pb-2">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                {member.role}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                {member.name}
              </h1>
            </div>

            <p className="text-zinc-400 font-sans leading-relaxed text-base md:text-lg max-w-lg">
              {member.bio}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {member.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-600 px-4 py-2.5"
                >
                  {socialIcon(social.platform)}
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full bio */}
      <section className="py-20 md:py-32 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 md:gap-20">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              About
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
              In their own
              <br />
              words.
            </h2>
          </div>
          <div className="space-y-5 text-zinc-400 font-sans leading-relaxed text-base md:text-lg">
            {member.fullBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

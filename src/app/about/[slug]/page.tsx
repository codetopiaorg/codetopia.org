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
import { publishedTeam } from "@/lib/team";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publishedTeam.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = publishedTeam.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} | Codetopia`,
    description: member.bio,
    openGraph: {
      title: `${member.name} | Codetopia`,
      description: member.bio,
      url: `https://codetopia.org/about/${slug}`,
      siteName: "Codetopia",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${member.name} - Codetopia Team`,
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} | Codetopia`,
      description: member.bio,
      images: ["/og.png"],
    },
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
  const member = publishedTeam.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Back */}
      <div className="pt-32 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={12} />
            The Team
          </Link>
        </div>
      </div>

      {/* Hero — photo + identity */}
      <section className="pt-12 pb-24 md:pb-36 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 md:gap-20 items-end">
          {/* Photo */}
          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 w-full max-w-[320px] lg:max-w-none">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center font-display text-8xl font-medium tracking-[-0.04em] text-zinc-300 select-none"
              >
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
            )}
          </div>

          {/* Identity */}
          <div className="space-y-8 pb-2">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">
                {member.role}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black">
                {member.name}
              </h1>
            </div>

            <p className="text-zinc-600 font-sans leading-relaxed text-base md:text-lg max-w-lg">
              {member.bio}
            </p>

            {/* Socials */}
            <div className="flex flex-wrap items-center gap-3">
              {member.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-black transition-colors py-2.5"
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
      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 md:gap-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-black">
              In their own
              <br />
              words.
            </h2>
          </div>
          <div className="space-y-5 text-zinc-600 font-sans leading-relaxed text-base md:text-lg">
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

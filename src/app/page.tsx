import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import academyLogo from "@/assets/images/logos/initiative-logos/codetopia-academy.png";
import communityLogo from "@/assets/images/logos/initiative-logos/codetopia-community.png";
import labsLogo from "@/assets/images/logos/initiative-logos/codetopia-labs.png";
import barcamp from "@/assets/images/photos/barcamp-koforidua-2026.jpg";
import techx from "@/assets/images/photos/techx-ghana-talk.jpg";
import { Footer } from "@/components/sections/Footer";
import { LogoWall } from "@/components/sections/Partners";
import { TheDispatch } from "@/components/sections/TheDispatch";
import {
  Aura,
  ButtonLink,
  Chapter,
  Closing,
  Container,
  Frame,
  RuledGrid,
} from "@/components/site/kit";
import { PostCard } from "@/components/site/PostCard";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: "Codetopia" },
  description:
    "We build organizations that build the future. Codetopia is the parent organization of a growing network of technology initiatives developing talent, producing content, driving innovation and creating social impact across Ghana, Africa and beyond.",
  openGraph: {
    title: "Codetopia",
    description: "We build organizations that build the future.",
    url: "https://codetopia.org",
    siteName: "Codetopia",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Codetopia" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetopia",
    description: "We build organizations that build the future.",
    images: ["/og.png"],
  },
};

// One chapter per active initiative, Linear-style: number, heading, line,
// a big photo, then three points in a ruled row
const chapters = [
  {
    label: "Community",
    logo: communityLogo,
    title: "People in tech, doing real work together.",
    intro:
      "An open community for anyone in tech. Members grow through reviewed work, and any organization that wants to work with them is welcome.",
    link: "https://community.codetopia.org",
    cta: "Join the Community",
    photo: techx,
    points: [
      {
        title: "Real work",
        body: "Members take on real tasks and grow through reviewed work.",
      },
      {
        title: "Not just coders",
        body: "Design, writing, operations, teaching: anything tech.",
      },
      {
        title: "Open to organizations",
        body: "Any organization that wants to work with our members is welcome.",
      },
    ],
  },
  {
    label: "Academy",
    logo: academyLogo,
    title: "Live classes for children and adults.",
    intro:
      "Teaches people to think, build and solve problems with technology, in small online groups with tutors who know every learner by name.",
    link: "https://academy.codetopia.org",
    cta: "Visit the Academy",
    photo: barcamp,
    points: [
      {
        title: "Small groups",
        body: "About five learners in a group, so no one gets lost.",
      },
      {
        title: "Every weekend",
        body: "Live online classes on Saturdays and Sundays.",
      },
      {
        title: "All ages",
        body: "Groups for children by age, and classes for adults.",
      },
    ],
  },
  {
    label: "Labs",
    logo: labsLogo,
    title: "Engineering for real problems.",
    intro:
      "The technical division that takes on real-world engineering challenges, builds products and delivers solutions for organizations.",
    link: "https://labs.codetopia.org",
    cta: "Visit Labs",
    photo: undefined,
    points: [
      {
        title: "Products",
        body: "Tools built and run by Codetopia, used across the network.",
      },
      {
        title: "Challenges",
        body: "Real-world engineering problems, taken on end to end.",
      },
      {
        title: "For organizations",
        body: "Solutions delivered for the organizations we work with.",
      },
    ],
  },
];

export default function Home() {
  const posts = getPosts();
  const latest = posts[0];

  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Opening */}
      <section className="relative pt-40 md:pt-52">
        <Aura />
        <Container className="relative">
          {latest && (
            <Link
              href={`/blog/${latest.slug}`}
              className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors animate-fade-up"
            >
              <span className="text-black">Latest</span>
              <span aria-hidden>·</span>
              {latest.title}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          )}
          <h1 className="mt-6 max-w-5xl text-balance font-display font-medium text-[clamp(48px,7.4vw,104px)] leading-[0.98] tracking-[-0.05em] text-black animate-fade-up">
            We build organizations that build the future.
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between animate-fade-up delay-100">
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-zinc-600">
              Codetopia is a network of initiatives developing talent, producing
              content and creating impact across Ghana, Africa and beyond.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/initiatives">
                Explore the initiatives
              </ButtonLink>
              <ButtonLink href="/partners" variant="secondary">
                Partner with us
              </ButtonLink>
            </div>
          </div>

          {/* the big picture, where Linear shows its product */}
          <div className="mt-16 md:mt-20 animate-fade-up delay-200">
            <Frame className="aspect-[16/10] md:aspect-[2/1]">
              <Image
                src={barcamp}
                alt="Codetopia Academy with students at BarCamp Koforidua 2026"
                fill
                priority
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover"
              />
            </Frame>
          </div>
        </Container>
      </section>

      <LogoWall />

      {/* Where to start */}
      <section>
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                who: "Learners and builders",
                title: "Join the Community",
                href: "https://community.codetopia.org",
              },
              {
                who: "Parents and adults",
                title: "Learn at the Academy",
                href: "https://academy.codetopia.org",
              },
              {
                who: "Organizations and schools",
                title: "Partner with us",
                href: "/partners",
              },
            ].map((path) => (
              <li key={path.title} className=" md:first:*:pl-0">
                <Link
                  href={path.href}
                  {...(path.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col gap-10 py-10 md:px-8"
                >
                  <span className="text-sm text-zinc-500">{path.who}</span>
                  <span className="flex items-center justify-between gap-6 font-display text-2xl md:text-3xl font-medium tracking-[-0.03em] text-black">
                    {path.title}
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.5}
                      className="shrink-0 text-zinc-400 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {chapters.map((chapter) => (
        <Chapter
          key={chapter.label}
          label={chapter.label}
          logo={chapter.logo}
          title={chapter.title}
          intro={
            <>
              <p>{chapter.intro}</p>
              <div className="mt-6">
                <ButtonLink href={chapter.link} variant="plain">
                  {chapter.cta}
                </ButtonLink>
              </div>
            </>
          }
        >
          <Frame className="aspect-[16/9]">
            {chapter.photo && (
              <Image
                src={chapter.photo}
                alt=""
                fill
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover"
              />
            )}
          </Frame>
          <div className="mt-12">
            <RuledGrid items={chapter.points} />
          </div>
        </Chapter>
      ))}

      {/* Latest: dated like Linear's changelog */}
      {posts.length > 0 && (
        <Chapter
          label="Latest"
          title="What's been happening."
          intro={
            <ButtonLink href="/blog" variant="plain">
              All posts
            </ButtonLink>
          }
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </Chapter>
      )}

      <Closing title="Build the future with us.">
        <ButtonLink href="/partners">Partner with us</ButtonLink>
        <ButtonLink href="https://community.codetopia.org" variant="secondary">
          Join the Community
        </ButtonLink>
      </Closing>

      <TheDispatch />
      <Footer />
    </main>
  );
}

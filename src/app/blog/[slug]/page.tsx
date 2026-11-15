import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { TheDispatch } from "@/components/sections/TheDispatch";
import { Aura, ButtonLink, Container } from "@/components/site/kit";
import { PostCard, PostMetaLine } from "@/components/site/PostCard";
import { getPost, getPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Codetopia`,
      description: post.summary,
      url: `https://codetopia.org/blog/${post.slug}`,
      siteName: "Codetopia",
      images: [{ url: post.cover ?? "/og.png", alt: post.title }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const url = `https://codetopia.org/blog/${post.slug}`;
  const share = [
    {
      label: "X",
      href: `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`,
    },
  ];

  return (
    <main id="main" className="min-h-screen bg-white">
      <article className="relative pt-40 md:pt-52">
        <Aura />
        <Container className="relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} /> Blog
          </Link>

          <div className="mt-10 max-w-4xl">
            <PostMetaLine post={post} />
            <h1 className="mt-6 text-balance font-display font-medium text-[clamp(40px,5.8vw,80px)] leading-[1] tracking-[-0.045em] text-black">
              {post.title}
            </h1>
            {post.summary && (
              <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600">
                {post.summary}
              </p>
            )}
          </div>

          {post.cover && (
            // biome-ignore lint/performance/noImgElement: plain image from public/, any size
            <img
              src={post.cover}
              alt=""
              className="mt-16 md:mt-20 w-full aspect-[16/9] object-cover bg-zinc-100"
            />
          )}

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-10">
            {/* who wrote it and where to share it, beside the text on wide screens */}
            <aside className="md:col-span-3 flex flex-col gap-8 text-sm">
              <div>
                <p className="text-zinc-500">Written by</p>
                <p className="mt-1 text-black">{post.author}</p>
              </div>
              <div>
                <p className="text-zinc-500">Share</p>
                <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {share.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-zinc-500 transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div
              className="post md:col-span-9 max-w-[720px]"
              // posts are our own Markdown files in the repo, not user input
              // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted repo content
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </Container>
      </article>

      {more.length > 0 && (
        <section className="pt-32 md:pt-44 pb-24 md:pb-32">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display font-medium text-[clamp(28px,3.4vw,44px)] leading-[1.05] tracking-[-0.04em] text-black">
                More from the blog
              </h2>
              <ButtonLink href="/blog" variant="plain">
                All posts
              </ButtonLink>
            </div>
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {more.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <TheDispatch />
      <Footer />
    </main>
  );
}

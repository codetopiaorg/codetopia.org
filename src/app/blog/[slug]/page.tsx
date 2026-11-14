import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { formatDate, getPost, getPosts } from "@/lib/blog";

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

  return (
    <main id="main" className="min-h-screen bg-[#080808]">
      <article className="px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} /> Blog
          </Link>
          <h1 className="mt-10 max-w-6xl text-balance font-display font-medium text-[clamp(40px,6vw,96px)] leading-[0.95] tracking-[-0.045em] text-white">
            {post.title}
          </h1>

          {post.cover && (
            // biome-ignore lint/performance/noImgElement: plain image from public/, any size
            <img
              src={post.cover}
              alt=""
              className="mt-12 md:mt-16 w-full aspect-[16/9] object-cover bg-zinc-900"
            />
          )}

          {/* same grid as the other pages: details on the left, the post on the right */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 pt-8">
            <p className="md:col-span-3 text-lg leading-relaxed text-zinc-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <br />
              {post.author}
            </p>
            <div
              className="post md:col-span-9 max-w-4xl"
              // posts are our own Markdown files in the repo, not user input
              // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted repo content
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

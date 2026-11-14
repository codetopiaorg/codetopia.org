import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { formatDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "News and writing from Codetopia and its initiatives.",
  openGraph: {
    title: "Blog | Codetopia",
    description: "News and writing from Codetopia and its initiatives.",
    url: "https://codetopia.org/blog",
    siteName: "Codetopia",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Codetopia" }],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main id="main" className="min-h-screen bg-[#080808]">
      <PageHero
        label="Blog"
        title="Notes from the work."
        intro={<p>News and writing from Codetopia and its initiatives.</p>}
      />

      <section className="bg-[#080808] px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <p className="pt-8 text-lg text-zinc-500">No posts yet.</p>
          ) : (
            <ol>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8 md:py-10 items-baseline"
                  >
                    <time
                      dateTime={post.date}
                      className="md:col-span-3 text-zinc-500"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="md:col-span-9">
                      <span className="block font-display text-2xl md:text-4xl font-medium tracking-[-0.03em] leading-tight text-white group-hover:text-zinc-300 transition-colors">
                        {post.title}
                      </span>
                      {post.summary && (
                        <span className="mt-3 block max-w-2xl text-zinc-500 leading-relaxed">
                          {post.summary}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

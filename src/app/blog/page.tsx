import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { TheDispatch } from "@/components/sections/TheDispatch";
import { Container, PageIntro } from "@/components/site/kit";
import { FeaturedPost, PostCard } from "@/components/site/PostCard";
import { getPosts } from "@/lib/blog";

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
  const [featured, ...rest] = getPosts();
  return (
    <main id="main" className="min-h-screen bg-white">
      <PageIntro
        eyebrow="Blog"
        title="Notes from the work."
        intro={<p>News and writing from Codetopia and its initiatives.</p>}
      />

      <section className="pt-12 md:pt-20 pb-24 md:pb-40">
        <Container>
          {!featured ? (
            <p className="text-lg text-zinc-500">
              No posts yet. The first one is on its way.
            </p>
          ) : (
            <>
              <FeaturedPost post={featured} />
              {rest.length > 0 && (
                <ul className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                  {rest.map((post) => (
                    <li key={post.slug}>
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </Container>
      </section>

      <TheDispatch />
      <Footer />
    </main>
  );
}

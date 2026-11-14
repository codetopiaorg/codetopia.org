import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Blog posts are Markdown files in content/blog. The file name is the URL:
// content/blog/hello-world.md -> /blog/hello-world
// Front matter: title, date (YYYY-MM-DD), summary, author, cover (an image path,
// shown at the top of the post), and draft: true to keep a post off the live
// site while it is being written. Images go in public/blog/<slug>/.
// In the text, ![what it shows](/blog/<slug>/photo.jpg "Caption") gives an image
// with a caption under it.

// An image with a title becomes a figure with a caption
marked.use({
  renderer: {
    image({ href, title, text }) {
      const img = `<img src="${href}" alt="${text}" loading="lazy" />`;
      return title
        ? `<figure>${img}<figcaption>${title}</figcaption></figure>`
        : img;
    },
  },
});

const dir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  cover?: string;
}

export interface Post extends PostMeta {
  html: string;
}

const showDrafts = process.env.NODE_ENV !== "production";

function read(slug: string) {
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.draft && !showDrafts) return null;
  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    // gray-matter turns a bare YYYY-MM-DD into a Date
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    author: String(data.author ?? "Codetopia"),
    cover: data.cover ? String(data.cover) : undefined,
  };
  return { meta, content };
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => read(f.replace(/\.md$/, ""))?.meta)
    .filter((p): p is PostMeta => !!p)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  const post = read(slug);
  if (!post) return null;
  return { ...post.meta, html: marked.parse(post.content, { async: false }) };
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";

// When a post is from and how long it takes, on one quiet line
export const PostMetaLine = ({ post }: { post: PostMeta }) => (
  <p className="text-sm text-zinc-500">
    <time dateTime={post.date}>{formatDate(post.date)}</time>
    <span aria-hidden> · </span>
    {post.minutes} min read
  </p>
);

const Cover = ({ post, className }: { post: PostMeta; className: string }) => (
  <span className={`block overflow-hidden bg-zinc-100 ${className}`}>
    {post.cover && (
      // biome-ignore lint/performance/noImgElement: plain image from public/, any size
      <img
        src={post.cover}
        alt=""
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    )}
  </span>
);

// The newest post, given the room: photo beside the words
export const FeaturedPost = ({ post }: { post: PostMeta }) => (
  <Link
    href={`/blog/${post.slug}`}
    className="group grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-center"
  >
    <Cover post={post} className="md:col-span-7 aspect-[16/10]" />
    <span className="md:col-span-5 flex flex-col gap-5">
      <PostMetaLine post={post} />
      <span className="font-display text-[clamp(28px,3.2vw,44px)] font-medium leading-[1.05] tracking-[-0.035em] text-black text-balance">
        {post.title}
      </span>
      {post.summary && (
        <span className="text-lg leading-relaxed text-zinc-600">
          {post.summary}
        </span>
      )}
      <span className="text-sm text-black">{post.author}</span>
    </span>
  </Link>
);

// Every other post: photo, date, title, the first lines of the summary
export const PostCard = ({ post }: { post: PostMeta }) => (
  <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
    <Cover post={post} className="aspect-[16/10]" />
    <PostMetaLine post={post} />
    <span className="font-display text-xl md:text-2xl font-medium leading-tight tracking-[-0.025em] text-black text-balance group-hover:underline underline-offset-4 decoration-1">
      {post.title}
    </span>
    {post.summary && (
      <span className="line-clamp-2 text-zinc-600 leading-relaxed">
        {post.summary}
      </span>
    )}
  </Link>
);

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-6">
        404
      </p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-6">
        Page not found.
      </h1>
      <p className="text-zinc-500 font-sans leading-relaxed max-w-sm mb-10">
        This page doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black bg-white px-6 py-4 hover:bg-zinc-200 transition-colors group"
      >
        Back to home
        <ArrowRight
          size={12}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </Link>
    </main>
  );
}

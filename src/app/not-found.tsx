import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#080808] flex flex-col px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 glow-top pointer-events-none" />

      {/* Large background number */}
      <span
        aria-hidden="true"
        className="absolute right-[-2%] bottom-0 text-[28vw] font-black tracking-tighter text-white/[0.025] select-none pointer-events-none leading-none"
      >
        404
      </span>

      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full py-32">
        <div className="space-y-8 max-w-xl">
          <p className="font-sans text-xs text-zinc-700 tracking-[0.4em] uppercase">
            Error 404
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-[88px] font-black tracking-tighter leading-[0.88] text-white">
            Page not
            <br />
            found.
          </h1>
          <p className="text-zinc-500 leading-relaxed max-w-xs text-sm">
            This page doesn&apos;t exist or has been moved. Head back and try
            again.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-black bg-white px-7 py-4 hover:bg-zinc-100 transition-colors group"
          >
            <ArrowLeft
              size={11}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

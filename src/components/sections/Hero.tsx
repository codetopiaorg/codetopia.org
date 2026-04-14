import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center gap-10 animate-fade-up">
        <Image
          src={logo}
          alt="Codetopia"
          width={1000}
          height={300}
          className="w-full max-w-[320px] sm:max-w-lg md:max-w-2xl h-auto object-contain brightness-0 invert"
          priority
        />

        <div className="space-y-5 max-w-2xl">
          {/* Pure white headline — no gradient fade */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.9] text-white">
            The Technology
            <br />
            Ecosystem.
          </h1>
          <p className="text-zinc-500 text-base md:text-lg font-sans leading-relaxed max-w-lg mx-auto">
            The organization behind a growing network of initiatives. Developing
            talent, producing content, driving innovation, and creating social
            impact.
          </p>
        </div>

        {/* Single strong CTA */}
        <a
          href="#initiatives"
          className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-100 transition-colors"
        >
          Explore Initiatives
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent animate-pulse-subtle" />
      </div>
    </section>
  );
};

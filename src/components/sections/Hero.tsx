import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6">
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center gap-14">
        <div className="animate-fade-up flex flex-col items-center gap-6">
          <Image
            src={logo}
            alt="Codetopia"
            width={1000}
            height={300}
            className="w-full max-w-[260px] sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto object-contain brightness-0 invert"
            priority
          />
        </div>

        <div className="space-y-6 max-w-2xl animate-fade-up delay-200">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.9] gradient-text">
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

        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#initiatives"
            className="px-7 py-3.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-100 transition-colors"
          >
            Explore Initiatives
          </a>
          <a
            href="/about"
            className="px-7 py-3.5 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] hover:border-zinc-600 hover:text-white transition-colors"
          >
            About Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-700 to-transparent animate-pulse-subtle" />
      </div>
    </section>
  );
};

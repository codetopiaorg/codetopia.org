import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-20 px-6">
      {/* Background Brand Abstract */}
      <div className="absolute -bottom-48 -left-48 w-[70vw] h-[70vw] opacity-[0.02] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full text-center space-y-16 md:space-y-24">
        <div className="flex justify-center animate-in fade-in zoom-in-95 duration-1000">
          <Image
            src={logo}
            alt="Codetopia"
            width={900}
            height={280}
            className="w-auto h-24 sm:h-36 md:h-60 lg:h-80 object-contain brightness-0 invert transition-all duration-700 hover:scale-[1.03] cursor-default"
            priority
          />
        </div>

        <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-black capitalize tracking-tighter leading-[0.9] text-white transition-all">
            Engineering the Future
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-base md:text-xl font-sans font-normal leading-relaxed tracking-tight opacity-80">
            Building high-performance software, advancing innovation, and
            developing the ecosystem shaping tomorrow’s digital infrastructure.
            <span className="block mt-4 md:mt-6 text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-500">
              Software • Innovation • Impact
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 overflow-hidden">
      {/* Radial glow behind the logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={logo}
            alt="Codetopia"
            width={1000}
            height={300}
            className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-auto object-contain brightness-0 invert"
            priority
          />
        </div>

        <div className="space-y-5 max-w-2xl">
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
      </div>
    </section>
  );
};

import Image from "next/image";
import logo from "@/assets/images/logos/codetopia-logo-black.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-10 animate-fade-up">
        <Image
          src={logo}
          alt="Codetopia"
          width={1000}
          height={300}
          className="w-full max-w-[320px] sm:max-w-lg md:max-w-2xl h-auto object-contain"
          priority
        />

        <div className="space-y-5 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-display font-black tracking-tighter leading-[0.9] text-black">
            The Technology
            <br />
            Ecosystem.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-sans leading-relaxed max-w-lg mx-auto">
            The organization behind a growing network of initiatives. Developing
            talent, producing content, driving innovation, and creating social
            impact.
          </p>
        </div>
      </div>
    </section>
  );
};

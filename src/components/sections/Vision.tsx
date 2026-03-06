import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const Vision = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative">
      {/* Background Brand Abstract */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] opacity-[0.015] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-10 md:space-y-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <div className="w-8 h-px bg-zinc-800" />
            Our Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.9]">
            Building the{" "}
            <span className="text-zinc-600 block sm:inline">
              Technology Infrastructure
            </span>{" "}
            of Tomorrow.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase text-white">
                The Ecosystem Model
              </h3>
              <p className="text-zinc-500 font-sans leading-relaxed">
                Codetopia is a high-performance technology ecosystem where
                divisions collaborate to prototype advanced solutions and
                deliver measurable impact on a global scale.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase text-white">
                Measurable Impact
              </h3>
              <p className="text-zinc-500 font-sans leading-relaxed">
                Innovation without measurable outcomes is incomplete. Codetopia
                combines advanced training, research, and prototyping to deliver
                high-performance solutions that shape the global technology
                landscape.
              </p>
            </div>
          </div>

          <div className="pt-12 flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-1">
              <div className="text-3xl font-black uppercase">100%</div>
              <div className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">
                Focused on Technologists
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black uppercase">3</div>
              <div className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">
                Active Divisions
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black uppercase">∞</div>
              <div className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest">
                Growth Potential
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

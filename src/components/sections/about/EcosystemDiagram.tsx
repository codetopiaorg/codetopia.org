import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const EcosystemDiagram = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Background Brand Abstract */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[60vw] h-[60vw] opacity-[0.02] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-20 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            The <span className="text-zinc-800">Ecosystem.</span>
          </h2>
          <div className="max-w-2xl mx-auto text-zinc-500 text-lg font-sans leading-relaxed">
            <p>
              A connected network where growth in one area strengthens the
              entire ecosystem, and new initiatives integrate seamlessly,
              reinforcing collective strength.
            </p>
          </div>
        </div>

        <div className="relative pt-20">
          {/* Standardized Core Architecture Hub */}
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto mb-24 lg:mb-32">
            <div className="absolute inset-0 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-500 transition-all group z-20 flex flex-col items-center justify-center p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                Core <br />
                Architecture
              </h3>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider block mb-6 font-bold italic">
                Codetopia.org
              </span>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed uppercase tracking-widest">
                Coordinates initiatives and ideas across the system, ensuring
                alignment while supporting independent innovation.
              </p>
            </div>

            {/* Orbiting rings - maintained for brand identity */}
            <div className="absolute inset-[-15%] border border-zinc-900 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-30%] border border-zinc-900 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          <div className="mt-24 lg:mt-40">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 mb-12 text-center">
              Current Divisions (examples)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Flow Indicator (Desktop) - Labels removed to prevent limiting future divisions */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent -translate-y-1/2 -z-10" />

              {/* Division: Community */}
              <div className="p-8 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-500 transition-all group">
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  Community <br />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider block mt-2 font-bold italic">
                    Mentorship & Leadership
                  </span>
                </h4>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                  A hub for learning and building where technical pioneers
                  converge.
                </p>
              </div>

              {/* Division: Labs */}
              <div className="p-8 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-500 transition-all group">
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  Labs <br />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider block mt-2 font-bold italic">
                    R&D & Prototyping
                  </span>
                </h4>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                  Focused on advanced software, hardware, and emerging
                  frameworks.
                </p>
              </div>

              {/* Division: Studio */}
              <div className="p-8 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-500 transition-all group">
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                  Studio <br />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-wider block mt-2 font-bold italic">
                    Production & Knowledge
                  </span>
                </h4>
                <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                  High-fidelity tutorials, podcasts, and digital content that
                  inform and inspire.
                </p>
              </div>
            </div>

            <p className="mt-16 text-center text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-800">
              Future initiatives will integrate naturally without disrupting the
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

export const MissionSection = () => {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1 bg-zinc-900 border border-zinc-900">
          <div className="bg-black p-12 md:p-20 space-y-10 group hover:bg-zinc-950 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                01 / VISION
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                The{" "}
                <span className="text-zinc-800 group-hover:text-white transition-colors duration-500">
                  Universal Core
                </span>{" "}
                <br /> of Engineering.
              </h2>
            </div>
            <p className="text-zinc-500 text-lg font-sans leading-relaxed">
              Our vision is for Codetopia to serve as the definitive Mother
              Company for the next generation of technical pioneers, providing
              the overarching structure that enables global-scale impact.
            </p>
          </div>

          <div className="bg-black p-12 md:p-20 space-y-10 group hover:bg-zinc-950 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                02 / MISSION
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Structural <br />{" "}
                <span className="text-zinc-800 group-hover:text-white transition-colors duration-500">
                  Orchestration
                </span>{" "}
                <br /> through Autonomy.
              </h2>
            </div>
            <p className="text-zinc-500 text-lg font-sans leading-relaxed">
              We empower our divisions to operate with deep autonomy while
              maintaining the architectural integrity of the Umbrella. We
              provide the governance that transforms raw capability into
              industrial authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

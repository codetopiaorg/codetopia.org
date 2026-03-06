"use client";

export const Governance = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Governance & <br />{" "}
              <span className="text-zinc-800">Philosophy</span>
            </h2>
            <div className="h-2 w-24 bg-zinc-900" />
            <p className="text-zinc-500 text-lg font-sans leading-relaxed italic">
              "Leadership is the stewardship of technical and human energy."
            </p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-4">
                <span className="w-2 h-2 bg-zinc-900" />
                Mother Company Oversight
              </h3>
              <p className="text-zinc-400 font-sans leading-relaxed">
                As the parent organization, Codetopia oversees the strategic
                direction of all divisions. We ensure that every entity under
                the Umbrella adheres to our core engineering philosophy while
                providing the capital and operational support they need to
                scale.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-4">
                <span className="w-2 h-2 bg-zinc-900" />
                Umbrella Orchestration
              </h3>
              <p className="text-zinc-400 font-sans leading-relaxed">
                Our governance model is built on "Autonomous Integrity."
                Divisions (Community, Labs, Studio, Media) are granted deep
                operational independence, but their technical baseline is set
                and audited by the Mother Company core teams.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-4">
                <span className="w-2 h-2 bg-zinc-900" />
                Resource Stewardship
              </h3>
              <p className="text-zinc-400 font-sans leading-relaxed">
                Codetopia manages the shared technical and human capital of the
                ecosystem. By pooling resources at the Mother Company level, we
                create a powerhouse of innovation that no single division could
                achieve on its own.
              </p>
            </div>

            <div className="space-y-6 border border-zinc-900 p-8 hover:bg-zinc-950 transition-colors group">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400">
                Core Integrity Unit
              </h3>
              <p className="text-zinc-600 font-sans leading-relaxed group-hover:text-zinc-500 transition-colors">
                The governing body within the Mother Company responsible for
                stress-testing every divisional release against Codetopia's
                absolute standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

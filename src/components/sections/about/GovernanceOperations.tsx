export const GovernanceOperations = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Operations & <br />{" "}
                <span className="text-zinc-800">Governance.</span>
              </h2>
              <p className="text-zinc-500 text-lg font-sans leading-relaxed">
                How we maintain alignment across everything we do while
                upholding the absolute quality required for global impact.
              </p>
            </div>

            <div className="p-8 border border-zinc-900 bg-zinc-950/30">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4 italic">
                The Protocol
              </p>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed uppercase tracking-widest leading-loose">
                Freedom to innovate. <br />
                Responsibility to excel.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div className="p-12 md:p-16 bg-zinc-950 border border-zinc-900 group hover:border-zinc-700 transition-all duration-500 space-y-8">
              <p className="text-xl md:text-2xl font-sans text-white leading-relaxed">
                Codetopia operates on “Autonomous Integrity”: initiatives work
                independently while aligning with high-performance standards
                through guidance, audits, and continuous oversight.
              </p>
            </div>

            <div className="space-y-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600">
                    Operational Flow
                  </h4>
                  <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                    Smooth strategic coordination and optimized shared
                    resources.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600">
                    Shared Alignment
                  </h4>
                  <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                    Growth in one initiative strengthens the entire ecosystem.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600">
                    Ongoing Oversight
                  </h4>
                  <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                    Processes and architecture are regularly reviewed to
                    maintain collective excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

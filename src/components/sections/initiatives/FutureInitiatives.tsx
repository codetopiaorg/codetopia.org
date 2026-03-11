"use client";

export const FutureInitiatives = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-black border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-zinc-800" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                                Roadmap
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                            Roadmap & <br /> <span className="text-zinc-800">Future Expansion.</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <p className="text-zinc-500 text-lg font-sans leading-relaxed">
                            Codetopia.org is designed to scale through new initiatives:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
                            <div className="p-10 md:p-12 bg-black space-y-6 group hover:bg-zinc-950 transition-colors">
                                <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">Initiative Creation</h4>
                                <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                                    Supporting the launch of new divisions in alignment with ecosystem standards.
                                </p>
                            </div>
                            <div className="p-10 md:p-12 bg-black space-y-6 group hover:bg-zinc-950 transition-colors">
                                <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">Organizational Growth</h4>
                                <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                                    Expanding the ecosystem without restructuring existing operations.
                                </p>
                            </div>
                            <div className="p-10 md:p-12 bg-black space-y-6 group hover:bg-zinc-950 transition-colors">
                                <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-zinc-400 transition-colors">Strategic Oversight</h4>
                                <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                                    Maintaining alignment, knowledge flow, and operational excellence across all initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

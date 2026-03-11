"use client";

export const InitiativesHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-black border-b border-zinc-900">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 space-y-12">

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white text-center">
                    Initiatives <br /> & Alignment.
                </h1>

                <div className="max-w-3xl mx-auto space-y-8 pt-4 text-center">
                    <p className="text-xl md:text-3xl font-black uppercase tracking-tight text-zinc-400 leading-tight">
                        Codetopia.org serves as the coordinating core for all independent initiatives within the ecosystem.
                    </p>
                    <p className="text-zinc-600 text-sm md:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
                        As the mother organization, it provides governance, infrastructure, and organizational standards, enabling specialized divisions to operate autonomously while remaining aligned with the long-term vision of Codetopia.
                    </p>
                </div>
            </div>
        </section>
    );
};

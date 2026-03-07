"use client";

export const SystemArchitecture = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-zinc-950 relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              The <br /> <span className="text-zinc-800">Core.</span>
            </h2>
            <div className="space-y-4 max-w-lg">
              <p className="text-zinc-500 text-lg font-sans leading-relaxed">
                Codetopia.org acts as the coordinating core of the ecosystem, maintaining shared infrastructure, governance, and strategic direction across all initiatives.
              </p>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto w-full">
            {/* Visual Mapping SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              role="img"
              aria-label="Ecosystem Architecture Mapping"
            >
              <title>Ecosystem Architecture Mapping</title>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Central Core */}
              <rect
                x="35"
                y="35"
                width="30"
                height="30"
                className="fill-black stroke-zinc-800"
                strokeWidth="0.5"
              />
              <text
                x="50"
                y="52"
                textAnchor="middle"
                className="fill-white text-[4px] font-black uppercase tracking-widest font-mono"
              >
                Core
              </text>

              {/* Connecting Lines */}
              <path
                d="M 50 35 L 50 15 L 20 15 L 20 25"
                fill="none"
                className="stroke-zinc-800"
                strokeWidth="0.3"
              />
              <path
                d="M 50 65 L 50 85 L 80 85 L 80 75"
                fill="none"
                className="stroke-zinc-800"
                strokeWidth="0.3"
              />
              <path
                d="M 65 50 L 85 50 L 85 40"
                fill="none"
                className="stroke-zinc-800"
                strokeWidth="0.3"
              />

              {/* Extension Nodes */}
              <rect
                x="15"
                y="25"
                width="10"
                height="10"
                className="fill-zinc-950 stroke-zinc-800"
                strokeWidth="0.3"
              />
              <rect
                x="75"
                y="65"
                width="10"
                height="10"
                className="fill-zinc-950 stroke-zinc-800"
                strokeWidth="0.3"
              />
              <rect
                x="80"
                y="30"
                width="10"
                height="10"
                className="fill-zinc-950 stroke-zinc-800"
                strokeWidth="0.3"
              />
            </svg>

            {/* Pulsing Core Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-900 blur-xl animate-pulse opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

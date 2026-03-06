import { Clapperboard, Cpu, Users } from "lucide-react";
import communityLogo from "@/assets/images/logos/community-logo.png";
import studioLogo from "@/assets/images/logos/studio-logo.png";
import { cn } from "@/lib/utils";

const entities = [
  {
    name: "Codetopia Community",
    description:
      "A mentorship-driven hub where technologists collaborate on real-world projects, advance from ideas to execution, and grow into leaders shaping the future of global technology.",
    logo: communityLogo,
    icon: Users,
    status: "Active",
    link: "https://community.codetopia.dev",
    active: true,
  },
  {
    name: "Codetopia Studio",
    description:
      "The content and production division creating high-quality tutorials, podcasts, and digital media that educate, inspire, and document the evolution of the global technology ecosystem.",
    logo: studioLogo,
    icon: Clapperboard,
    status: "Coming Soon",
    active: false,
  },
  {
    name: "Codetopia Labs",
    description:
      "The research and development division exploring advanced technologies, prototyping experimental systems, and engineering the next generation of software, hardware, and technical solutions.",
    icon: Cpu,
    status: "Coming Soon",
    active: false,
  },
];

export const EntitySpotlight = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              The Ecosystem
            </h2>
            <p className="text-zinc-500 max-w-xl text-base md:text-lg font-sans">
              Codetopia is an integrated technology ecosystem. Each division
              drives innovation, develops talent, and delivers high-performance
              solutions shaping the global tech landscape.
            </p>
          </div>
          <div className="h-px flex-1 bg-zinc-900 hidden md:block mb-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {entities.map((entity) => (
            <div
              key={entity.name}
              className={cn(
                "group relative p-6 md:p-8 border transition-all duration-500 flex flex-col justify-between h-full",
                entity.active
                  ? "bg-white border-white text-black sm:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-700 sm:hover:scale-[1.01]",
              )}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center border",
                      entity.active
                        ? "border-black bg-black"
                        : "border-zinc-800 bg-zinc-950 group-hover:border-zinc-700",
                    )}
                  >
                    {entity.icon && (
                      <entity.icon
                        size={24}
                        strokeWidth={1.5}
                        className={cn(
                          entity.active
                            ? "text-white"
                            : "text-zinc-600 group-hover:text-zinc-400",
                        )}
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3
                    className={cn(
                      "text-xl font-black uppercase tracking-tight",
                      entity.active ? "text-black" : "text-zinc-300",
                    )}
                  >
                    {entity.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm font-sans leading-relaxed",
                      entity.active ? "text-zinc-700" : "text-zinc-500",
                    )}
                  >
                    {entity.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6">
                <span
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest",
                    entity.active ? "text-black" : "text-zinc-600",
                  )}
                >
                  {entity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const _ArrowRight = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    role="img"
    aria-labelledby="arrow-right-title"
  >
    <title id="arrow-right-title">Arrow Right</title>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

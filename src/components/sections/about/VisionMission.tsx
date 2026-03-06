import Image from "next/image";
import logo from "@/assets/images/logos/Codetopia-Logo-TW.png";

export const VisionMission = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Brand Abstract */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] opacity-[0.02] pointer-events-none select-none">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          <div className="bg-black p-12 md:p-20 space-y-10 group hover:bg-zinc-950 transition-colors duration-500">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                01 / VISION
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Empower <br />{" "}
                <span className="text-zinc-800 group-hover:text-white transition-colors duration-500">
                  Innovation.
                </span>
              </h2>
            </div>
            <p className="text-zinc-500 text-lg md:text-xl font-sans leading-relaxed">
              Foster innovation and mastery at scale, empowering the next
              generation of builders to define the future of technology.
            </p>
          </div>

          <div className="bg-black p-12 md:p-20 space-y-10 group hover:bg-zinc-950 transition-colors duration-500">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                02 / MISSION
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Measure <br />{" "}
                <span className="text-zinc-800 group-hover:text-white transition-colors duration-500">
                  Results.
                </span>
              </h2>
            </div>
            <p className="text-zinc-500 text-lg md:text-xl font-sans leading-relaxed">
              Turn potential into measurable outcomes by promoting a
              high-performance culture and providing the structure to deliver
              global-scale impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

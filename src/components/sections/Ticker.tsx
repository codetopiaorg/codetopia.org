import Image from "next/image";
import academy from "@/assets/images/logos/initiative-logos/codetopia-academy.png";
import community from "@/assets/images/logos/initiative-logos/codetopia-community.png";
import foundation from "@/assets/images/logos/initiative-logos/codetopia-foundation.png";
import labs from "@/assets/images/logos/initiative-logos/codetopia-labs.png";
import market from "@/assets/images/logos/initiative-logos/codetopia-market.png";
import studios from "@/assets/images/logos/initiative-logos/codetopia-studios.png";

const logos = [academy, community, foundation, labs, market, studios];

export const Ticker = () => (
  <div className="bg-[#080808] py-10 px-6 md:px-12">
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
      {logos.map((src, i) => (
        <Image key={i} src={src} alt="" height={28} className="h-7 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300" />
      ))}
    </div>
  </div>
);

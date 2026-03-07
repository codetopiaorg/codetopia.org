import type { Metadata } from "next";
import { CurrentInitiatives } from "@/components/sections/ecosystem/CurrentInitiatives";
import { EcosystemEvolution } from "@/components/sections/ecosystem/EcosystemEvolution";
import { EcosystemHero } from "@/components/sections/ecosystem/EcosystemHero";
import { SystemArchitecture } from "@/components/sections/ecosystem/SystemArchitecture";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Ecosystem | Codetopia.org",
  description:
    "Explore the Codetopia ecosystem: a connected network of independent initiatives driven by shared standards and high-performance engineering.",
};

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-black">
      <EcosystemHero />
      <SystemArchitecture />
      <CurrentInitiatives />
      <EcosystemEvolution />
      <Footer />
    </main>
  );
}

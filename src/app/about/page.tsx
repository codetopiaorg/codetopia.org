import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { CoreValues } from "@/components/sections/about/CoreValues";
import { EcosystemDiagram } from "@/components/sections/shared/EcosystemDiagram";
import { GovernanceOperations } from "@/components/sections/about/GovernanceOperations";
import { VisionMission } from "@/components/sections/about/VisionMission";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About | Codetopia.org",
  description:
    "Codetopia is the parent company and architectural core of a global technology ecosystem.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <AboutHero />
      <VisionMission />
      <EcosystemDiagram />
      <CoreValues />
      <GovernanceOperations />
      <Footer />
    </main>
  );
}

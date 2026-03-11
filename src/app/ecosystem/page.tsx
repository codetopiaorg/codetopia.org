import type { Metadata } from "next";
import { EcosystemHero } from "@/components/sections/ecosystem/EcosystemHero";
import { EcosystemDiagram } from "@/components/sections/shared/EcosystemDiagram";
import { InitiativeGrid } from "@/components/sections/initiatives/InitiativeGrid";
import { StrategicConnection } from "@/components/sections/initiatives/StrategicConnection";
import { FutureInitiatives } from "@/components/sections/initiatives/FutureInitiatives";
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
      <EcosystemDiagram />
      <InitiativeGrid />
      <StrategicConnection />
      <FutureInitiatives />
      <Footer />
    </main>
  );
}

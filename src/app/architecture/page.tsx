import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { ArchitectureHero } from "@/components/sections/architecture/ArchitectureHero";
import { NetworkModel } from "@/components/sections/architecture/NetworkModel";
import { InitiativeCollaboration } from "@/components/sections/architecture/InitiativeCollaboration";
import { OrganizationalEngine } from "@/components/sections/architecture/OrganizationalEngine";
import { ScalabilityModel } from "@/components/sections/architecture/ScalabilityModel";

export const metadata: Metadata = {
    title: "Strategy & Architecture | Codetopia.org",
    description:
        "Codetopia's organizational architecture and strategic vision for ecosystem growth.",
};

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-black">
            <ArchitectureHero />
            <NetworkModel />
            <InitiativeCollaboration />
            <OrganizationalEngine />
            <ScalabilityModel />
            <Footer />
        </main>
    );
}

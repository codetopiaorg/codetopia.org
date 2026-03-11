import type { Metadata } from "next";
import { InitiativesHero } from "@/components/sections/initiatives/InitiativesHero";
import { InitiativeGrid } from "@/components/sections/initiatives/InitiativeGrid";
import { StrategicConnection } from "@/components/sections/initiatives/StrategicConnection";
import { FutureInitiatives } from "@/components/sections/initiatives/FutureInitiatives";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
    title: "Initiatives | Codetopia.org",
    description:
        "Explore the independent divisions under the Codetopia ecosystem: specialized initiatives in technology, education, and innovation.",
};

export default function InitiativesPage() {
    return (
        <main className="min-h-screen bg-black">
            <InitiativesHero />
            <InitiativeGrid />
            <StrategicConnection />
            <FutureInitiatives />
            <Footer />
        </main>
    );
}

import { Hero } from "@/components/sections/Hero";
import { EntitySpotlight } from "@/components/sections/EntitySpotlight";
import { Vision } from "@/components/sections/Vision";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black transition-colors duration-500">
      <Hero />
      <EntitySpotlight />
      <Vision />
      <Footer />
    </main>
  );
}

import { EntitySpotlight } from "@/components/sections/EntitySpotlight";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { TheDispatch } from "@/components/sections/TheDispatch";
import { Vision } from "@/components/sections/Vision";

export default function Home() {
  return (
    <main className="min-h-screen bg-black transition-colors duration-500">
      <Hero />
      <EntitySpotlight />
      <Vision />
      <TheDispatch />
      <Footer />
    </main>
  );
}

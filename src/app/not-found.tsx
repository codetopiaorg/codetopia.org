import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/sections/PageHero";

export default function NotFound() {
  return (
    <main className="bg-[#080808]">
      <PageHero
        label="Error 404"
        title="Page not found."
        intro={<p>This page doesn&apos;t exist or has been moved.</p>}
        link={{ href: "/", label: "Return home" }}
      />
      <Footer />
    </main>
  );
}

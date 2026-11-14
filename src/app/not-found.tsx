import { Footer } from "@/components/sections/Footer";
import { ButtonLink, PageIntro } from "@/components/site/kit";

export default function NotFound() {
  return (
    <main id="main" className="bg-white">
      <PageIntro
        eyebrow="Error 404"
        title="Page not found."
        intro={<p>This page doesn&apos;t exist or has been moved.</p>}
      >
        <ButtonLink href="/">Return home</ButtonLink>
      </PageIntro>
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Statement } from "@/components/statement";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { PrivacySection } from "@/components/privacy-section";
import { FooterCTA } from "@/components/footer-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <HowItWorks />
        <Features />
        <Stats />
        <PrivacySection />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}

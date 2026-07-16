import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PrestationHero } from "@/components/PrestationHero";
import { BeautyUnivers } from "@/components/BeautyUnivers";
import { SoinsVisage } from "@/components/SoinsVisage";
import { MicroneedlingExpert } from "@/components/MicroneedlingExpert";
import { BeauteDuRegard } from "@/components/BeauteDuRegard";
import { MassagesBienEtre } from "@/components/MassagesBienEtre";
import { EpilationFormations } from "@/components/EpilationFormations";
import { StatementBanner } from "@/components/StatementBanner";
import { PrestationTestimonialsCTA } from "@/components/PrestationTestimonialsCTA";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Découvrez tous les soins et prestations proposés par Cynthia Cosmétique à Douala : soins du visage, microneedling, microblading, extensions de cils, beauté du regard.",
  openGraph: {
    title: "Prestations · Cynthia Cosmétique",
    description:
      "Soins du visage, microneedling, microblading, extensions de cils — Découvrez toute notre gamme de prestations à Douala.",
    url: "https://cynthiacosmetique.com/prestation",
  },
};

export default function PrestationPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <PrestationHero />
        <BeautyUnivers />
        <SoinsVisage />
        <MicroneedlingExpert />
        <BeauteDuRegard />
        <MassagesBienEtre />
        <EpilationFormations />
        <StatementBanner />
        <PrestationTestimonialsCTA />
      </main>
      <Footer />
    </>
  );
}

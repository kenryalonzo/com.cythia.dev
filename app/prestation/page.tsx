import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { PrestationHero } from "@/components/PrestationHero";

const BeautyUnivers = dynamic(() =>
  import("@/components/BeautyUnivers").then((m) => m.BeautyUnivers),
);
const SoinsVisage = dynamic(() =>
  import("@/components/SoinsVisage").then((m) => m.SoinsVisage),
);
const MicroneedlingExpert = dynamic(() =>
  import("@/components/MicroneedlingExpert").then((m) => m.MicroneedlingExpert),
);
const BeauteDuRegard = dynamic(() =>
  import("@/components/BeauteDuRegard").then((m) => m.BeauteDuRegard),
);
const MassagesBienEtre = dynamic(() =>
  import("@/components/MassagesBienEtre").then((m) => m.MassagesBienEtre),
);
const EpilationFormations = dynamic(() =>
  import("@/components/EpilationFormations").then((m) => m.EpilationFormations),
);
const StatementBanner = dynamic(() =>
  import("@/components/StatementBanner").then((m) => m.StatementBanner),
);
const PrestationTestimonialsCTA = dynamic(() =>
  import("@/components/PrestationTestimonialsCTA").then(
    (m) => m.PrestationTestimonialsCTA,
  ),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => m.Footer),
);

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
  alternates: {
    canonical: "https://cynthiacosmetique.com/prestation",
  },
  keywords: [
    "prestations beauté Douala",
    "soins visage Douala",
    "microneedling Douala",
    "microblading Douala",
    "extensions de cils Douala",
    "beauté du regard",
    "massage bien-être Douala",
    "épilation Douala",
    "formation beauté Douala",
    "Cynthia Cosmétique",
  ],
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

import type { Metadata } from "next";
import { AboutHero } from "@/components/AboutHero";
import { CtaBanner } from "@/components/CtaBanner";
import { Engagement } from "@/components/Engagement";
import { Expertise } from "@/components/Expertise";
import { Fondatrice } from "@/components/Fondatrice";
import { Footer } from "@/components/Footer";
import { ImpactChiffres } from "@/components/ImpactChiffres";
import { InstitutGallery } from "@/components/InstitutGallery";
import { MissionVision } from "@/components/MissionVision";
import { Navbar } from "@/components/Navbar";
import { OurStory } from "@/components/OurStory";
import { PhilosophieBanner } from "@/components/PhilosophieBanner";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Cynthia Cosmétique à Douala : notre histoire, notre fondatrice, nos valeurs et notre expertise en soins du visage, microneedling et beauté du regard. Un institut de beauté haut de gamme dédié à révéler votre éclat naturel.",
  openGraph: {
    title: "À propos · Cynthia Cosmétique",
    description:
      "Découvrez l'histoire, la mission et l'expertise de Cynthia Cosmétique — institut de beauté premium à Douala spécialisé en soins du visage, microneedling et beauté du regard.",
    url: "https://cynthiacosmetique.com/a-propos",
    siteName: "Cynthia Cosmétique",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cynthia Cosmétique — Institut de beauté haut de gamme à Douala, Cameroun",
      },
    ],
  },
  alternates: {
    canonical: "https://cynthiacosmetique.com/a-propos",
  },
  keywords: [
    "Cynthia Cosmétique",
    "institut beauté Douala",
    "soin visage Douala",
    "histoire Cynthia Cosmétique",
    "fondatrice Cynthia",
    "institut beauté Cameroun",
    "soins peau Douala",
    "microneedling Douala",
    "beauté du regard Douala",
    "expertise beauté",
  ],
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://cynthiacosmetique.com/a-propos",
  name: "À propos de Cynthia Cosmétique",
  description:
    "Découvrez l'histoire, la mission et l'expertise de Cynthia Cosmétique — institut de beauté premium à Douala spécialisé en soins du visage, microneedling et beauté du regard.",
  url: "https://cynthiacosmetique.com/a-propos",
  mainEntity: {
    "@type": "BeautySalon",
    name: "Cynthia Cosmétique",
    description:
      "Soins experts du visage, microneedling, beauté du regard et accompagnement personnalisé à Douala.",
    founder: { "@type": "Person", name: "Cynthia" },
    areaServed: "Douala, Cameroun",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Makepe Cour Suprême (Domino Market)",
      addressLocality: "Douala",
      addressRegion: "Littoral",
      addressCountry: "CM",
    },
    image: "/assets/logo-cynthia.png",
    priceRange: "$$",
  },
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <OurStory />
        <Fondatrice />
        <Expertise />
        <ImpactChiffres />
        <Engagement />
        <InstitutGallery />
        <MissionVision />
        <PhilosophieBanner />
        <CtaBanner />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
    </>
  );
}

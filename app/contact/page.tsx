import type { Metadata } from "next";
import { BookingBanner } from "@/components/BookingBanner";
import { ContactSection } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { MapLocationSection } from "@/components/MapLocationSection";
import { Navbar } from "@/components/Navbar";
import { WhyContactSection } from "@/components/WhyContactSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Découvrez l'univers de Cynthia Cosmétique à Douala. Venez à la rencontre de notre fondatrice et de notre équipe pour partager notre histoire, nos valeurs et notre expertise haut de gamme (soins du visage, microneedling, beauté du regard).",
  openGraph: {
    title: "Contact · Cynthia Cosmétique",
    description:
      "Découvrez l'univers de Cynthia Cosmétique à Douala. Venez à la rencontre de notre fondatrice et de notre équipe pour partager notre histoire, nos valeurs et notre expertise haut de gamme (soins du visage, microneedling, beauté du regard).",
    url: "https://cynthiacosmetique.com/contact",
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
    canonical: "https://cynthiacosmetique.com/contact",
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
  "@type": "ContactPage",
  "@id": "https://cynthiacosmetique.com/contact",
  name: "Contacter de Cynthia Cosmétique",
  description:
    "Découvrez l'histoire, la mission et l'expertise de Cynthia Cosmétique — institut de beauté premium à Douala spécialisé en soins du visage, microneedling et beauté du regard.",
  url: "https://cynthiacosmetique.com/contact",
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

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        {/* Section 1 — Hero heading */}
        <Reveal
          as="section"
          variant="scroll"
          className="bg-ivory py-16 md:py-24"
        >
          <div className="container-luxe text-center">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-px w-6 bg-gold-deep/60" aria-hidden />
              Contact
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-royal sm:text-5xl lg:text-6xl">
              Prenez rendez-vous
              <br />
              <span className="text-gradient-gold">dès aujourd'hui</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-slate-ink">
              Une question, un devis personnalisé ou simplement envie d'échanger
              ? Répondons ensemble à vos besoins beauté.
            </p>
          </div>
        </Reveal>

        {/* Section 2 — Formulaire + Coordonnées */}
        <ContactSection />

        {/* Section 3 — Bannière réservation */}
        <BookingBanner />

        {/* Section 4 — Pourquoi nous contacter */}
        <WhyContactSection />

        {/* Section 5 — Carte + Localisation */}
        <MapLocationSection />
      </main>
      <Footer />
    </>
  );
}

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
		"Découvrez tous les soins et prestations proposés par Cynthia Cosmétique à Douala : soins du visage, microneedling, microblading, extensions de cils, beauté du regard, massages bien-être, épilation et formations professionnelles.",
	openGraph: {
		title: "Prestations · Cynthia Cosmétique",
		description:
			"Soins du visage, microneedling, microblading, extensions de cils — Découvrez toute notre gamme de prestations à Douala.",
		url: "https://cynthiacosmetique.com/prestation",
		siteName: "Cynthia Cosmétique",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Cynthia Cosmétique — Prestations de beauté haut de gamme à Douala",
			},
		],
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
		"institut beauté Douala Cameroun",
		"soins peau Douala",
	],
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": "https://cynthiacosmetique.com/prestation",
	name: "Prestations Cynthia Cosmétique",
	description:
		"Soins du visage, microneedling, microblading, extensions de cils, massages bien-être, épilation et formations — toute notre gamme de prestations à Douala.",
	url: "https://cynthiacosmetique.com/prestation",
	mainEntity: {
		"@type": "ItemList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Soins du Visage",
				description:
					"Clean Face Detox, Glow Therapy, Skin Drink et Soin Renaissance — des protocoles sur-mesure pour révéler l'éclat de votre peau.",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Microneedling Expert",
				description:
					"Traitement avancé pour stimuler la régénération cutanée, réduire les cicatrices et améliorer la texture de la peau.",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Beauté du Regard",
				description:
					"Microblading, microshading, brow lift, extensions de cils et rehaussement de cils à Douala.",
			},
			{
				"@type": "ListItem",
				position: 4,
				name: "Massages Bien-Être",
				description:
					"Massage relaxant, modelage drainant et soin découverte pour votre bien-être à Douala.",
			},
			{
				"@type": "ListItem",
				position: 5,
				name: "Épilation",
				description:
					"Épilation à la cire ou au fil, précise et confortable pour une peau lisse et douce.",
			},
			{
				"@type": "ListItem",
				position: 6,
				name: "Formations Professionnelles",
				description:
					"Formez-vous aux métiers de la beauté avec Cynthia Cosmétique — soins du visage, beauté du regard et plus.",
			},
		],
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
			<script
				type="application/ld+json"
				/* biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD */
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</>
	);
}

import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { UnderConstruction } from "@/components/UnderConstruction";

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
				<UnderConstruction
					title="Nos Prestations"
					subtitle="La liste complète de nos soins et tarifs est en cours de préparation. En attendant, découvrez nos soins phares sur la page d'accueil ou contactez-nous directement."
				/>
			</main>
			<Footer />
		</>
	);
}

import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
	title: "À propos",
	description:
		"Découvrez Cynthia Cosmétique — notre histoire, notre expertise et notre passion pour la beauté naturelle à Douala. Soins experts du visage, microneedling, beauté du regard.",
	openGraph: {
		title: "À propos · Cynthia Cosmétique",
		description:
			"Notre histoire, notre expertise et notre passion pour la beauté naturelle — Découvrez Cynthia Cosmétique à Douala.",
		url: "https://cynthiacosmetique.com/a-propos",
	},
};

export default function AProposPage() {
	return (
		<>
			<Navbar />
			<main className="flex flex-1 flex-col">
				<UnderConstruction
					title="À propos"
					subtitle="Découvrez bientôt notre histoire, notre expertise et ce qui fait de Cynthia Cosmétique un institut d'exception à Douala."
				/>
			</main>
			<Footer />
		</>
	);
}

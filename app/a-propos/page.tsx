import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutHero } from "@/components/AboutHero";
import { OurStory } from "@/components/OurStory";
import { Expertise } from "@/components/Expertise";

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
				<AboutHero />
				<OurStory />
				<Expertise />
				{/* Autres sections à venir : Engagement */}
			</main>
			<Footer />
		</>
	);
}

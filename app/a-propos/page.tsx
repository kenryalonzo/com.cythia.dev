import type { Metadata } from "next";
import { AboutHero } from "@/components/AboutHero";
import { CtaBanner } from "@/components/CtaBanner";
import { Engagement } from "@/components/Engagement";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { ImpactChiffres } from "@/components/ImpactChiffres";
import { InstitutGallery } from "@/components/InstitutGallery";
import { MissionVision } from "@/components/MissionVision";
import { Navbar } from "@/components/Navbar";
import { OurStory } from "@/components/OurStory";

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
				<ImpactChiffres />
				<Engagement />
				<InstitutGallery />
				<MissionVision />
				<CtaBanner />
			</main>
			<Footer />
		</>
	);
}

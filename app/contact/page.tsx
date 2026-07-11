import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Prenez rendez-vous ou contactez Cynthia Cosmétique à Douala. Soins du visage, microneedling, beauté du regard — Institut de beauté haut de gamme.",
	openGraph: {
		title: "Contact · Cynthia Cosmétique",
		description:
			"Contactez Cynthia Cosmétique à Douala — Prenez rendez-vous pour vos soins du visage, microneedling ou beauté du regard.",
		url: "https://cynthiacosmetique.com/contact",
	},
};

export default function ContactPage() {
	return (
		<>
			<Navbar />
			<main className="flex flex-1 flex-col">
				<UnderConstruction
					title="Contact"
					subtitle="Notre formulaire de contact et nos coordonnées complètes arrivent bientôt. En attendant, vous pouvez nous joindre directement via WhatsApp."
				/>
			</main>
			<Footer />
		</>
	);
}

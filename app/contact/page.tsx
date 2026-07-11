import type { Metadata } from "next";
import { BookingBanner } from "@/components/BookingBanner";
import { ContactSection } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/ui/Reveal";

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
						<p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-slate-ink/80">
							Une question, un devis personnalisé ou simplement envie
							d'échanger ? Répondons ensemble à vos besoins beauté.
						</p>
					</div>
				</Reveal>

				{/* Section 2 — Bannière de réservation rapide */}
				<BookingBanner />

				{/* Section 3 — Formulaire + Coordonnées */}
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}

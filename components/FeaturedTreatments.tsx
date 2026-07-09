"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { waLink } from "@/lib/site";

type Treatment = {
	name: string;
	description: string;
	price: string;
	image: string;
	alt: string;
};

/*
 * "Nos soins phares" — 4 cartes.
 * Hypothèse : photos de soins non fournies, on réutilise les assets people
 * en noir & blanc doux via un filtre warm pour préserver l'unité visuelle.
 */
const treatments: Treatment[] = [
	{
		name: "Microneedling",
		description:
			"Améliore la texture de la peau, réduit les cicatrices et stimule le collagène.",
		price: "35 000 FCFA",
		image: "/assets/images/person1.jpg",
		alt: "Résultat de microneedling sur le visage",
	},
	{
		name: "Notre Signature",
		description:
			"Nettoie, hydrate et revitalise votre peau en profondeur pour un éclat immédiat.",
		price: "5 000 FCFA",
		image: "/assets/images/person02.jpg",
		alt: "Soin du visage signature Cynthia",
	},
	{
		name: "Microblading",
		description:
			"Des sourcils parfaitement dessinés et naturels qui subliment votre regard.",
		price: "15 000 FCFA",
		image: "/assets/images/person3.jpg",
		alt: "Résultat de microblading des sourcils",
	},
	{
		name: "Extensions de cils",
		description:
			"Un regard intense et glamour grâce à des extensions légères et durables.",
		price: "7 000 FCFA",
		image: "/assets/images/person1.jpg",
		alt: "Résultat d'extensions de cils",
	},
];

export function FeaturedTreatments() {
	return (
		<section id="soins-phares" className="relative bg-ivory py-24 md:py-32">
			<div className="container-luxe">
				<SectionHeading
					eyebrow="Nos soins phares"
					title="Des soins experts pour des"
					highlight="résultats visibles."
					align="center"
					className="mb-14"
				/>

				{/* Grid 4 colonnes */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{treatments.map((t, i) => (
						<Reveal key={t.name} delay={i * 0.08} className="h-full">
							<motion.article
								whileHover={{ y: -6 }}
								transition={{ type: "spring", stiffness: 300, damping: 24 }}
								className="group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-3xl bg-cream shadow-soft ring-1 ring-slate-line/40 transition-shadow duration-500 hover:shadow-card"
							>
								{/* Image */}
								<div className="relative aspect-[4/5] w-full overflow-hidden">
									<Image
										src={t.image}
										alt={t.alt}
										fill
										sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
									/>
									{/* Voile léger crème en bas pour lisibilité — pas de sombre */}
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0"
										style={{
											background:
												"linear-gradient(to top, rgba(247,243,234,0.55) 0%, rgba(247,243,234,0) 38%)",
										}}
									/>
								</div>

								{/* Contenu */}
								<div className="flex flex-1 flex-col gap-2 p-5 pt-3">
									<h3 className="font-display text-xl font-semibold text-royal">
										{t.name}
									</h3>
									<p className="text-sm leading-relaxed text-slate-ink/75">
										{t.description}
									</p>

									<div className="mt-auto flex items-center justify-between pt-4">
										<span className="font-display text-sm font-semibold text-gold-deep">
											Dès {t.price}
										</span>
										<span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal-soft text-royal transition-all duration-300 group-hover:bg-gold group-hover:text-royal">
											<ArrowUpRight size={16} strokeWidth={2.25} />
										</span>
									</div>
								</div>
							</motion.article>
						</Reveal>
					))}
				</div>

				{/* CTA centré */}
				<Reveal className="mt-14 flex justify-center" delay={0.1}>
					<Button href={waLink()} external variant="royal" size="lg">
						Découvrir tous nos soins
					</Button>
				</Reveal>
			</div>
		</section>
	);
}

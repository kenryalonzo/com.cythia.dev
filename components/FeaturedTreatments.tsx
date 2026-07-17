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

const treatments: (Treatment & { waMsg: string })[] = [
	{
		name: "Microneedling",
		description:
			"Améliore la texture de la peau, réduit les cicatrices et stimule le collagène.",
		price: "35 000 FCFA",
		image: "/assets/images/microneeding.jpg",
		alt: "Résultat de microneedling sur le visage",
		waMsg: "Bonjour Cynthia, je suis intéressé(e) par le microneedling.",
	},
	{
		name: "Notre Signoche",
		description:
			"Nettoie, hydrate et revitalise votre peau en profondeur pour un éclat immédiat.",
		price: "5 000 FCFA",
		image: "/assets/images/massage.webp",
		alt: "Soin du visage signature Cynthia",
		waMsg: "Bonjour Cynthia, je souhaite en savoir plus sur le soin Signoche.",
	},
	{
		name: "Microblading",
		description:
			"Des sourcils parfaitement dessinés et naturels qui subliment votre regard.",
		price: "15 000 FCFA",
		image: "/assets/images/microshading.webp",
		alt: "Résultat de microblading des sourcils",
		waMsg: "Bonjour Cynthia, je suis intéressé(e) par le microblading.",
	},
	{
		name: "Extensions de cils",
		description:
			"Un regard intense et glamour grâce à des extensions légères et durables.",
		price: "7 000 FCFA",
		image: "/assets/images/extension_des_cils.avif",
		alt: "Résultat d'extensions de cils",
		waMsg: "Bonjour Cynthia, je souhaite des informations sur les extensions de cils.",
	},
];

export function FeaturedTreatments() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			id="soins-phares"
			className="relative bg-ivory py-10 md:py-14 section-below-fold"
		>
			<div className="container-luxe">
				<SectionHeading
					eyebrow="Nos soins phares"
					title="Des soins experts pour des"
					highlight="résultats visibles."
					align="center"
					className="mb-8"
				/>

				{/* Grid 4 colonnes — cartes compactes */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{treatments.map((t, i) => (
						<Reveal key={t.name} delay={i * 0.08} className="h-full">
							<a
								href={waLink(t.waMsg)}
								target="_blank"
								rel="noopener noreferrer"
								className="group block h-full"
							>
								<motion.div
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 300, damping: 24 }}
									className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-cream shadow-soft ring-1 ring-slate-line/30 transition-shadow duration-500 hover:shadow-card"
								>
								{/* Image — format plus large */}
								<div className="relative aspect-[16/10] w-full overflow-hidden">
									<Image
										src={t.image}
										alt={t.alt}
										fill
										sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
									/>
									{/* Voile dégradé en bas pour lisibilité du texte */}
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0"
										style={{
											background:
												"linear-gradient(to top, rgba(247,243,234,0.7) 0%, rgba(247,243,234,0) 50%)",
										}}
									/>
								</div>

								{/* Contenu compact */}
								<div className="flex flex-1 flex-col gap-1.5 p-4 pt-2">
									<h3 className="font-display text-base font-semibold text-royal">
										{t.name}
									</h3>
									<p className="text-xs leading-relaxed text-slate-ink/65">
										{t.description}
									</p>

									<div className="mt-auto flex items-center justify-between pt-2">
										<span className="font-display text-xs font-semibold text-gold-deep">
											Dès {t.price}
										</span>
										<span className="flex h-7 w-7 items-center justify-center rounded-full bg-royal-soft text-royal transition-all duration-300 group-hover:bg-gold group-hover:text-royal">
											<ArrowUpRight size={14} strokeWidth={2.25} />
										</span>
									</div>
								</div>
							</motion.div>
							</a>
						</Reveal>
					))}
				</div>

				{/* CTA centré */}
				<Reveal className="mt-8 flex justify-center" delay={0.1}>
					<Button
						href={waLink()}
						external
						variant="gold"
						size="lg"
						className="animate-pulse-glow px-10 py-5 text-sm font-bold shadow-gold hover:shadow-lift"
					>
						Découvrir tous nos soins
					</Button>
				</Reveal>
			</div>
		</Reveal>
	);
}

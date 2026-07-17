"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Filaments } from "@/components/ui/Filaments";
import { skinConcernIcons } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { waLink } from "@/lib/site";

type Concern = {
	iconKey: keyof typeof skinConcernIcons;
	title: string;
	description: string;
};

const concerns: Concern[] = [
	{
		iconKey: "acne",
		title: "Acné & imperfections",
		description:
			"Réduisez les boutons, les imperfections et retrouvez une peau nette et saine.",
	},
	{
		iconKey: "spots",
		title: "Taches & hyperpigmentation",
		description:
			"Atténuez les taches brunes et retrouvez un teint uniforme et lumineux.",
	},
	{
		iconKey: "dull",
		title: "Peau terne & fatiguée",
		description:
			"Redonnez éclat, douceur et fraîcheur à votre peau jour après jour.",
	},
	{
		iconKey: "scars",
		title: "Cicatrices & pores dilatés",
		description:
			"Améliorez la texture de votre peau et resserrez vos pores en profondeur.",
	},
];

export function SkinConcerns() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			id="soins-visage"
			className="section-below-fold relative overflow-hidden bg-ivory py-12 md:py-20"
		>
			{/* Background image avec mouvement lent */}
			<div className="absolute inset-0 overflow-hidden" aria-hidden="true">
				<Image
					src="/assets/images/background-segond-section.webp"
					alt=""
					fill
					sizes="100vw"
					loading="eager"
					className="animate-slow-pan object-cover opacity-40"
				/>
				<div className="absolute inset-0 bg-ivory/40" />
			</div>

			<Filaments intensity="soft" />

			<div className="container-luxe relative">
				<SectionHeading
					eyebrow="Votre peau vous parle"
					title="Chaque peau a son histoire,"
					highlight="chaque problème a sa solution."
					description="Quel que soit votre souci, nous avons un soin adapté pour révéler votre éclat naturel et restaurer votre confiance."
					align="left"
					className="mb-12"
				/>

				{/* Grid — 4 colonnes avec mini description */}
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{concerns.map((c, i) => {
						const Icon = skinConcernIcons[c.iconKey];
						return (
							<Reveal key={c.title} delay={i * 0.06}>
								<motion.a
									href={waLink(
										`Bonjour Cynthia, je m'intéresse au soin : ${c.title}.`,
									)}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ y: -8, scale: 1.02 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
									className="group relative flex h-full flex-col rounded-2xl bg-white/80 p-6 shadow-soft ring-1 ring-slate-line/20 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-card hover:ring-gold/30"
								>
									<span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold-deep ring-1 ring-gold/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-royal">
										<Icon className="h-6 w-6" />
									</span>
									<h3 className="mt-5 font-display text-base font-bold leading-snug text-royal">
										{c.title}
									</h3>
									<p className="mt-2 text-[13px] leading-relaxed text-slate-ink/70">
										{c.description}
									</p>
									<div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold-deep opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
										<span>En savoir plus</span>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											className="h-3 w-3"
											aria-hidden="true"
										>
											<path d="M5 12h14M12 5l7 7-7 7" />
										</svg>
									</div>
								</motion.a>
							</Reveal>
						);
					})}
				</div>
			</div>
		</Reveal>
	);
}

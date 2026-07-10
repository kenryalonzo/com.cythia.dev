"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Filaments } from "@/components/ui/Filaments";
import { skinConcernIcons } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
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
			className="relative overflow-hidden bg-ivory py-12 md:py-16 section-below-fold"
		>
			{/* Background image avec mouvement lent */}
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="/assets/images/background-segond-section.png"
					alt=""
					fill
					sizes="100vw"
					loading="eager"
					className="object-cover animate-slow-pan"
					aria-hidden
				/>
				<div className="absolute inset-0 bg-ivory/65" />
				{/* Animation brillante — reflet qui traverse */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					<div className="animate-shine absolute inset-0 -ml-full w-[50%] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
				</div>
			</div>

			{/* Filaments dorés — plus visibles, sur toute la section */}
			<Filaments intensity="soft" />

			<div className="container-luxe relative">
				{/* En-tête compact */}
				<Reveal direction="none">
					<div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
						<div>
							<span className="eyebrow inline-flex items-center gap-2">
								<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
								Votre peau vous parle
							</span>
							<h2 className="mt-3 font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl md:text-4xl">
								Chaque peau a son histoire,{" "}
								<span className="text-gradient-gold">
									chaque problème a sa solution.
								</span>
							</h2>
						</div>
						<p className="max-w-sm text-base font-medium leading-relaxed text-slate-ink/80 md:text-right">
							Quel que soit votre souci, nous avons un soin adapté.
						</p>
					</div>
				</Reveal>

				{/* Ligne dorée séparatrice */}
				<Reveal direction="none">
					<div className="hairline mb-8 h-px" />
				</Reveal>

				{/* Grid — 4 colonnes avec mini description */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
									className="group relative flex h-full flex-col rounded-xl bg-ivory/80 p-5 ring-1 ring-slate-line/25 backdrop-blur-sm transition-shadow duration-500 hover:bg-ivory hover:shadow-card hover:ring-gold/30"
								>
									<span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-gold-soft to-gold-soft/40 text-gold-deep ring-1 ring-gold/15 transition-all duration-300 group-hover:scale-110 group-hover:ring-gold/40">
										<Icon className="h-5 w-5" />
									</span>
									<span className="mt-4 font-display text-sm font-semibold leading-snug text-royal sm:text-base">
										{c.title}
									</span>
									<p className="mt-2 text-xs leading-relaxed text-slate-ink/60">
										{c.description}
									</p>
									<span className="mt-auto inline-flex h-8 w-8 items-center justify-center self-end rounded-full bg-gold-soft text-gold-deep opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-gold group-hover:text-royal group-hover:opacity-100">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-3.5 w-3.5"
											aria-hidden="true"
										>
											<path d="M5 12h14M12 5l7 7-7 7" />
										</svg>
									</span>
								</motion.a>
							</Reveal>
						);
					})}
				</div>
			</div>
		</Reveal>
	);
}

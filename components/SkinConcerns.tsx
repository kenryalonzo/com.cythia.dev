"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { skinConcernIcons } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

type Concern = {
	iconKey: keyof typeof skinConcernIcons;
	title: string;
	description: string;
};

/*
 * "Chaque peau a son histoire, chaque problème a sa solution."
 * Fond clair crème, en-tête aligné à gauche, 4 cards.
 */
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
		<section
			id="soins-visage"
			className="relative overflow-hidden bg-cream py-24 md:py-32"
		>
			{/* Filet doré fluide décoratif à gauche */}
			<svg
				role="presentation"
				aria-hidden="true"
				className="pointer-events-none absolute -left-16 top-1/4 hidden h-[60%] w-[34%] text-gold/30 lg:block"
				viewBox="0 0 200 400"
				fill="none"
			>
				<path
					d="M40 20C120 80 60 160 120 220S160 360 60 390"
					stroke="currentColor"
					strokeWidth="1.2"
					strokeLinecap="round"
				/>
				<path
					d="M70 10C150 70 90 170 150 230S180 350 90 388"
					stroke="currentColor"
					strokeWidth="0.8"
					strokeLinecap="round"
					opacity="0.5"
				/>
			</svg>

			<div className="container-luxe relative">
				{/* En-tête — aligné à gauche */}
				<div className="mb-14 max-w-2xl">
					<Reveal direction="none">
						<span className="eyebrow inline-flex items-center gap-2">
							<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
							Votre peau vous parle
						</span>
					</Reveal>
					<Reveal delay={0.06}>
						<h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-royal sm:text-4xl md:text-[2.75rem]">
							Chaque peau a son histoire,{" "}
							<span className="text-gradient-gold">
								chaque problème a sa solution.
							</span>
						</h2>
					</Reveal>
				</div>

				{/* Grid 4 colonnes — 1 mobile, 2 tablette */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{concerns.map((c, i) => {
						const Icon = skinConcernIcons[c.iconKey];
						return (
							<Reveal key={c.title} delay={i * 0.08} className="h-full">
								<motion.a
									href={waLink(
										`Bonjour Cynthia, je m'intéresse au soin : ${c.title}.`,
									)}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ y: -6 }}
									transition={{ type: "spring", stiffness: 300, damping: 24 }}
									className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ivory p-7 shadow-soft ring-1 ring-slate-line/40 transition-shadow duration-500 hover:shadow-card"
								>
									{/* Icône ligne dorée dans un cercle */}
									<span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-gold-deep ring-1 ring-gold/30">
										<Icon className="h-7 w-7" />
									</span>

									<h3 className="mt-6 font-display text-xl font-semibold text-royal">
										{c.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-slate-ink/75">
										{c.description}
									</p>

									{/* Flèche circulaire dorée — bas droite, apparaît + bg fill au hover */}
									<span className="absolute bottom-6 right-6 inline-flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-royal-soft text-royal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-gold group-hover:text-royal group-hover:opacity-100">
										<ArrowUpRight size={18} strokeWidth={2.25} />
									</span>
								</motion.a>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}

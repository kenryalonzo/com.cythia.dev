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
};

const concerns: Concern[] = [
	{
		iconKey: "acne",
		title: "Acné & imperfections",
	},
	{
		iconKey: "spots",
		title: "Taches & hyperpigmentation",
	},
	{
		iconKey: "dull",
		title: "Peau terne & fatiguée",
	},
	{
		iconKey: "scars",
		title: "Cicatrices & pores dilatés",
	},
];

export function SkinConcerns() {
	return (
		<section
			id="soins-visage"
			className="relative overflow-hidden bg-ivory py-12 md:py-16"
		>
			{/* Background image avec overlay clair */}
			<div className="absolute inset-0">
				<Image
					src="/assets/images/background-segond-section.png"
					alt=""
					fill
					sizes="100vw"
					className="object-cover"
					aria-hidden
				/>
				<div className="absolute inset-0 bg-ivory/70" />
			</div>

			{/* Filaments dorés — subtils, en bas de section */}
			<div className="absolute inset-x-0 bottom-0 h-1/2">
				<Filaments intensity="subtle" />
			</div>

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
						<p className="max-w-sm text-sm leading-relaxed text-slate-ink/60 md:text-right">
							Quel que soit votre souci, nous avons un soin adapté.
						</p>
					</div>
				</Reveal>

				{/* Ligne dorée séparatrice */}
				<Reveal direction="none">
					<div className="hairline mb-8 h-px" />
				</Reveal>

				{/* Grid horizontal — 4 colonnes compactes */}
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
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 300, damping: 24 }}
									className="group flex items-center gap-4 rounded-xl bg-ivory/80 p-4 ring-1 ring-slate-line/25 backdrop-blur-sm transition-all duration-400 hover:bg-ivory hover:shadow-soft hover:ring-gold/25"
								>
									<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-soft to-gold-soft/40 text-gold-deep ring-1 ring-gold/15 transition-all duration-300 group-hover:ring-gold/30">
										<Icon className="h-5 w-5" />
									</span>
									<span className="font-display text-sm font-semibold leading-snug text-royal sm:text-base">
										{c.title}
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

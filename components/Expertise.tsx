"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Feature = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

const features: Feature[] = [
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-6 w-6"
				aria-label="Diagnostic"
			>
				<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
				<rect x="9" y="3" width="6" height="4" rx="1" />
				<path d="M9 14l2 2 4-4" />
			</svg>
		),
		title: "Diagnostic personnalisé",
		description:
			"Chaque peau est unique, nous créons un protocole adapté pour vous.",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-6 w-6"
				aria-label="Produits"
			>
				<path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
				<path d="M12 8v8m-4-4h8" />
			</svg>
		),
		title: "Produits professionnels",
		description:
			"Nous utilisons des produits de haute qualité, sûrs et efficaces.",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-6 w-6"
				aria-label="Suivi"
			>
				<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
			</svg>
		),
		title: "Suivi & conseils",
		description: "Nous vous accompagnons avant, pendant et après chaque soin.",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-6 w-6"
				aria-label="Résultats"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5z" />
				<path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
			</svg>
		),
		title: "Résultats naturels",
		description:
			"Notre objectif : sublimer votre beauté naturelle avec douceur et précision.",
	},
];

export function Expertise() {
	return (
		<section className="relative overflow-hidden bg-royal py-6 md:py-8">
			<div className="container-luxe">
				<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.5fr]">
					{/* Colonne gauche — texte + image de fond */}
					<Reveal direction="left">
						<div className="relative overflow-hidden rounded-2xl bg-royal-light/30 p-6 ring-1 ring-white/10">
							{/* Image de fond — texture dorée avec animation */}
							<motion.div
								animate={{
									scale: [1, 1.08, 1],
									x: [0, -8, 0],
									y: [0, -5, 0],
								}}
								transition={{
									duration: 12,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute inset-0"
							>
								<Image
									src="/assets/images/Expertise-section.png"
									alt=""
									fill
									sizes="(min-width: 1024px) 40vw, 100vw"
									className="object-cover opacity-30"
								/>
							</motion.div>
							<div className="relative z-10">
								<h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold">
									Pourquoi nous choisir ?
								</h3>
								<h2 className="mt-3 max-w-sm font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl">
									L'expertise et l'attention{" "}
									<span className="text-gradient-gold">
										dont votre peau a besoin.
									</span>
								</h2>
							</div>
						</div>
					</Reveal>

					{/* Colonne droite — 4 features */}
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						{features.map((f, i) => (
							<Reveal key={f.title} delay={i * 0.08}>
								<motion.div
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 300, damping: 24 }}
									className="flex flex-col items-center text-center"
								>
									<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold ring-1 ring-gold/30">
										{f.icon}
									</span>
									<h3 className="mt-3 font-display text-sm font-semibold text-gold">
										{f.title}
									</h3>
									<p className="mt-1.5 text-xs leading-relaxed text-white/70">
										{f.description}
									</p>
								</motion.div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

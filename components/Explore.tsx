"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Universe = {
	title: string;
	description: string;
	image: string;
	href: string;
};

const universes: Universe[] = [
	{
		title: "Soins du visage",
		description: "Nettoyer, traiter et sublimer votre peau.",
		image: "/assets/images/soin-visage.jpg",
		href: "/prestation",
	},
	{
		title: "Beauté du regard",
		description: "Sourcils parfaits, cils de rêve et regard sublimé.",
		image: "/assets/images/beaute-au-regard.jpg",
		href: "/prestation",
	},
	{
		title: "Formations",
		description:
			"Apprenez un métier d'avenir avec nos formations certifiantes.",
		image: "/assets/images/formation-soin.jpg",
		href: "/prestation",
	},
	{
		title: "À propos",
		description: "Découvrez notre histoire, notre mission et nos valeurs.",
		image: "/assets/images/candylip.webp",
		href: "/a-propos",
	},
];

type Tariff = {
	name: string;
	price: string;
};

const tariffs: Tariff[] = [
	{ name: "Soin Signature", price: "5 000 FCFA" },
	{ name: "Microneedling", price: "35 000 FCFA" },
	{ name: "Microblading", price: "15 000 FCFA" },
	{ name: "Extensions de cils", price: "7 000 FCFA" },
];

export function Explore() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-royal py-8 md:py-10 section-below-fold"
		>
			<div className="container-luxe">
				{/* En-tête */}
				<Reveal direction="none">
					<h2 className="font-display text-xl font-bold tracking-tight text-gold sm:text-2xl">
						Explorez nos univers
					</h2>
				</Reveal>

				{/* Grille 4 cartes */}
				<Reveal direction="none" className="mt-5">
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
						{universes.map((u, i) => (
							<Reveal key={u.title} delay={i * 0.06}>
								<motion.a
									href={u.href}
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 300, damping: 24 }}
									className="group relative flex h-[180px] flex-col justify-between overflow-hidden rounded-2xl p-4"
								>
									{/* Image de fond */}
									<Image
										src={u.image}
										alt=""
										fill
										sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
									/>
									{/* Overlay doré pour lisibilité */}
									<div
										aria-hidden
										className={`pointer-events-none absolute inset-0 ${i === 0 || i === 2 ? "bg-gradient-to-b from-gold-deep/70 via-gold/30 to-transparent" : "bg-gradient-to-t from-gold-deep/70 via-gold/30 to-transparent"}`}
									/>

									{/* Contenu */}
									<div className="relative z-10">
										<h3 className="font-display text-lg font-bold text-white">
											{u.title}
										</h3>
										<p className="mt-1 text-xs leading-relaxed text-white/85">
											{u.description}
										</p>
									</div>

									{/* Flèche */}
									<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-royal">
										<ArrowRight size={14} />
									</span>
								</motion.a>
							</Reveal>
						))}
					</div>
				</Reveal>

				{/* Barre de tarifs */}
				<Reveal direction="none" className="mt-5">
					<div className="flex flex-col items-center gap-4 rounded-2xl bg-ivory p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between">
						{/* Label */}
						<span className="eyebrow text-[10px] text-gold-deep">
							Des tarifs transparents
						</span>

						{/* Tarifs */}
						<div className="flex flex-wrap justify-center items-center gap-5">
							{tariffs.map((t) => (
								<div key={t.name} className="flex flex-col items-center">
									<span className="text-xs font-medium text-royal">
										{t.name}
									</span>
									<span className="mt-0.5 text-[10px] text-slate-ink/50">
										des
									</span>
									<span className="font-display text-base font-bold text-royal">
										{t.price}
									</span>
								</div>
							))}
						</div>

						{/* Bouton */}
						<motion.a
							href="#tarifs"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 500, damping: 18 }}
							className="animate-pulse-glow inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.06em] text-royal shadow-gold"
						>
							Voir tous les tarifs
						</motion.a>
					</div>
				</Reveal>
			</div>
		</Reveal>
	);
}

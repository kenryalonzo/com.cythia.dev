"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Filaments } from "@/components/ui/Filaments";
import { Reveal } from "@/components/ui/Reveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const treatments = [
	{
		name: "Microblading",
		description: "Sourcils naturels et redessinés",
		image: "/assets/images/beaute-au-regard.jpg",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
			</svg>
		),
	},
	{
		name: "Microshading",
		description: "Effet poudré et sophistiqué",
		image: "/assets/images/microshading.webp",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
			</svg>
		),
	},
	{
		name: "Brow Lift",
		description: "Sourcils disciplinés et rehaussés",
		image: "/assets/images/brow_lift.avif",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
			</svg>
		),
	},
	{
		name: "Extensions de cils",
		description: "Volume et longueur sur mesure",
		image: "/assets/images/extension_des_cils.avif",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
			</svg>
		),
	},
	{
		name: "Rehaussement",
		description: "Courbure naturelle et durable",
		image: "/assets/images/rehaussemnet.webp",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
			</svg>
		),
	},
];

export function BeauteDuRegard() {
	return (
		<Reveal as="section" variant="scroll" className="relative overflow-hidden bg-cream py-8 md:py-10">
			{/* Filaments dorés en arrière-plan — multiples */}
			<Filaments intensity="soft" />
			<Filaments intensity="subtle" className="rotate-45 scale-110" />
			<Filaments intensity="subtle" className="-rotate-12 scale-95" />
			<Filaments intensity="subtle" className="rotate-12 translate-x-10" />
			<Filaments intensity="subtle" className="-rotate-45 -translate-x-10" />

			<div className="container-luxe relative z-10">
				<div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-6">
					{/* ─── Colonne gauche : Texte ─── */}
					<div className="flex shrink-0 flex-col gap-2">
						<Reveal>
							<span className="eyebrow !text-[9px] !tracking-[0.2em] text-gold-deep/80 sm:!text-[10px] md:!text-xs">
								Beauté du regard
							</span>
						</Reveal>

						{/* Titre + Description côte à côte */}
						<div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-4">
							<Reveal delay={0.1}>
								<h2 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl">
									Un regard qui{" "}
									<br className="hidden sm:block" />
									sublime votre{" "}
									<span className="text-gradient-gold font-normal italic">
										beauté.
									</span>
								</h2>
							</Reveal>

							<Reveal delay={0.2}>
								<p className="w-full max-w-[200px] text-xs leading-relaxed text-slate-ink/80 sm:max-w-[280px] lg:max-w-[260px]">
									Des techniques précises pour intensifier votre regard
									et mettre en valeur votre beauté naturelle.
								</p>
							</Reveal>
						</div>

						<Reveal delay={0.15} direction="none">
							<div className="h-0.5 w-10 bg-royal/10 sm:w-14">
								<div className="h-full w-1/3 bg-gold-deep" />
							</div>
						</Reveal>

						<Reveal delay={0.3}>
							<Link
								href="#beaute-regard"
								className="animate-pulse-glow mt-1 inline-flex w-fit items-center justify-center rounded-full bg-gold px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-royal shadow-gold transition-all hover:shadow-lift whitespace-nowrap"
							>
								Découvrir toutes les prestations
							</Link>
						</Reveal>
					</div>

					{/* ─── Colonne droite : 5 cercles ─── */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.08 } },
						}}
						className="flex flex-1 flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-start xl:gap-6"
					>
						{treatments.map((t) => (
							<motion.div
								key={t.name}
								variants={{
									hidden: { opacity: 0, y: 16, scale: 0.9 },
									visible: {
										opacity: 1,
										y: 0,
										scale: 1,
										transition: { duration: 0.5, ease },
									},
								}}
								className="group flex flex-col items-center gap-1.5"
							>
								{/* Cercle image */}
								<motion.div
									whileHover={{ y: -3, scale: 1.04 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
									className="relative h-18 w-18 overflow-hidden rounded-full bg-ivory shadow-card ring-2 ring-gold/20 transition-shadow group-hover:shadow-lift sm:h-22 sm:w-22 md:h-24 md:w-24"
								>
									<Image
										src={t.image}
										alt={t.name}
										fill
										sizes="96px"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
									/>
									{/* Icône dorée en bas */}
									<div className="absolute bottom-0.5 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-gold/90 text-royal shadow-md sm:h-6 sm:w-6">
										{t.icon}
									</div>
								</motion.div>

								{/* Texte */}
								<div className="text-center">
									<h3 className="font-display text-[11px] font-bold text-royal sm:text-xs">
										{t.name}
									</h3>
									<p className="mt-0.5 max-w-[90px] text-[9px] leading-tight text-slate-soft sm:text-[10px]">
										{t.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</Reveal>
	);
}

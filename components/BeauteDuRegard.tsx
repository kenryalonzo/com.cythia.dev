"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
		<section className="relative overflow-hidden bg-cream py-10 md:py-14">
			{/* Soie dorée décorative */}
			<div className="pointer-events-none absolute left-0 top-0 h-full w-[25%] opacity-20">
				<img
					src="/assets/images/forme-left.png"
					alt=""
					aria-hidden
					className="h-full w-full object-cover"
				/>
			</div>

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
					{/* ─── Colonne gauche : Texte ─── */}
					<div className="flex max-w-xs flex-col gap-2.5">
						<Reveal>
							<span className="eyebrow !text-[9px] !tracking-[0.2em] text-gold-deep/80 sm:!text-[10px]">
								Beauté du regard
							</span>
						</Reveal>

						<Reveal delay={0.1}>
							<h2 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl lg:text-4xl">
							 Un regard qui{" "}
								<br className="hidden sm:block" />
								sublime votre{" "}
								<span className="text-gradient-gold font-normal italic">
									beauté.
								</span>
							</h2>
						</Reveal>

						<Reveal delay={0.15} direction="none">
							<div className="h-0.5 w-10 bg-royal/10 sm:w-14">
								<div className="h-full w-1/3 bg-gold-deep" />
							</div>
						</Reveal>

						<Reveal delay={0.2}>
							<p className="text-xs leading-relaxed text-slate-ink/80 sm:text-sm">
								Des techniques précises pour intensifier votre regard
								et mettre en valeur votre beauté naturelle.
							</p>
						</Reveal>

						<Reveal delay={0.3}>
							<Link
								href="#beaute-regard"
								className="mt-1 inline-flex items-center justify-center rounded-full bg-royal px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-ivory shadow-soft transition-all hover:bg-royal-light hover:shadow-lift sm:w-fit"
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
						className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-end lg:gap-6"
					>
						{treatments.map((t) => (
							<motion.div
								key={t.name}
								variants={{
									hidden: { opacity: 0, y: 20, scale: 0.9 },
									visible: {
										opacity: 1,
										y: 0,
										scale: 1,
										transition: { duration: 0.6, ease },
									},
								}}
								className="group flex flex-col items-center gap-2"
							>
								{/* Cercle image */}
								<motion.div
									whileHover={{ y: -4, scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
									className="relative h-20 w-20 overflow-hidden rounded-full bg-ivory shadow-card ring-2 ring-gold/20 transition-shadow group-hover:shadow-lift sm:h-24 sm:w-24 md:h-28 md:w-28"
								>
									<Image
										src={t.image}
										alt={t.name}
										fill
										sizes="112px"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
									/>
									{/* Icône dorée en bas */}
									<div className="absolute bottom-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-gold/90 text-royal shadow-md">
										{t.icon}
									</div>
								</motion.div>

								{/* Texte */}
								<div className="text-center">
									<h3 className="font-display text-xs font-bold text-royal sm:text-sm">
										{t.name}
									</h3>
									<p className="mt-0.5 max-w-[100px] text-[10px] leading-tight text-slate-soft sm:text-[11px]">
										{t.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

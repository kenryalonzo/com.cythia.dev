"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const massages = [
	{
		name: "Massage Relaxant",
		description: "Détente musculaire et mentale",
		price: "10 000",
		image: "/assets/images/massage.png",
	},
	{
		name: "Soin Renaissance",
		description: "Régénération globale anti-âge et fermeté",
		price: "15 000",
		image: "/assets/images/soin-expert.jpg",
	},
	{
		name: "Skin Drink",
		description: "Hydratation intense et repulpante",
		price: "10 000",
		image: "/assets/images/person3.jpg",
	},
];

/** Poudre lumineuse — particules dorées flottantes (client only) */
function LuminousDust() {
	const [particles, setParticles] = useState<
		{ id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[]
	>([]);

	useEffect(() => {
		setParticles(
			Array.from({ length: 30 }, (_, i) => ({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 2 + 1,
				duration: Math.random() * 6 + 5,
				delay: Math.random() * 4,
				opacity: Math.random() * 0.4 + 0.1,
			})),
		);
	}, []);

	if (particles.length === 0) return null;

	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			{particles.map((p) => (
				<motion.div
					key={p.id}
					className="absolute rounded-full bg-gold"
					style={{
						left: `${p.x}%`,
						top: `${p.y}%`,
						width: p.size,
						height: p.size,
					}}
					animate={{
						y: [0, -20 - Math.random() * 20, 0],
						x: [0, Math.random() * 10 - 5, 0],
						opacity: [p.opacity, p.opacity + 0.3, p.opacity],
						scale: [1, 1.3, 1],
					}}
					transition={{
						duration: p.duration,
						repeat: Infinity,
						ease: "easeInOut",
						delay: p.delay,
					}}
				/>
			))}
		</div>
	);
}

export function MassagesBienEtre() {
	return (
		<Reveal as="section" variant="scroll" className="relative overflow-hidden bg-[#0a1d5a] py-10 md:py-14">
			{/* ─── Fond doré animé ─── */}
			<div className="pointer-events-none absolute inset-0">
				{/* Gradient radial doré */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,162,39,0.12) 0%, transparent 60%)",
					}}
				/>
				{/* Lignes dorées fluides */}
				<svg
					className="absolute inset-0 h-full w-full opacity-40"
					viewBox="0 0 1440 400"
					preserveAspectRatio="xMidYMid slice"
					fill="none"
				>
					<defs>
						<linearGradient id="gold-massage" x1="0" y1="0" x2="1" y2="0.5">
							<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
							<stop offset="40%" stopColor="#fdcf02" stopOpacity="0.6" />
							<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
						</linearGradient>
					</defs>
					<motion.path
						d="M-50 180 C 250 100, 450 260, 720 160 S 1100 80, 1500 200"
						stroke="url(#gold-massage)"
						strokeWidth="1.5"
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 2.5, ease: "easeInOut" }}
					/>
					<motion.path
						d="M-50 280 C 300 350, 550 200, 850 300 S 1250 380, 1500 260"
						stroke="url(#gold-massage)"
						strokeWidth="1"
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 0.7 }}
						viewport={{ once: true }}
						transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3 }}
					/>
				</svg>
			</div>

			{/* Poudre lumineuse */}
			<LuminousDust />

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-8">
					{/* ─── Colonne gauche : Texte ─── */}
					<div className="flex flex-col gap-3">
						<Reveal>
							<span className="eyebrow !text-[9px] !tracking-[0.2em] text-gold/80 sm:!text-[10px] md:!text-xs">
								Massages & Bien-Être
							</span>
						</Reveal>

						<Reveal delay={0.1}>
							<h2 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl lg:text-4xl">
								Détendez-vous.{" "}
								<br className="hidden sm:block" />
								Rechargez-vous.{" "}
								<br className="hidden sm:block" />
								<span className="text-gradient-gold font-normal italic">
									Prenez soin de vous.
								</span>
							</h2>
						</Reveal>

						<Reveal delay={0.2}>
							<p className="max-w-sm text-xs leading-relaxed text-white/70 sm:text-sm">
								Des rituels de relaxation pour libérer les tensions,
								stimuler la circulation et retrouver votre équilibre intérieur.
							</p>
						</Reveal>

						<Reveal delay={0.3}>
							<Link
								href="#massages"
								className="mt-1 inline-flex items-center justify-center rounded-full border border-gold/40 bg-transparent px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-gold transition-all hover:border-gold hover:bg-gold/10 sm:w-fit"
							>
								Découvrir nos rituels
							</Link>
						</Reveal>
					</div>

					{/* ─── Colonne droite : 3 cartes ─── */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.1 } },
						}}
						className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
					>
						{massages.map((m) => (
							<motion.div
								key={m.name}
								variants={{
									hidden: { opacity: 0, y: 20, scale: 0.95 },
									visible: {
										opacity: 1,
										y: 0,
										scale: 1,
										transition: { duration: 0.6, ease },
									},
								}}
								whileHover={{
									y: -4,
									transition: { type: "spring", stiffness: 300, damping: 20 },
								}}
								className="group relative overflow-hidden rounded-xl bg-white/5 shadow-card backdrop-blur-sm ring-1 ring-white/10 transition-shadow hover:shadow-lift"
							>
								{/* Image — hauteur augmentée */}
								<div className="relative aspect-[3/4] overflow-hidden">
									<Image
										src={m.image}
										alt={m.name}
										fill
										sizes="(min-width: 640px) 25vw, 100vw"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
									/>
								{/* Gradient overlay doré */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#1a0f00]/95 via-[#1a0f00]/40 to-transparent" />
								</div>

								{/* Contenu */}
								<div className="absolute inset-0 flex flex-col justify-end p-4">
									<h3 className="font-display text-sm font-bold text-white sm:text-base">
										{m.name}
									</h3>
									<p className="mt-1 text-[10px] leading-tight text-white/70 sm:text-[11px]">
										{m.description}
									</p>
									<p className="mt-2 text-xs font-semibold text-gold sm:text-sm">
										Dès{" "}
										<span className="font-bold">{m.price} FCFA</span>
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

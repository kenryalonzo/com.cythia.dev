"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const benefits = [
	{
		text: "Réduction des cicatrices et imperfections",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
	},
	{
		text: "Resserrement des pores",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
	},
	{
		text: "Amélioration de la texture de la peau",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
	},
	{
		text: "Résultats progressifs et durables",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
	},
];

export function MicroneedlingExpert() {
	return (
		<Reveal as="section" variant="scroll" className="relative overflow-hidden bg-[#0a1d5a] py-10 md:py-14">
			{/* ─── Fond doré animé ─── */}
			<div className="pointer-events-none absolute inset-0">
				{/* Gradient radial doré */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,162,39,0.15) 0%, transparent 60%)",
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
						<linearGradient id="gold-flow" x1="0" y1="0" x2="1" y2="0.5">
							<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
							<stop offset="40%" stopColor="#fdcf02" stopOpacity="0.6" />
							<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
						</linearGradient>
					</defs>
					<motion.path
						d="M-50 200 C 200 120, 400 280, 720 180 S 1200 100, 1500 220"
						stroke="url(#gold-flow)"
						strokeWidth="1.5"
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 2.5, ease: "easeInOut" }}
					/>
					<motion.path
						d="M-50 260 C 300 340, 600 180, 900 280 S 1300 360, 1500 240"
						stroke="url(#gold-flow)"
						strokeWidth="1"
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 0.7 }}
						viewport={{ once: true }}
						transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3 }}
					/>
				</svg>
				{/* Particules dorées */}
				{[
					{ cx: "20%", cy: "30%", delay: 0 },
					{ cx: "50%", cy: "60%", delay: 1.5 },
					{ cx: "75%", cy: "25%", delay: 0.8 },
					{ cx: "85%", cy: "70%", delay: 2 },
				].map((p, i) => (
					<motion.div
						key={i}
						className="absolute h-1 w-1 rounded-full bg-gold"
						style={{ left: p.cx, top: p.cy }}
						animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: p.delay,
						}}
					/>
				))}
			</div>

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1fr_auto] lg:gap-8">
					{/* ─── Colonne gauche : Texte ─── */}
					<div className="flex flex-col gap-3">
						<Reveal>
							<span className="eyebrow !text-[9px] !tracking-[0.2em] text-gold/80 sm:!text-[10px] md:!text-xs">
								Microneedling Expert
							</span>
						</Reveal>

						<Reveal delay={0.1}>
							<h2 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl lg:text-4xl">
								Réparez en profondeur.{" "}
								<br className="hidden sm:block" />
								Révélez votre{" "}
								<span className="text-gradient-gold font-normal italic">
									éclat.
								</span>
							</h2>
						</Reveal>

						<Reveal delay={0.2}>
							<p className="max-w-sm text-xs leading-relaxed text-white/70 sm:text-sm">
								Le microneedling stimule naturellement la production
								de collagène pour une peau visiblement plus lisse,
								ferme et lumineuse.
							</p>
						</Reveal>

						<Reveal delay={0.3}>
							<a
								href="#microneedling"
								className="mt-1 inline-flex items-center justify-center rounded-full border border-gold/40 bg-transparent px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-gold transition-all hover:border-gold hover:bg-gold/10 sm:w-fit"
							>
								Découvrir le protocole
							</a>
						</Reveal>
					</div>

					{/* ─── Colonne centre : Benefits ─── */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.08 } },
						}}
						className="flex flex-col gap-3"
					>
						{benefits.map((b) => (
							<motion.div
								key={b.text}
								variants={{
									hidden: { opacity: 0, x: -16 },
									visible: {
										opacity: 1,
										x: 0,
										transition: { duration: 0.5, ease },
									},
								}}
								className="flex items-center gap-3"
							>
								<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
									{b.icon}
								</div>
								<span className="text-xs text-white/85 sm:text-sm">
									{b.text}
								</span>
							</motion.div>
						))}
					</motion.div>

					{/* ─── Colonne droite : Image appareil ─── */}
					<Reveal direction="right" className="hidden lg:block">
						<div className="relative h-[200px] w-[200px] xl:h-[260px] xl:w-[260px]">
							<Image
								src="/assets/images/microneeding.jpg"
								alt="Appareil microneedling"
								fill
								sizes="260px"
								className="object-cover rounded-2xl"
							/>
							{/* Overlay doré */}
							<div
								className="absolute inset-0 rounded-2xl"
								style={{
									background:
										"radial-gradient(circle at 60% 70%, rgba(253,207,2,0.2) 0%, transparent 60%)",
								}}
							/>
						</div>
					</Reveal>
				</div>
			</div>
		</Reveal>
	);
}

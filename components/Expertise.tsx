"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

type Value = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

const values: Value[] = [
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
				<circle cx="12" cy="12" r="10" />
				<circle cx="12" cy="12" r="6" />
				<circle cx="12" cy="12" r="2" />
			</svg>
		),
		title: "Excellence",
		description: "Nous visons l'excellence dans chaque soin, chaque détail, chaque rencontre.",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
				<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
			</svg>
		),
		title: "Personnalisation",
		description: "Chaque peau est unique, nos protocoles sont 100% sur-mesure.",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				<path d="M9 12l2 2 4-4" />
			</svg>
		),
		title: "Éthique",
		description: "Des produits sains, des techniques responsables et un respect total de votre peau.",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
				<path d="M3 18v-6a9 9 0 0118 0v6" />
				<path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
			</svg>
		),
		title: "Écoute",
		description: "Nous prenons le temps de comprendre vos besoins pour des résultats qui vous ressemblent.",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
				<path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
			</svg>
		),
		title: "Transmission",
		description: "Nous formons avec passion pour élever les compétences et changer des vies.",
	},
];

/**
 * Expertise — "Nos Valeurs" section for the About page.
 * Features a dark navy background with golden flowing lines and 5 value cards.
 */
export function Expertise() {
	return (
		<section className="relative overflow-hidden bg-[#0a1d5a] py-10 sm:py-12 md:py-14 lg:py-16">
			{/* ─── Background gold flowing lines ─── */}
			<div className="pointer-events-none absolute inset-0">
				{/* Gradient radial doré */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse 70% 60% at 20% 50%, rgba(201,162,39,0.15) 0%, transparent 60%)",
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
						<linearGradient id="gold-values" x1="0" y1="0" x2="1" y2="0.5">
							<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
							<stop offset="40%" stopColor="#fdcf02" stopOpacity="0.6" />
							<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
						</linearGradient>
					</defs>
					<motion.path
						d="M-50 200 C 200 120, 400 280, 720 180 S 1200 100, 1500 220"
						stroke="url(#gold-values)"
						strokeWidth="1.5"
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 2.5, ease: "easeInOut" }}
					/>
					<motion.path
						d="M-50 260 C 300 340, 600 180, 900 280 S 1300 360, 1500 240"
						stroke="url(#gold-values)"
						strokeWidth="1"
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 0.7 }}
						viewport={{ once: true }}
						transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3 }}
					/>
				</svg>
				{/* Particules dorées */}
				{[
					{ cx: "15%", cy: "25%", delay: 0 },
					{ cx: "45%", cy: "55%", delay: 1.5 },
					{ cx: "70%", cy: "20%", delay: 0.8 },
					{ cx: "85%", cy: "65%", delay: 2 },
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
				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[30%_1fr] lg:gap-12">
					{/* ─── Column Left: Text ─── */}
					<div className="flex flex-col">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-4 block !text-[9px] !tracking-[0.2em] !text-gold/80 sm:!text-[10px] md:!text-[11px]">
								Nos Valeurs
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="max-w-[280px] font-display text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:max-w-none md:text-[2.25rem] lg:text-[2.5rem]">
								Ce qui{" "}
								<span className="text-gradient-gold font-normal italic">
									guide
								</span>{" "}
								chacune de nos actions.
							</h2>
						</Reveal>
					</div>

					{/* ─── Column Right: Values ─── */}
					<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-4 lg:gap-6">
						{values.map((v, i) => (
							<Reveal key={v.title} delay={0.1 * i} direction="up">
								<motion.div
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 300, damping: 24 }}
									className="flex flex-col items-center text-center"
								>
									<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/25">
										{v.icon}
									</span>
									<h3 className="mt-3 font-display text-sm font-semibold text-white">
										{v.title}
									</h3>
									<p className="mt-1.5 text-[11px] leading-relaxed text-white/65 sm:text-xs">
										{v.description}
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

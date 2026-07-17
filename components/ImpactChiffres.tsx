"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
	{ number: "+2500", label: "clientes satisfaites" },
	{ number: "+15", label: "soins experts" },
	{ number: "+5", label: "années d'expérience" },
	{ number: "+200", label: "professionnelles formées" },
];

function CountUp({ target }: { target: string }) {
	const num = Number.parseInt(target.replace(/\D/g, ""), 10);
	const prefix = target.replace(/[\d]/g, "");

	return (
		<motion.span
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			className="font-display text-xl font-bold tracking-tight text-royal sm:text-2xl"
		>
			{prefix}
			<motion.span
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3, delay: 0.2 }}
			>
				{num.toLocaleString("fr-FR")}
			</motion.span>
		</motion.span>
	);
}

export function ImpactChiffres() {
	return (
		<section className="relative overflow-hidden bg-cream py-8 sm:py-10">
			{/* Background gold flowing lines */}
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
				viewBox="0 0 1200 200"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="gold-impact-line" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
						<stop offset="50%" stopColor="#fdcf02" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
					</linearGradient>
				</defs>
				<motion.path
					d="M-50 100 C 200 40, 500 160, 700 70 S 1000 130, 1250 80"
					stroke="url(#gold-impact-line)"
					strokeWidth="1"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2.5, ease: "easeInOut" }}
				/>
				<motion.path
					d="M-50 150 C 250 190, 450 70, 700 140 S 950 60, 1250 110"
					stroke="url(#gold-impact-line)"
					strokeWidth="0.7"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 0.5 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
				/>
			</svg>
			{/* Floating particles */}
			{[
				{ cx: "15%", cy: "25%", delay: 0 },
				{ cx: "75%", cy: "35%", delay: 1 },
				{ cx: "45%", cy: "65%", delay: 0.5 },
				{ cx: "90%", cy: "20%", delay: 1.8 },
			].map((p) => (
				<motion.div
					key={`imp-p-${p.cx}-${p.cy}`}
					className="absolute h-1 w-1 rounded-full bg-gold/35"
					style={{ left: p.cx, top: p.cy }}
					animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: p.delay,
					}}
					aria-hidden
				/>
			))}
			{/* Radial glow */}
			<div
				className="pointer-events-none absolute inset-0 opacity-30"
				aria-hidden
				style={{
					background:
						"radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,162,39,0.08) 0%, transparent 70%)",
				}}
			/>

			<div className="container-luxe relative">
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
					{/* Title block */}
					<Reveal direction="left" className="shrink-0">
						<div className="flex items-center gap-3">
							<span className="eyebrow !text-[9px] !tracking-[0.2em] !text-gold-deep/70">
								Notre impact en chiffres
							</span>
							<span
								className="hidden h-px w-8 bg-gold-deep/30 sm:block"
								aria-hidden
							/>
						</div>
					</Reveal>

					{/* Stats */}
					<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
						{stats.map((s, i) => (
							<Reveal key={s.label} delay={0.06 * i} direction="up">
								<motion.div
									whileHover={{ y: -3, scale: 1.04 }}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
									className="group flex cursor-default flex-col items-center"
								>
									<CountUp target={s.number} />
									<span className="mt-0.5 text-[10px] text-slate-ink/50 transition-colors group-hover:text-slate-ink/70 sm:text-[11px]">
										{s.label}
									</span>
									<motion.div
										className="mt-1 h-px w-0 bg-gold-deep/40"
										whileHover={{ width: "100%" }}
										transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
									/>
								</motion.div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

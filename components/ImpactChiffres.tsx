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
			{/* Subtle gold shimmer */}
			<div
				className="pointer-events-none absolute inset-0 opacity-40"
				aria-hidden
				style={{
					background:
						"linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.05) 50%, transparent 100%)",
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
									className="group flex flex-col items-center cursor-default"
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

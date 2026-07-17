"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const epilationFeatures = [
	"Épilation à la cire",
	"Épilation définitive",
];

const formationFeatures = [
	"Microblading Expert",
	"Extensions de cils",
	"Programme Complet",
];

export function EpilationFormations() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			className="bg-cream px-4 py-6 md:px-8 md:py-8"
		>
			<div className="container-luxe grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
				{/* ── Épilation ── */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease }}
					className="relative overflow-hidden rounded-3xl ring-1 ring-slate-line/20"
				>
					{/* Image background — 100% */}
					<div className="absolute inset-0 z-0" aria-hidden="true">
						<Image
							src="/assets/images/epilation_impecable.webp"
							alt=""
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>

				{/* Overlay doré coin supérieur droit — moitié de la carte */}
				<div className="absolute right-0 top-0 z-20 h-1/2 w-1/2 bg-gradient-to-bl from-gold/35 via-gold/15 to-transparent" />

				<div className="relative flex min-h-[280px] flex-col justify-between p-6 sm:min-h-[320px] sm:p-8">
					{/* Contenu sur fond semi-transparent */}
					<div className="relative z-10 w-fit rounded-2xl bg-ivory/80 p-5 backdrop-blur-sm">
						<span className="eyebrow inline-flex items-center gap-2 text-royal/75">
							Épilation experte
							</span>
							<h2 className="mt-2 font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl">
								Douceur, précision
								<br />
								et confort.
							</h2>
							<p className="mt-2 text-sm leading-relaxed text-slate-ink/70">
								Des techniques efficaces pour une peau
								<br />
								nette et douce durablement.
							</p>
							<ul className="mt-3 space-y-1.5">
								{epilationFeatures.map((f) => (
									<li
										key={f}
										className="flex items-center gap-2.5 text-sm font-medium text-royal"
									>
										<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
											<Check size={12} className="text-royal" />
										</span>
										{f}
									</li>
								))}
							</ul>
						</div>

						{/* Prix */}
						<div className="relative z-10 mt-3 w-fit rounded-xl bg-ivory/80 px-4 py-2 backdrop-blur-sm">
							<p className="font-display text-sm font-semibold text-royal">
								À partir de{" "}
								<span className="text-lg font-bold text-royal">
									3 000 FCFA
								</span>
							</p>
						</div>
					</div>
				</motion.div>

				{/* ── Formations ── */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease, delay: 0.1 }}
					className="relative overflow-hidden rounded-3xl ring-1 ring-slate-line/20"
				>
					{/* Image background — 100% */}
				<div className="absolute inset-0 z-0" aria-hidden="true">
					<Image
						src="/assets/images/formation_pro.webp"
						alt=""
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="object-cover"
					/>
					</div>

				{/* Overlay doré coin supérieur droit — moitié de la carte */}
				<div className="absolute right-0 top-0 z-20 h-1/2 w-1/2 bg-gradient-to-bl from-gold/35 via-gold/15 to-transparent" />

				<div className="relative flex min-h-[280px] flex-col justify-between p-6 sm:min-h-[320px] sm:p-8">
					{/* Contenu sur fond semi-transparent */}
					<div className="relative z-10 ml-auto w-fit rounded-2xl bg-ivory/80 p-5 text-right backdrop-blur-sm">
						<span className="eyebrow inline-flex items-center gap-2 text-royal/75">
							Formations professionnelles
							</span>
							<h2 className="mt-2 font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl">
								Apprenez. Maîtrisez.
								<br />
								Réussissez.
							</h2>
							<p className="mt-2 text-sm leading-relaxed text-slate-ink/70">
								Des formations complètes pour développer
								<br />
								vos compétences et votre carrière.
							</p>
							<ul className="mt-3 space-y-1.5">
								{formationFeatures.map((f) => (
									<li
										key={f}
										className="flex items-center justify-end gap-2.5 text-sm font-medium text-royal"
									>
										{f}
										<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
											<Check size={12} className="text-royal" />
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* CTA */}
						<div className="relative z-10 mt-3 flex justify-center">
							<Button
								href={waLink("formations")}
								external
								variant="gold"
								size="md"
								className="animate-pulse-glow whitespace-nowrap shadow-gold"
							>
								Découvrir nos formations
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</Reveal>
	);
}

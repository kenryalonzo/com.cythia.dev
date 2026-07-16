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
			className="bg-cream px-4 py-6 md:px-8 md:py-10"
		>
			<div className="container-luxe grid grid-cols-1 gap-5 lg:grid-cols-2">
				{/* ── Épilation ── */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease }}
					className="relative overflow-hidden rounded-3xl bg-ivory ring-1 ring-slate-line/20"
				>
					<div className="relative flex min-h-[320px] flex-col justify-between p-7 sm:min-h-[360px] sm:p-9">
						{/* Image background */}
						<div className="absolute inset-0 z-0">
							<Image
								src="/assets/images/epilation_impecable.png"
								alt=""
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							{/* Overlay gradient gauche → droite pour lisibilité */}
							<div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/70 to-transparent" />
						</div>

						{/* Contenu */}
						<div className="relative z-10 max-w-[340px]">
							<span className="eyebrow inline-flex items-center gap-2 text-gold-deep">
								Épilation experte
							</span>
							<h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-royal sm:text-4xl">
								Douceur, précision
								<br />
								et confort.
							</h2>
							<p className="mt-3 text-sm leading-relaxed text-slate-ink/70">
								Des techniques efficaces pour une peau
								<br />
								nette et douce durablement.
							</p>

						<ul className="mt-4 space-y-2">
							{epilationFeatures.map((f) => (
									<li
										key={f}
										className="flex items-center gap-2.5 text-sm font-medium text-royal"
									>
										<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
											<Check size={12} className="text-gold-deep" />
										</span>
										{f}
									</li>
								))}
							</ul>
						</div>

						{/* Prix */}
						<div className="relative z-10 mt-5">
							<p className="font-display text-sm font-semibold text-royal">
								À partir de{" "}
								<span className="text-lg text-gold-deep">3 000 FCFA</span>
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
					className="relative overflow-hidden rounded-3xl bg-ivory ring-1 ring-slate-line/20"
				>
					<div className="relative flex min-h-[320px] flex-col justify-between p-7 sm:min-h-[360px] sm:p-9">
						{/* Image background */}
						<div className="absolute inset-0 z-0">
							<Image
								src="/assets/images/formation_pro.png"
								alt=""
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-l from-ivory/95 via-ivory/70 to-transparent" />
						</div>

						{/* Contenu */}
						<div className="relative z-10 ml-auto max-w-[340px] text-right sm:text-right">
							<span className="eyebrow inline-flex items-center gap-2 text-gold-deep">
								Formations professionnelles
							</span>
							<h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-royal sm:text-4xl">
								Apprenez. Maîtrisez.
								<br />
								Réussissez.
							</h2>
							<p className="mt-3 text-sm leading-relaxed text-slate-ink/70">
								Des formations complètes pour développer
								<br />
								vos compétences et votre carrière.
							</p>

						<ul className="mt-4 space-y-2">
							{formationFeatures.map((f) => (
									<li
										key={f}
										className="flex items-center justify-end gap-2.5 text-sm font-medium text-royal"
									>
										{f}
										<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
											<Check size={12} className="text-gold-deep" />
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* CTA */}
						<div className="relative z-10 mt-5 ml-auto sm:ml-auto">
							<Button
								href={waLink("formations")}
								external
								variant="gold"
								size="lg"
								className="whitespace-nowrap shadow-gold"
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

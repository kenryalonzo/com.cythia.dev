"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const promises = [
	"Un diagnostic précis et personnalisé",
	"Des produits sûrs, efficaces et responsables",
	"Un suivi attentif pour des résultats durables",
];

export function Engagement() {
	return (
		<section className="relative bg-[#f7f3ea] py-8 sm:py-10">
			<div className="container-luxe">
				<div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-6">
					{/* ─── Left: Blue card with portrait ─── */}
					<Reveal direction="left" delay={0.1} className="lg:w-[35%]">
						<motion.div
							whileHover={{ y: -3 }}
							transition={{ type: "spring", stiffness: 300, damping: 24 }}
							className="relative flex items-center overflow-hidden rounded-2xl bg-[#0a1d5a] p-5 sm:p-6"
						>
							{/* Gold shimmer */}
							<div
								className="pointer-events-none absolute inset-0 opacity-30"
								aria-hidden
								style={{
									background:
										"radial-gradient(ellipse 80% 60% at 30% 50%, rgba(201,162,39,0.15) 0%, transparent 60%)",
								}}
							/>
							{/* Gold lines */}
							<svg
								className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
								viewBox="0 0 400 200"
								fill="none"
								aria-hidden="true"
							>
								<motion.path
									d="M-20 100 C 80 60, 180 140, 280 80 S 380 60, 420 100"
									stroke="#c9a227"
									strokeWidth="1"
									initial={{ pathLength: 0, opacity: 0 }}
									whileInView={{ pathLength: 1, opacity: 0.5 }}
									viewport={{ once: true }}
									transition={{ duration: 2, ease: "easeInOut" }}
								/>
							</svg>

							<div className="relative z-10 flex items-center gap-4">
								<div className="relative h-[100px] w-[80px] shrink-0 sm:h-[120px] sm:w-[95px]">
									<Image
										src="/assets/images/profil-cynthia.png"
										alt="Cynthia"
										fill
										sizes="95px"
										className="object-contain object-bottom"
									/>
								</div>
								<div className="flex flex-col">
									<span className="text-gradient-gold font-display text-lg font-semibold italic">
										Cynthia
									</span>
									<span className="text-[8px] font-bold uppercase tracking-[0.2em] text-ivory/50">
										Fondatrice
									</span>
									<p className="mt-2 max-w-[160px] text-[11px] leading-snug text-ivory/70 sm:text-xs">
										« Votre beauté mérite tout notre dévouement. »
									</p>
								</div>
							</div>
						</motion.div>
					</Reveal>

					{/* ─── Center: Title + CTA ─── */}
					<Reveal
						direction="up"
						delay={0.2}
						className="flex flex-col justify-center lg:w-[30%]"
					>
						<span className="eyebrow mb-2 !text-[9px] !tracking-[0.2em] !text-gold-deep/70">
							Notre Engagement
						</span>
						<h2 className="font-display text-lg font-bold leading-[1.1] tracking-tight text-royal sm:text-xl">
							Des soins pensés pour{" "}
							<span className="text-gradient-gold font-normal italic">
								vous.
							</span>
						</h2>
						<Button
							href="#contact"
							variant="royal"
							size="md"
							className="group mt-4 w-fit px-5 shadow-soft hover:shadow-lift"
						>
							Prendre rendez-vous
							<ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
						</Button>
					</Reveal>

					{/* ─── Right: Promises grid ─── */}
					<Reveal direction="right" delay={0.3} className="lg:w-[35%]">
						<div className="flex flex-col gap-2.5">
							{promises.map((p, i) => (
								<motion.div
									key={p}
									initial={{ opacity: 0, x: 10 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: 0.4 + i * 0.08,
										duration: 0.4,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="flex items-start gap-2 rounded-xl bg-white/60 px-3.5 py-2.5 ring-1 ring-gold/10"
								>
									<span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/15">
										<Check
											size={9}
											className="text-gold-deep"
											strokeWidth={2.5}
										/>
									</span>
									<span className="text-[11px] leading-snug text-slate-ink/75 sm:text-xs">
										{p}
									</span>
								</motion.div>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

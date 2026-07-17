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

/**
 * Engagement — Promise section for the About page.
 * Split layout: dark navy left with portrait + gold flowing lines, cream right with quote + promises.
 */
export function Engagement() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="flex min-h-[500px] flex-col lg:min-h-[550px] lg:flex-row">
				{/* ─── Left: Dark navy with portrait + gold decorations ─── */}
				<div className="relative flex w-full items-center justify-center bg-[#0a1d5a] py-12 sm:py-16 lg:w-[45%] lg:py-0">
					{/* Background gold flowing lines */}
					<div className="pointer-events-none absolute inset-0">
						<div
							className="absolute inset-0"
							style={{
								background:
									"radial-gradient(ellipse 80% 60% at 50% 60%, rgba(201,162,39,0.18) 0%, transparent 60%)",
							}}
						/>
						<svg
							className="absolute inset-0 h-full w-full opacity-40"
							viewBox="0 0 800 600"
							preserveAspectRatio="xMidYMid slice"
							fill="none"
							aria-hidden="true"
						>
							<defs>
								<linearGradient
									id="gold-engagement"
									x1="0"
									y1="0"
									x2="1"
									y2="0.5"
								>
									<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
									<stop offset="40%" stopColor="#fdcf02" stopOpacity="0.6" />
									<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
								</linearGradient>
							</defs>
							<motion.path
								d="M-50 300 C 150 180, 350 420, 500 250 S 700 120, 850 320"
								stroke="url(#gold-engagement)"
								strokeWidth="1.5"
								initial={{ pathLength: 0, opacity: 0 }}
								whileInView={{ pathLength: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 2.5, ease: "easeInOut" }}
							/>
							<motion.path
								d="M-50 380 C 200 480, 450 260, 650 400 S 800 340, 850 360"
								stroke="url(#gold-engagement)"
								strokeWidth="1"
								initial={{ pathLength: 0, opacity: 0 }}
								whileInView={{ pathLength: 1, opacity: 0.7 }}
								viewport={{ once: true }}
								transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3 }}
							/>
						</svg>
						{/* Particles */}
						{[
							{ cx: "20%", cy: "20%", delay: 0 },
							{ cx: "70%", cy: "30%", delay: 1.5 },
							{ cx: "40%", cy: "70%", delay: 0.8 },
							{ cx: "80%", cy: "65%", delay: 2 },
						].map((p) => (
							<motion.div
								key={`particle-${p.cx}-${p.cy}`}
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

					{/* Lotus decorations */}
					<motion.div
						animate={{ y: [0, -10, 0] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						className="absolute left-8 top-12 h-16 w-16 opacity-25 sm:left-12 sm:top-16 sm:h-20 sm:w-20"
					>
						<Image
							src="/assets/images/lotus-expertise.png"
							alt=""
							fill
							sizes="80px"
							className="object-contain"
							aria-hidden
						/>
					</motion.div>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{
							duration: 7,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1,
						}}
						className="absolute bottom-16 right-10 h-14 w-14 opacity-20 sm:bottom-20 sm:right-16 sm:h-16 sm:w-16"
					>
						<Image
							src="/assets/images/lotus-middle.png"
							alt=""
							fill
							sizes="64px"
							className="object-contain"
							aria-hidden
						/>
					</motion.div>

					{/* Portrait */}
					<Reveal direction="left" delay={0.2}>
						<div className="relative h-[350px] w-[280px] sm:h-[420px] sm:w-[320px] lg:h-[480px] lg:w-[360px]">
							<Image
								src="/assets/images/profil-cynthia.png"
								alt="Cynthia — Fondatrice"
								fill
								sizes="360px"
								className="object-contain object-bottom"
							/>
						</div>
					</Reveal>
				</div>

				{/* ─── Right: Cream with quote + promises ─── */}
				<div className="flex w-full items-center bg-[#f7f3ea] py-12 sm:py-16 lg:w-[55%] lg:py-0">
					<div className="mx-auto w-full max-w-lg px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-4 block !text-[9px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[10px] md:!text-[11px]">
								Notre Engagement
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="max-w-[300px] font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl md:max-w-none md:text-[2.25rem] lg:text-[2.5rem]">
								Votre beauté mérite <br className="hidden sm:block" />
								<span className="text-gradient-gold font-normal italic">
									tout notre dévouement.
								</span>
							</h2>
						</Reveal>

						<Reveal delay={0.3}>
							<div className="mt-5 sm:mt-6">
								<span
									className="mb-1 block font-display text-5xl leading-none text-gold-deep/30 sm:text-6xl"
									aria-hidden
								>
									&#8220;
								</span>
								<p className="max-w-[380px] font-display text-sm leading-relaxed text-royal/90 sm:text-base md:text-lg">
									Chaque geste, chaque soin, chaque conseil est guidé par une
									seule ambition : vous révéler la meilleure version de
									vous-même.
								</p>
							</div>
						</Reveal>

						<Reveal delay={0.35}>
							<div className="mt-4 flex flex-col gap-0.5 sm:mt-5">
								<span className="text-gradient-gold font-display text-2xl font-semibold italic">
									Cynthia
								</span>
								<span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-soft">
									Fondatrice
								</span>
							</div>
						</Reveal>

						<Reveal delay={0.4}>
							<div className="my-5 h-px w-full max-w-[300px] bg-gold-deep/20 sm:my-6" />
						</Reveal>

						<Reveal delay={0.45}>
							<div className="flex flex-col gap-3">
								{promises.map((p, i) => (
									<motion.div
										key={p}
										initial={{ opacity: 0, x: -12 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											delay: 0.5 + i * 0.08,
											duration: 0.4,
											ease: [0.22, 1, 0.36, 1],
										}}
										className="flex items-start gap-2.5"
									>
										<span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20">
											<Check
												size={10}
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

						<Reveal delay={0.55} direction="up">
							<div className="mt-6 sm:mt-8">
								<Button
									href="#contact"
									variant="royal"
									size="md"
									className="group px-6 shadow-soft hover:shadow-lift sm:w-fit"
								>
									Prendre rendez-vous
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}

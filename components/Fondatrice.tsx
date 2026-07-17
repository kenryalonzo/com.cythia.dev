"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
	{ number: "100%", label: "Engagement" },
	{ number: "500+", label: "Clientes satisfaites" },
	{ number: "6 ans+", label: "d'expertise" },
];

export function Fondatrice() {
	return (
		<section className="relative overflow-hidden bg-[#f7f3ea] py-10 sm:py-12">
			{/* Background gold flowing lines */}
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
				viewBox="0 0 1200 400"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="gold-fond" x1="0" y1="0" x2="1" y2="0.5">
						<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
						<stop offset="40%" stopColor="#fdcf02" stopOpacity="0.4" />
						<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
					</linearGradient>
				</defs>
				<motion.path
					d="M-50 200 C 200 100, 400 300, 600 150 S 900 250, 1250 120"
					stroke="url(#gold-fond)"
					strokeWidth="1"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: "easeInOut" }}
				/>
			</svg>
			{/* Lotus decoration */}
			<motion.div
				animate={{ y: [0, -6, 0] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="pointer-events-none absolute right-0 top-0 h-full w-[20%] opacity-15"
				aria-hidden
			>
				<Image
					src="/assets/images/lotus-cote-droit.png"
					alt=""
					fill
					sizes="20vw"
					className="object-contain object-right"
				/>
			</motion.div>

			<div className="container-luxe relative z-10">
				<div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-0">
					{/* ─── Left: Text + Stats (~45%) ─── */}
					<div className="flex w-full flex-col lg:w-[45%] lg:pr-10">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-3 block !text-[9px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[10px] md:!text-[11px]">
								Notre Fondatrice
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="max-w-[320px] font-display text-xl font-bold leading-[1.1] tracking-tight text-royal sm:text-2xl md:max-w-none md:text-[1.75rem] lg:text-[2rem]">
								Une vision,
								<br />
								une mission,
								<br />
								une conviction.
							</h2>
						</Reveal>

						<Reveal delay={0.3}>
							<p className="mt-3 max-w-md text-xs leading-relaxed text-slate-ink/70 sm:text-sm md:text-base">
								J&apos;ai créé Cynthia Cosmétique pour offrir bien plus
								qu&apos;un soin : une expérience transformative qui révèle la
								beauté et renforce la confiance.
							</p>
						</Reveal>

						{/* Stats */}
						<Reveal delay={0.4}>
							<div className="mt-5 flex gap-6 sm:gap-8">
								{stats.map((s) => (
									<div key={s.label} className="flex flex-col">
										<span className="font-display text-lg font-bold text-gold-deep sm:text-xl md:text-2xl">
											{s.number}
										</span>
										<span className="mt-0.5 text-[9px] text-slate-ink/55 sm:text-[10px] md:text-xs">
											{s.label}
										</span>
									</div>
								))}
							</div>
						</Reveal>
					</div>

					{/* ─── Center: Portrait (~35%) ─── */}
					<Reveal delay={0.2} className="w-full lg:w-[35%]">
						<motion.div
							whileHover={{ y: -3 }}
							transition={{ type: "spring", stiffness: 300, damping: 24 }}
							className="relative mx-auto aspect-[3/4] w-[220px] overflow-hidden rounded-2xl bg-[#0a1d5a] shadow-card sm:w-[260px] md:w-[280px]"
						>
							{/* Gold shimmer */}
							<div
								className="pointer-events-none absolute inset-0 z-10 opacity-20"
								aria-hidden
								style={{
									background:
										"radial-gradient(ellipse 80% 60% at 30% 50%, rgba(201,162,39,0.15) 0%, transparent 60%)",
								}}
							/>
							<Image
								src="/assets/images/cynthia-vision.png"
								alt="Cynthia — Fondatrice de Cynthia Cosmétique"
								fill
								sizes="280px"
								className="object-cover object-top"
							/>
						</motion.div>
					</Reveal>

					{/* ─── Right: Quote (~20%) ─── */}
					<Reveal
						direction="right"
						delay={0.3}
						className="w-full lg:w-[20%] lg:pl-8"
					>
						<div className="flex flex-col">
							<span
								className="mb-1 block font-display text-4xl leading-none text-gold-deep/30 sm:text-5xl"
								aria-hidden
							>
								&#171;
							</span>
							<blockquote className="font-display text-base font-medium italic leading-[1.3] tracking-tight text-royal/90 sm:text-lg md:text-xl">
								<span className="text-gradient-gold">
									J&apos;ai créé cet espace
								</span>{" "}
								pour que chaque femme puisse se regarder{" "}
								<span className="text-gradient-gold">avec fierté.</span>
							</blockquote>
							<span
								className="mt-1 block text-right font-display text-4xl leading-none text-gold-deep/30 sm:text-5xl"
								aria-hidden
							>
								&#187;
							</span>

							<div className="mt-4 flex flex-col gap-0.5">
								<span className="text-gradient-gold font-display text-lg font-semibold italic">
									Cynthia
								</span>
								<span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-soft">
									Fondatrice &amp; Experte en soins de la peau
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

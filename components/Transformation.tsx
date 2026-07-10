"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Transformation() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-cream py-8 md:py-12 section-below-fold"
		>
			{/* Décor — filet doré subtil */}
			<div aria-hidden className="absolute inset-0 overflow-hidden">
				<svg
					role="presentation"
					aria-hidden="true"
					className="absolute inset-0 h-full w-full"
					viewBox="0 0 1440 300"
					fill="none"
					preserveAspectRatio="xMidYMid slice"
				>
					<defs>
						<linearGradient id="gold-line" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
							<stop offset="50%" stopColor="#fdcf02" stopOpacity="0.15" />
							<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
						</linearGradient>
					</defs>
					<path
						d="M-50 150 C 300 100, 600 200, 900 130 S 1300 170, 1520 150"
						stroke="url(#gold-line)"
						strokeWidth="1"
					/>
				</svg>
				{/* Lotus décoratif — bas droit avec animation */}
				<motion.div
					animate={{
						y: [0, -8, 0],
						rotate: [0, 3, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute -bottom-32 right-0 h-[260px] w-[260px] translate-x-1/3"
				>
					<Image
						src="/assets/images/floor-dore-image.png"
						alt=""
						fill
						sizes="260px"
						className="opacity-[0.07] object-contain"
					/>
				</motion.div>
				{/* Lotus décoratif — bas gauche avec animation décalée */}
				<motion.div
					animate={{
						y: [0, -10, 0],
						rotate: [0, -4, 0],
					}}
					transition={{
						duration: 7,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1.5,
					}}
					className="absolute -bottom-34 left-0 h-[300px] w-[300px] -translate-x-1/4"
				>
					<Image
						src="/assets/images/floor-dore-image.png"
						alt=""
						fill
						sizes="300px"
						className="opacity-[0.05] object-contain"
					/>
				</motion.div>
			</div>

			<div className="container-luxe relative">
				{/* En-tête */}
				<Reveal direction="none">
					<div className="mb-6 max-w-2xl">
						<span className="eyebrow inline-flex items-center gap-2">
							<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
							Notre approche
						</span>
						<h2 className="mt-3 font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl md:text-4xl">
							Une transformation réelle,
							<br />
							<span className="text-gradient-gold">à chaque étape.</span>
						</h2>
					</div>
				</Reveal>

				{/* Layout horizontal — images rapprochées */}
				<div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-3">
					{/* Avant — texte à gauche, image à droite */}
					<Reveal delay={0.1} direction="left">
						<div className="flex items-center gap-3">
							<div className="ml-auto text-right">
								<span className="font-display text-base font-semibold text-royal">
									Avant
								</span>
								<p className="mt-1 max-w-[170px] text-xs leading-relaxed text-slate-ink/55">
									Des problèmes qui
									<br />
									affectent votre confiance.
								</p>
							</div>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="relative rounded-xl p-[3px] ring-1 ring-royal/30 shadow-soft"
							>
								{/* Double bordure bleue */}
								<div className="relative overflow-hidden rounded-[10px] ring-1 ring-royal/20">
									<div className="relative aspect-[3/4] w-[120px] sm:w-[160px] md:w-[180px]">
										<Image
											src="/assets/images/before-image.png"
											alt="Avant le soin — peau avec imperfections"
											fill
											sizes="(min-width: 768px) 180px, (min-width: 640px) 160px, 120px"
											className="object-cover"
										/>
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
									</div>
								</div>
							</motion.div>
						</div>
					</Reveal>

					{/* Lotus central — plus gros */}
					<Reveal delay={0.2}>
						<div className="flex flex-col items-center text-center">
							<motion.div
								whileHover={{ scale: 1.08, rotate: 5 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className="relative flex h-[130px] w-[130px] items-center justify-center rounded-full ring-1 ring-gold/25"
							>
								<div
									aria-hidden
									className="absolute -inset-5 rounded-full opacity-40 blur-xl"
									style={{
										background:
											"radial-gradient(circle, rgba(253,207,2,0.35) 0%, transparent 70%)",
									}}
								/>
								<Image
									src="/assets/images/floor-dore-image.png"
									alt="Lotus doré — notre approche"
									fill
									sizes="96px"
									className="relative z-10 object-contain"
								/>
							</motion.div>
							<div className="mt-5">
								<span className="font-display text-base font-semibold text-royal">
									Notre approche
								</span>
								<p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-slate-ink/55">
									Diagnostic personnalisé,
									<br />
									produits de qualité et soins adaptés
									<br />à votre peau.
								</p>
							</div>
						</div>
					</Reveal>

					{/* Après — image à gauche, texte à droite */}
					<Reveal delay={0.3} direction="right">
						<div className="flex items-center gap-3">
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="relative rounded-xl p-[3px] ring-1 ring-royal/30 shadow-soft"
							>
								{/* Double bordure bleue */}
								<div className="relative overflow-hidden rounded-[10px] ring-1 ring-royal/20">
									<div className="relative aspect-[3/4] w-[120px] sm:w-[160px] md:w-[180px]">
										<Image
											src="/assets/images/after-image.png"
											alt="Après le soin — peau saine et éclatante"
											fill
											sizes="(min-width: 768px) 180px, (min-width: 640px) 160px, 120px"
											className="object-cover"
										/>
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
									</div>
								</div>
							</motion.div>
							<div className="flex-1 text-left">
								<span className="font-display text-base font-semibold text-royal">
									Après
								</span>
								<p className="mt-1 max-w-[170px] text-xs leading-relaxed text-slate-ink/55">
									Une peau plus saine,
									<br />
									lumineuse et éclatante.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</Reveal>
	);
}

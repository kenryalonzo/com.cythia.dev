"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Transformation() {
	return (
		<section className="relative overflow-hidden bg-cream py-10 md:py-14">
			{/* Décor — filets dorés subtils */}
			<div aria-hidden className="absolute inset-0">
				<svg
					role="presentation"
					aria-hidden="true"
					className="absolute inset-0 h-full w-full"
					viewBox="0 0 1440 400"
					fill="none"
					preserveAspectRatio="xMidYMid slice"
				>
					<defs>
						<linearGradient id="gold-fade" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
							<stop offset="50%" stopColor="#fdcf02" stopOpacity="0.12" />
							<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
						</linearGradient>
					</defs>
					<path
						d="M-50 200 C 300 140, 600 260, 900 180 S 1300 230, 1520 200"
						stroke="url(#gold-fade)"
						strokeWidth="1"
					/>
				</svg>
			</div>

			<div className="container-luxe relative">
				{/* En-tête compact */}
				<Reveal direction="none">
					<div className="mb-8 max-w-2xl">
						<span className="eyebrow inline-flex items-center gap-2">
							<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
							Notre approche
						</span>
						<h2 className="mt-3 font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl md:text-4xl">
							Une transformation réelle,{" "}
							<span className="text-gradient-gold">à chaque étape.</span>
						</h2>
					</div>
				</Reveal>

				{/* Layout 3 colonnes — compact */}
				<div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-4">
					{/* Avant */}
					<Reveal delay={0.1}>
						<div className="flex flex-col items-center text-center">
							<div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-xl ring-1 ring-slate-line/30">
								<Image
									src="/assets/images/before-image.png"
									alt="Avant le soin — peau avec imperfections"
									fill
									sizes="(min-width: 768px) 200px, 70vw"
									className="object-cover"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-transparent" />
							</div>
							<div className="mt-4">
								<span className="font-display text-base font-semibold text-royal">
									Avant
								</span>
								<p className="mt-1.5 max-w-[200px] text-xs leading-relaxed text-slate-ink/60">
									Des problèmes qui affectent votre confiance.
								</p>
							</div>
						</div>
					</Reveal>

					{/* Notre Approche — centre avec lotus */}
					<Reveal delay={0.2}>
						<div className="flex flex-col items-center text-center">
							<div className="relative flex h-20 w-20 items-center justify-center rounded-full ring-1 ring-gold/25">
								<div
									aria-hidden
									className="absolute -inset-3 rounded-full opacity-30 blur-lg"
									style={{
										background:
											"radial-gradient(circle, rgba(253,207,2,0.25) 0%, transparent 70%)",
									}}
								/>
								<Image
									src="/assets/images/floor-dore-image.png"
									alt="Lotus doré — notre approche"
									width={48}
									height={48}
									className="relative z-10 object-contain"
								/>
							</div>
							<div className="mt-4">
								<span className="font-display text-base font-semibold text-royal">
									Notre approche
								</span>
								<p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-slate-ink/60">
									Diagnostic personnalisé, produits de qualité et soins adaptés
									à votre peau.
								</p>
							</div>
						</div>
					</Reveal>

					{/* Après */}
					<Reveal delay={0.3}>
						<div className="flex flex-col items-center text-center">
							<div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-xl ring-1 ring-slate-line/30">
								<Image
									src="/assets/images/after-image.png"
									alt="Après le soin — peau saine et éclatante"
									fill
									sizes="(min-width: 768px) 200px, 70vw"
									className="object-cover"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-transparent" />
							</div>
							<div className="mt-4">
								<span className="font-display text-base font-semibold text-royal">
									Après
								</span>
								<p className="mt-1.5 max-w-[200px] text-xs leading-relaxed text-slate-ink/60">
									Une peau plus saine, lumineuse et éclatante.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

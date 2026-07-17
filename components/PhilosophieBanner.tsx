"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function PhilosophieBanner() {
	return (
		<section className="relative overflow-hidden bg-ivory py-10 sm:py-12 md:py-14">
			{/* Subtle gold line */}
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
				viewBox="0 0 1200 300"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="gold-phil" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
						<stop offset="50%" stopColor="#fdcf02" stopOpacity="0.3" />
						<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
					</linearGradient>
				</defs>
				<motion.path
					d="M-50 150 C 300 100, 600 200, 900 130 S 1300 170, 1350 150"
					stroke="url(#gold-phil)"
					strokeWidth="0.8"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 4, ease: "easeInOut" }}
				/>
			</svg>

			<div className="container-luxe relative z-10 text-center">
				<Reveal>
					<span
						className="mb-3 block font-display text-5xl leading-none text-gold-deep/20 sm:text-6xl"
						aria-hidden
					>
						&#8220;
					</span>
				</Reveal>

				<Reveal delay={0.1}>
					<blockquote className="mx-auto max-w-2xl font-display text-lg font-medium italic leading-[1.4] tracking-tight text-royal/90 sm:text-xl md:text-2xl">
						La beauté n&apos;est pas une destination,
						<br className="hidden sm:block" />
						c&apos;est un voyage que nous parcourons ensemble.
					</blockquote>
				</Reveal>

				<Reveal delay={0.2}>
					<div className="mx-auto mt-4 flex items-center justify-center gap-3">
						<span className="h-px w-6 bg-gold-deep/30" aria-hidden />
						<span className="text-gradient-gold font-display text-base font-semibold italic">
							Cynthia
						</span>
						<span className="h-px w-6 bg-gold-deep/30" aria-hidden />
					</div>
				</Reveal>

				<Reveal delay={0.25}>
					<span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.25em] text-slate-soft">
						Fondatrice
					</span>
				</Reveal>
			</div>
		</section>
	);
}

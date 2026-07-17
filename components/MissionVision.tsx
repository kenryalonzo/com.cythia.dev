"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
	return (
		<section className="relative overflow-hidden bg-[#0a1d5a] py-10 sm:py-12">
			{/* Background gold flowing lines */}
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
				viewBox="0 0 1200 200"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="gold-mv" x1="0" y1="0" x2="1" y2="0.5">
						<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
						<stop offset="40%" stopColor="#fdcf02" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
					</linearGradient>
				</defs>
				<motion.path
					d="M-50 100 C 200 50, 400 150, 600 80 S 900 120, 1250 60"
					stroke="url(#gold-mv)"
					strokeWidth="1"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 3, ease: "easeInOut" }}
				/>
			</svg>
			{/* Particles */}
			{[
				{ cx: "15%", cy: "30%", delay: 0 },
				{ cx: "80%", cy: "25%", delay: 1 },
				{ cx: "50%", cy: "70%", delay: 0.5 },
			].map((p) => (
				<motion.div
					key={`mv-${p.cx}-${p.cy}`}
					className="absolute h-0.5 w-0.5 rounded-full bg-gold/30"
					style={{ left: p.cx, top: p.cy }}
					animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: p.delay,
					}}
					aria-hidden
				/>
			))}

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
					{/* ─── Mission ─── */}
					<Reveal direction="left" delay={0.1}>
						<div className="flex items-center gap-5 sm:gap-6">
							{/* Icon */}
							<motion.div
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24"
							>
								<div className="absolute inset-0 rounded-full border border-gold/30" />
								<div
									className="absolute inset-1.5 rounded-full"
									style={{
										background:
											"radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)",
									}}
								/>
								<svg
									viewBox="0 0 64 64"
									className="relative z-10 h-10 w-10 text-gold sm:h-12 sm:w-12"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									aria-hidden="true"
								>
									<path d="M32 8 C32 8 20 20 20 32 C20 44 32 56 32 56 C32 56 44 44 44 32 C44 20 32 8 32 8Z" />
									<path d="M32 16 C32 16 24 24 24 32 C24 40 32 48 32 48" />
									<path d="M32 16 C32 16 40 24 40 32 C40 40 32 48 32 48" />
									<path d="M16 32 C16 32 24 24 32 24 C40 24 48 32 48 32" />
								</svg>
							</motion.div>

							<div>
								<span className="eyebrow mb-2 block !text-[9px] !tracking-[0.2em] !text-gold sm:!text-[10px]">
									Notre Mission
								</span>
								<h2 className="font-display text-lg font-bold italic leading-[1.15] tracking-tight text-ivory sm:text-xl">
									Révéler la meilleure version de vous-même.
								</h2>
								<p className="mt-2 max-w-xs text-[11px] leading-relaxed text-ivory/55 sm:text-xs">
									Nous combinons expertise, technologies de pointe et produits
									de haute qualité pour sublimer votre peau.
								</p>
							</div>
						</div>
					</Reveal>

					{/* ─── Vision ─── */}
					<Reveal direction="right" delay={0.2}>
						<div className="flex items-center gap-5 sm:gap-6">
							{/* Icon */}
							<motion.div
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24"
							>
								<div className="absolute inset-0 rounded-full border border-gold/30" />
								<div
									className="absolute inset-1.5 rounded-full"
									style={{
										background:
											"radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)",
									}}
								/>
								<svg
									viewBox="0 0 64 64"
									className="relative z-10 h-10 w-10 text-gold sm:h-12 sm:w-12"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									aria-hidden="true"
								>
									<path d="M12 44 L12 24 L24 32 L32 16 L40 32 L52 24 L52 44 Z" />
									<circle cx="12" cy="22" r="2" />
									<circle cx="32" cy="14" r="2" />
									<circle cx="52" cy="22" r="2" />
									<path d="M12 44 L52 44" />
								</svg>
							</motion.div>

							<div>
								<span className="eyebrow mb-2 block !text-[9px] !tracking-[0.2em] !text-gold sm:!text-[10px]">
									Notre Vision
								</span>
								<h2 className="font-display text-lg font-bold italic leading-[1.15] tracking-tight text-ivory sm:text-xl">
									Devenir la référence beauté en Afrique.
								</h2>
								<p className="mt-2 max-w-xs text-[11px] leading-relaxed text-ivory/55 sm:text-xs">
									Inspirer, éduquer et impacter des milliers de femmes en leur
									offrant des soins d&apos;exception.
								</p>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

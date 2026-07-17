"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
			</svg>
		),
		number: "+2500",
		label: "clientes satisfaites",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
				<path d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
			</svg>
		),
		number: "+15",
		label: "soins experts",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				<path d="M9 12l2 2 4-4" />
			</svg>
		),
		number: "+5",
		label: "années d'expérience",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				className="h-6 w-6"
				aria-hidden="true"
			>
				<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
			</svg>
		),
		number: "+200",
		label: "professionnelles formées",
	},
];

/**
 * ImpactChiffres — "Notre Impact en Chiffres" section for the About page.
 * Features stats with icons and a product image on the right.
 */
export function ImpactChiffres() {
	return (
		<section className="relative overflow-hidden bg-ivory py-10 sm:py-12 md:py-14 lg:py-16">
			{/* ─── Background silk texture ─── */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/left-image-effect.png"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-right opacity-40 lg:opacity-60"
					aria-hidden
				/>
			</div>

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[55%_1fr] lg:gap-12">
					{/* ─── Column Left: Text + Stats ─── */}
					<div className="flex flex-col">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-4 block !text-[9px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[10px] md:!text-[11px]">
								Notre impact en chiffres
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="max-w-[320px] font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl md:max-w-none md:text-[2.25rem] lg:text-[2.5rem]">
								Des <span className="text-gradient-gold">résultats</span> qui
								parlent d&apos;eux-mêmes.
							</h2>
						</Reveal>

						{/* Stats grid */}
						<div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-4 md:gap-6">
							{stats.map((s, i) => (
								<Reveal key={s.label} delay={0.3 + i * 0.08} direction="up">
									<motion.div
										whileHover={{ y: -4 }}
										transition={{ type: "spring", stiffness: 300, damping: 24 }}
										className="flex flex-col items-center rounded-2xl bg-white/60 p-4 shadow-soft ring-1 ring-slate-line/15 backdrop-blur-sm sm:p-5"
									>
										<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/20">
											{s.icon}
										</span>
										<span className="mt-3 font-display text-2xl font-bold tracking-tight text-royal sm:text-3xl">
											{s.number}
										</span>
										<span className="mt-1 text-center text-[10px] leading-tight text-slate-ink/65 sm:text-[11px]">
											{s.label}
										</span>
									</motion.div>
								</Reveal>
							))}
						</div>
					</div>

					{/* ─── Column Right: Product Image ─── */}
					<Reveal direction="right" delay={0.4} className="hidden lg:block">
						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
							className="relative h-[300px] w-full xl:h-[380px]"
						>
							<Image
								src="/assets/images/Expertise-section.png"
								alt="Produits Cynthia Cosmétique"
								fill
								sizes="40vw"
								className="object-contain object-center"
							/>
						</motion.div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

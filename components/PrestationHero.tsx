"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * PrestationHero — High-fidelity hero for the services page.
 * Faithfully reproduces the attached design using strategic assets:
 * hero-right-image.png, left-image-effect.png, and lotus-expertise.png.
 */
export function PrestationHero() {
	return (
		<section className="relative min-h-[600px] w-full overflow-hidden bg-ivory py-16 lg:h-[85vh] lg:min-h-[700px] lg:py-0">
			{/* ─── Layer 1: Global Silk Background ─── */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/left-image-effect.png"
					alt=""
					fill
					priority
					className="object-cover opacity-70"
					aria-hidden
				/>
			</div>

			{/* ─── Layer 2: Main Portrait (Right) ─── */}
			<div className="absolute inset-y-0 right-0 z-10 hidden w-full lg:block">
				<motion.div
					initial={{ opacity: 0, x: 50, scale: 1.05 }}
					animate={{ opacity: 1, x: 0, scale: 1 }}
					transition={{
						duration: 1.2,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.1,
					}}
					className="relative h-full w-full"
				>
					<Image
						src="/assets/images/hero-right-image.png"
						alt="Portrait Cynthia Cosmétique"
						fill
						priority
						className="object-contain object-right"
					/>
				</motion.div>
			</div>

			{/* ─── Layer 3: Content (Left) ─── */}
			<div className="container-luxe relative z-20 flex h-full flex-col justify-center">
				<div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl">
					{/* Eyebrow */}
					<Reveal direction="down" delay={0.2}>
						<div className="mb-8 flex items-center gap-4">
							<span className="eyebrow !text-[11px] !tracking-[0.25em] text-gold-deep/80 sm:!text-[12px]">
								L&apos;expertise au service de votre beauté
							</span>
							<div className="relative h-8 w-8 sm:h-10 sm:w-10">
								<Image
									src="/assets/images/lotus-expertise.png"
									alt="Lotus"
									fill
									sizes="40px"
									className="object-contain"
									aria-hidden
								/>
							</div>
						</div>
					</Reveal>

					{/* Title */}
					<Reveal delay={0.3}>
						<h1 className="flex flex-col gap-2 font-display text-5xl font-bold leading-[1.05] text-royal sm:text-6xl md:flex-row md:items-baseline md:gap-4 lg:text-[5.5rem] xl:text-[6.5rem]">
							<span>Nos</span>
							<span className="text-gradient-gold font-normal italic">
								Prestations
							</span>
						</h1>
					</Reveal>

					{/* Decorative Line */}
					<Reveal delay={0.4} direction="none">
						<div className="mt-6 h-[1.5px] w-12 bg-royal/15 sm:w-16">
							<div className="h-full w-2/5 bg-gold-deep" />
						</div>
					</Reveal>

					{/* Description */}
					<Reveal delay={0.5}>
						<p className="mt-8 max-w-lg text-base leading-relaxed text-slate-ink/85 sm:text-lg md:text-xl">
							Des soins sur-mesure, des techniques de pointe et une approche
							personnalisée pour révéler la beauté naturelle de votre peau.
						</p>
					</Reveal>

					{/* Buttons */}
					<Reveal delay={0.6} direction="up">
						<div className="mt-10 flex flex-wrap items-center gap-5">
							<Button
								href={waLink("Bonjour, je souhaite réserver un soin.")}
								external
								variant="royal"
								size="lg"
								className="animate-pulse-glow shadow-soft hover:shadow-lift"
								icon={<WhatsAppIcon className="h-4 w-4" />}
							>
								Réserver maintenant
							</Button>
							<Button
								href="/contact"
								variant="outline-gold"
								size="lg"
								className="group border-gold-deep/30"
							>
								Nous contacter
								<svg
									className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
									aria-hidden
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</Button>
						</div>
					</Reveal>
				</div>
			</div>

			{/* Mobile Portrait Background (Faded) */}
			<div className="absolute inset-0 z-10 block lg:hidden">
				<div className="relative h-full w-full">
					<Image
						src="/assets/images/hero-right-image.png"
						alt=""
						fill
						className="object-cover object-top opacity-30"
						aria-hidden
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/40 to-ivory" />
				</div>
			</div>
		</section>
	);
}

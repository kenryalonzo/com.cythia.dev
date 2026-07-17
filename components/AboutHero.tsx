"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * AboutHero — High-fidelity hero section for the "About Us" page.
 * Features Cynthia's portrait overlapping with philosophical text and a testimonial quote.
 * Respects the "No dark zones" luxury philosophy.
 */
export function AboutHero() {
	return (
		<section className="relative min-h-[600px] w-full overflow-hidden bg-ivory pt-24 pb-16 lg:h-[90vh] lg:min-h-[750px] lg:pt-0 lg:pb-0">
			{/* ─── Layer 1: Background Silk Texture (left side flowing up) ─── */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/left-image-effect.png"
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-left opacity-50 lg:opacity-70"
					aria-hidden
				/>
			</div>

			{/* ─── Layer 2: Content Container ─── */}
			<div className="container-luxe relative z-20 flex h-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-0">
				{/* ─── Column Left: Main Philosophy (~40%) ─── */}
				<div className="order-2 w-full lg:order-1 lg:w-[40%] lg:pr-8">
					<Reveal direction="down" delay={0.1}>
						<span className="eyebrow mb-6 block !text-[10px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[11px] md:!text-xs">
							À propos de Cynthia Cosmétique
						</span>
					</Reveal>

					<Reveal delay={0.2}>
						<h1 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-royal sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
							Bien plus qu&apos;un institut,{" "}
							<span className="text-gradient-gold block font-normal italic sm:inline-block">
								une philosophie de la beauté.
							</span>
						</h1>
					</Reveal>

					<Reveal delay={0.3}>
						<p className="mt-6 max-w-md text-sm leading-relaxed text-slate-ink/80 sm:text-base md:text-lg">
							Cynthia Cosmétique est née d&apos;une conviction profonde : la beauté
							véritable commence par le respect de la peau, de la personne et de son
							histoire.
						</p>
					</Reveal>

					<Reveal delay={0.4} direction="up">
						<div className="mt-8">
							<Button
								href="#histoire"
								variant="outline-gold"
								size="lg"
								className="group border-gold-deep/40"
							>
								Notre Histoire
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</Reveal>
				</div>

				{/* ─── Column Center: Portrait (overlapping, ~35%) ─── */}
				<div className="order-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:order-2 lg:flex lg:w-[35%] lg:max-w-none lg:justify-center lg:-mx-8 xl:-mx-12">
					<motion.div
						initial={{ opacity: 0, scale: 0.96, y: 30 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
						className="relative aspect-[3/4] w-full lg:aspect-[3/4] lg:h-[80vh]"
					>
						<Image
							src="/assets/images/profil-cynthia.png"
							alt="Cynthia — Fondatrice de Cynthia Cosmétique"
							fill
							priority
							sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 80vw"
							className="object-contain object-bottom"
						/>
					</motion.div>
				</div>

				{/* ─── Column Right: Floating Quote (~25%) ─── */}
				<div className="order-3 mt-8 w-full lg:order-3 lg:mt-0 lg:w-[25%] lg:pl-4">
					<Reveal delay={0.5} direction="left">
						<div className="relative flex flex-col">
							{/* Gold quotation marks */}
							<span
								className="mb-2 h-10 select-none font-display text-6xl leading-none text-gold-deep/30 sm:text-7xl"
								aria-hidden
							>
								&#8220;
							</span>

							<p className="font-display text-lg leading-relaxed text-royal sm:text-xl lg:text-[1.35rem]">
								Chaque peau est unique. Notre mission est d&apos;en révéler
								l&apos;éclat naturel.
							</p>

							<div className="mt-8 flex flex-col gap-1">
								<span className="text-gradient-gold font-display text-3xl font-semibold italic">
									Cynthia
								</span>
								<span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-soft">
									Fondatrice
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Filaments } from "@/components/ui/Filaments";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
	return (
		<section className="relative w-full bg-ivory pt-20 pb-8 sm:pt-24 sm:pb-10 lg:py-12">
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

			<Filaments intensity="subtle" />
			<Filaments intensity="subtle" className="rotate-45 scale-110" />

			<div className="container-luxe relative z-20 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-0">
				<div className="order-2 w-full lg:order-1 lg:w-[40%] lg:pr-8">
					<Reveal direction="down" delay={0.1}>
						<span className="eyebrow mb-3 block !text-[9px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[10px] md:!text-[11px]">
							À propos de Cynthia Cosmétique
						</span>
					</Reveal>

					<Reveal delay={0.2}>
						<h1 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl md:text-[2rem] lg:text-[2.25rem] lg:max-w-[300px]">
							Bien plus qu&apos;un institut,{" "}
							<span className="text-gradient-gold font-normal italic">
								une philosophie
							</span>{" "}
							<span className="text-gradient-gold font-normal italic">
								de la beauté.
							</span>
						</h1>
					</Reveal>

					<Reveal delay={0.3}>
						<p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-ink/80 sm:text-base">
							Cynthia Cosmétique est née d&apos;une conviction profonde : la
							beauté véritable commence par le respect de la peau, de la
							personne et de son histoire.
						</p>
					</Reveal>

					<Reveal delay={0.4} direction="up">
						<div className="mt-4">
							<Button
								href="#histoire"
								variant="outline-gold"
								size="md"
								className="group border-gold-deep/40"
							>
								Notre Histoire
								<ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</Reveal>
				</div>

				<div className="order-3 mt-6 w-full lg:order-3 lg:mt-0 lg:w-[25%] lg:pl-4">
					<Reveal delay={0.5} direction="left">
						<div className="relative flex flex-col">
							<span
								className="mb-1 block font-display text-5xl leading-none text-gold-deep/25"
								aria-hidden
							>
								&#8220;
							</span>
							<p className="font-display text-sm leading-relaxed text-royal sm:text-base lg:text-lg">
								Chaque peau est unique. Notre mission est d&apos;en révéler
								l&apos;éclat naturel.
							</p>
							<div className="mt-4 flex flex-col gap-0.5">
								<span className="text-gradient-gold font-display text-xl font-semibold italic">
									Cynthia
								</span>
								<span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-soft">
									Fondatrice
								</span>
							</div>
						</div>
					</Reveal>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-center lg:justify-end lg:pr-[12%]">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
					className="relative h-[250px] w-[180px] sm:h-[300px] sm:w-[220px] md:h-[350px] md:w-[260px] lg:h-[420px] lg:w-[300px]"
				>
					<Image
						src="/assets/images/profil-cynthia.png"
						alt="Cynthia — Fondatrice de Cynthia Cosmétique"
						fill
						priority
						sizes="300px"
						className="object-contain object-bottom"
					/>
				</motion.div>
			</div>
		</section>
	);
}

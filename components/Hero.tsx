"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Filaments } from "@/components/ui/Filaments";
import { Stars } from "@/components/ui/Stars";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/site";

const avatars = [
	{ src: "/assets/images/person1.jpg", alt: "Cliente satisfaisante" },
	{ src: "/assets/images/person02.jpg", alt: "Cliente satisfaite" },
	{ src: "/assets/images/person3.jpg", alt: "Cliente satisfaite" },
];

export function Hero() {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);
	const haloScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

	return (
		<section
			id="accueil"
			ref={ref}
			className="relative overflow-hidden bg-ivory lg:min-h-[500px] lg:h-[90vh]"
		>
			<div
				aria-hidden
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(1100px 600px at 78% 18%, #fff7d6 0%, rgba(247,243,234,0) 60%), radial-gradient(900px 700px at 8% 90%, #e8eef9 0%, rgba(250,250,248,0) 55%)",
				}}
			/>
			<Filaments intensity="subtle" />

			<div className="container-luxe relative z-10 pb-6 pt-24 md:pt-20 lg:flex lg:h-full lg:flex-col">
				<div className="grid grid-cols-[1fr_1.1fr] items-start gap-3 md:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 xl:gap-10">
					{/* Colonne texte */}
					<div className="flex flex-col gap-2 md:gap-4 lg:self-start">
						<motion.span
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="eyebrow hidden items-center gap-2.5 sm:inline-flex"
						>
							<span className="h-px w-8 bg-gold-deep/60" aria-hidden />
							L&apos;expertise au service de votre peau
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.08,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="font-display text-xl font-bold leading-[1.08] tracking-tight text-royal sm:text-2xl md:text-4xl lg:text-6xl xl:text-[4rem]"
						>
							Révélez la meilleure version de votre{" "}
							<span className="text-gradient-gold">peau.</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="max-w-md text-xs leading-relaxed text-slate-ink/80 sm:text-sm md:text-base lg:text-lg"
						>
							Soins experts, microneedling, beauté du regard et accompagnement
							personnalisé à Douala.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.44 }}
							className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3"
						>
							<div className="flex -space-x-2 sm:-space-x-3">
								{avatars.slice(0, 1).map((a) => (
									<span
										key={a.src}
										className="relative inline-block h-6 w-6 overflow-hidden rounded-full ring-2 ring-ivory shadow-soft sm:h-9 sm:w-9 lg:h-11 lg:w-11"
									>
										<Image
											src={a.src}
											alt={a.alt}
											fill
											sizes="24px"
											className="object-cover"
										/>
									</span>
								))}
								{avatars.slice(1).map((a) => (
									<span
										key={a.src}
										className="relative hidden overflow-hidden rounded-full ring-2 ring-ivory shadow-soft sm:inline-block h-9 w-9 lg:h-11 lg:w-11"
									>
										<Image
											src={a.src}
											alt={a.alt}
											fill
											sizes="36px"
											className="object-cover"
										/>
									</span>
								))}
							</div>
							<div className="flex flex-col gap-0.5">
								<span className="font-display text-[10px] font-semibold text-royal sm:text-sm lg:text-lg">
									+500 clientes satisfaites
								</span>
								<Stars
									className="scale-[0.4] origin-left sm:scale-75 lg:scale-100"
									size={10}
								/>
							</div>
						</motion.div>
					</div>

					{/* Colonne portrait */}
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.9,
							delay: 0.15,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-sm lg:translate-x-6"
					>
						<motion.div
							style={{ scale: haloScale }}
							className="absolute -inset-4 -z-10 rounded-[2rem] blur-xl sm:-inset-6 sm:rounded-[2.5rem] sm:blur-2xl"
							aria-hidden
						>
							<div className="h-full w-full rounded-[2.5rem] bg-gradient-to-tr from-gold/30 via-gold-soft/50 to-royal-soft/20" />
						</motion.div>

						<div
							aria-hidden
							className="absolute -inset-2 rounded-full border border-gold/15 opacity-60 sm:-inset-3 sm:border-2"
						/>

						<motion.div
							style={{ y: portraitY }}
							className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.2rem] shadow-lift ring-1 ring-white/70 sm:aspect-[4/5] sm:rounded-[1.8rem] lg:rounded-[2rem] lg:ring-2"
						>
							<Image
								src="/assets/visage-hero.png"
								alt="Femme recevant un soin du visage expert chez Cynthia Cosmétique"
								fill
								priority
								sizes="(min-width: 1024px) 480px, (min-width: 640px) 300px, 180px"
								className="object-cover"
							/>
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0"
								style={{
									background:
										"linear-gradient(to top, rgba(247,243,234,0.25), transparent 50%)",
								}}
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className="absolute -bottom-3 -left-1 rounded-lg bg-ivory/95 p-1.5 shadow-card backdrop-blur ring-1 ring-slate-line/50 sm:-bottom-4 sm:-left-2 sm:rounded-xl sm:p-2.5 lg:-bottom-5 lg:-left-5 lg:rounded-2xl lg:p-4"
						>
							<div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3">
								<span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/30 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
									<Image
										src="/assets/images/soin-expert.jpg"
										alt="Soin expert"
										fill
										sizes="24px"
										className="object-cover"
									/>
								</span>
								<div className="leading-tight">
									<p className="font-display text-[10px] font-semibold text-royal sm:text-sm lg:text-base">
										Soins experts
									</p>
									<p className="text-[8px] text-slate-soft sm:text-[11px] lg:text-xs">
										à Douala
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* CTA centré sous les deux colonnes */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.32 }}
					className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start lg:-mt-24"
				>
					<Button
						href={waLink()}
						external
						size="lg"
						className="animate-pulse-glow px-10 py-5 text-sm font-bold shadow-gold hover:shadow-lift"
						icon={<WhatsAppIcon className="h-4 w-4" />}
					>
						Réserver maintenant
					</Button>
					<Button
						href="/prestation"
						variant="outline-gold"
						size="lg"
						className="hidden sm:inline-flex"
					>
						Découvrir nos soins
					</Button>
				</motion.div>
			</div>

			<motion.a
				href="#soins-visage"
				aria-label="Faire défiler vers le bas"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.6 }}
				className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold-deep lg:flex lg:bottom-16 lg:right-6 lg:left-auto lg:translate-x-0"
			>
				<span className="animate-pulse-glow text-[0.6rem] font-semibold uppercase tracking-[0.2em] lg:text-[0.65rem]">
					Découvrir
				</span>
				<span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-gold/50 p-1 shadow-gold lg:h-10 lg:w-6">
					<motion.span
						animate={{
							y: [0, 10, 0],
							opacity: [1, 0.2, 1],
							scale: [1, 0.7, 1],
						}}
						transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
						className="h-1.5 w-1.5 rounded-full bg-gold"
					/>
				</span>
				<ChevronDown size={12} className="animate-pulse-glow lg:size-[14px]" />
			</motion.a>
		</section>
	);
}

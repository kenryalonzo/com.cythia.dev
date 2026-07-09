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

/* Social proof avatars (placeholders — single person asset reused with tints).
   Hypothèse : avatars clients non fournis, on utilise les assets existants. */
const avatars = [
	{ src: "/assets/images/person1.jpg", alt: "Cliente satisfaisante" },
	{ src: "/assets/images/person02.jpg", alt: "Cliente satisfaite" },
	{ src: "/assets/images/person3.jpg", alt: "Cliente satisfaite" },
];

export function Hero() {
	const ref = useRef<HTMLElement>(null);
	// Léger parallax sur le portrait au scroll
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
			className="relative overflow-hidden bg-ivory h-dvh min-h-dvh"
		>
			{/* Décor — dégradé crème radial + filaments dorés subtils */}
			<div
				aria-hidden
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(1100px 600px at 78% 18%, #fff7d6 0%, rgba(247,243,234,0) 60%), radial-gradient(900px 700px at 8% 90%, #e8eef9 0%, rgba(250,250,248,0) 55%)",
				}}
			/>
			<Filaments intensity="subtle" />

			<div className="container-luxe relative z-10 grid h-full grid-cols-1 items-start gap-4 py-8 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 xl:gap-10">
				{/* ---------- Colonne texte (gauche) ---------- */}
				<div className="max-w-xl">
					<motion.span
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="eyebrow inline-flex items-center gap-2.5"
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
						className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-royal sm:text-5xl lg:text-6xl xl:text-[4rem]"
					>
						Révélez la meilleure version de votre{" "}
						<span className="text-gradient-gold">peau.</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="mt-4 max-w-md text-base leading-relaxed text-slate-ink/80 sm:text-lg"
					>
						Soins experts, microneedling, beauté du regard et accompagnement
						personnalisé à Douala.
					</motion.p>

					{/* Boutons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.32 }}
						className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
					>
						<Button
							href={waLink()}
							external
							size="lg"
							className="animate-pulse-glow"
							icon={<WhatsAppIcon className="h-4 w-4" />}
						>
							Réserver maintenant
						</Button>
						<Button href="#soins-phares" variant="outline-gold" size="lg">
							Découvrir nos soins
						</Button>
					</motion.div>

					{/* Preuve sociale */}
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.44 }}
						className="mt-4 flex flex-wrap items-center gap-3"
					>
						<div className="flex -space-x-3">
							{avatars.map((a) => (
								<span
									key={a.src}
									className="relative inline-block h-11 w-11 overflow-hidden rounded-full ring-2 ring-ivory shadow-soft"
								>
									<Image
										src={a.src}
										alt={a.alt}
										fill
										sizes="44px"
										className="object-cover"
									/>
								</span>
							))}
						</div>
						<div className="flex flex-col gap-1">
							<span className="font-display text-lg font-semibold text-royal">
								+500 clientes satisfaites
							</span>
							<Stars />
						</div>
					</motion.div>
				</div>

				{/* ---------- Colonne portrait (droite) ---------- */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
					className="relative mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-sm"
				>
					<motion.div
						style={{ scale: haloScale }}
						className="absolute -inset-4 -z-10 rounded-[2rem] blur-xl lg:-inset-6 lg:rounded-[2.5rem] lg:blur-2xl"
						aria-hidden
					>
						<div className="h-full w-full rounded-[2.5rem] bg-gradient-to-tr from-gold/25 via-gold-soft/40 to-royal-soft/30" />
					</motion.div>

					<motion.div
						style={{ y: portraitY }}
						className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] shadow-lift ring-1 ring-white/60 sm:aspect-[4/5] sm:rounded-[2rem]"
					>
						<Image
							src="/assets/visage-hero.png"
							alt="Femme recevant un soin du visage expert chez Cynthia Cosmétique"
							fill
							priority
							sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 90vw"
							className="object-cover"
						/>
						{/* voile ivoire doux pour intégration (pas de sombre) */}
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(247,243,234,0.18), transparent 40%)",
							}}
						/>
					</motion.div>

					{/* Badge flottant — rating */}
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="absolute -bottom-4 -left-4 hidden rounded-xl bg-ivory/95 p-3 shadow-card backdrop-blur ring-1 ring-slate-line/50 sm:block lg:-bottom-5 lg:-left-5 lg:rounded-2xl lg:p-4"
					>
						<div className="flex items-center gap-3">
							<span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/30">
								<Image
									src="/assets/images/soin-expert.jpg"
									alt="Soin expert"
									fill
									sizes="40px"
									className="object-cover"
								/>
							</span>
							<div className="leading-tight">
								<p className="font-display text-base font-semibold text-royal">
									Soins experts
								</p>
								<p className="text-xs text-slate-soft">à Douala</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* ---------- Indicateur de scroll (bas droite) ---------- */}
			<motion.a
				href="#soins-visage"
				aria-label="Faire défiler vers le bas"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.6 }}
				className="absolute bottom-16 right-6 z-10 hidden flex-col items-center gap-2 text-gold-deep md:flex"
			>
				<span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
					Scroll
				</span>
				<span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-gold-deep/40 p-1">
					<motion.span
						animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
						transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
						className="h-1.5 w-1.5 rounded-full bg-gold-deep"
					/>
				</span>
				<ChevronDown size={14} className="animate-pulse" />
			</motion.a>
		</section>
	);
}

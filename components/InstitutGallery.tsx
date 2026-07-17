"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const images = [
	{
		src: "/assets/images/institut-1.png",
		alt: "Entrée de l'institut Cynthia Cosmétique",
	},
	{ src: "/assets/images/institut-2.png", alt: "Salle de soin" },
	{ src: "/assets/images/institut-3.png", alt: "Espace détente" },
	{ src: "/assets/images/institut-4.png", alt: "Coin maquillage" },
];

export function InstitutGallery() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-ivory py-10 sm:py-12 md:py-14 lg:py-16"
		>
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/left-image-effect.png"
					alt=""
					fill
					sizes="100vw"
					className="object-cover opacity-40 lg:opacity-60"
					aria-hidden
				/>
			</div>

			<div className="container-luxe relative z-10">
				<div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
					<div className="flex w-full flex-col lg:w-[38%]">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-3 block !text-[9px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[10px] md:!text-[11px]">
								Notre institut
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="font-display text-xl font-bold leading-[1.1] tracking-tight text-royal sm:text-2xl md:text-[1.75rem] lg:text-[2rem] lg:max-w-[300px]">
								Un lieu pensé pour votre{" "}
								<span className="text-gradient-gold font-normal italic">
									bien-être
								</span>{" "}
								et votre confiance.
							</h2>
						</Reveal>

						<Reveal delay={0.3}>
							<p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-ink/70 sm:text-base">
								Un espace élégant, chaleureux et apaisant où chaque détail est
								conçu pour vous offrir une expérience unique.
							</p>
						</Reveal>

						<Reveal delay={0.4} direction="up">
							<div className="mt-5 sm:mt-6">
								<Link
									href="/a-propos"
									className="animate-pulse-glow inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-royal shadow-gold transition-all hover:bg-gold-warm hover:shadow-lift sm:px-8 sm:text-xs"
								>
									Découvrir notre espace
								</Link>
							</div>
						</Reveal>
					</div>

					<div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 md:gap-4 lg:w-[62%]">
						{images.map((img, i) => (
							<Reveal key={img.src} delay={0.2 + i * 0.1} direction="right">
								<motion.div
									whileHover={{ y: -4, scale: 1.02 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
									className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-card ring-1 ring-slate-line/10 sm:rounded-2xl md:rounded-3xl"
								>
									<Image
										src={img.src}
										alt={img.alt}
										fill
										sizes="(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 45vw"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
									/>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
								</motion.div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</Reveal>
	);
}

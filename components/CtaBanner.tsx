"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/site";

export function CtaBanner() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-cream py-8 sm:py-10"
		>
			{/* Background silk texture */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/left-image-effect.webp"
					alt=""
					fill
					sizes="100vw"
					className="object-cover opacity-40 lg:opacity-60"
					aria-hidden
				/>
			</div>
			{/* Gold flowing lines */}
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
				viewBox="0 0 1200 200"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="gold-cta" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
						<stop offset="50%" stopColor="#fdcf02" stopOpacity="0.4" />
						<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
					</linearGradient>
				</defs>
				<motion.path
					d="M-50 100 C 200 50, 400 150, 600 80 S 900 120, 1250 60"
					stroke="url(#gold-cta)"
					strokeWidth="1"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2.5, ease: "easeInOut" }}
				/>
			</svg>
			{/* Lotus decoration */}
			<motion.div
				animate={{ y: [0, -6, 0] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="pointer-events-none absolute right-0 top-0 h-full w-[30%] opacity-50"
				aria-hidden
			>
				<Image
					src="/assets/images/lotus-cote-droit.webp"
					alt=""
					fill
					sizes="30vw"
					className="object-contain object-right"
				/>
			</motion.div>

			<div className="container-luxe relative z-10 text-center">
				<Reveal>
					<h2 className="mx-auto max-w-lg font-display text-xl font-bold leading-[1.1] tracking-tight text-royal sm:text-2xl md:text-3xl">
						Prête à commencer
						<br />
						votre{" "}
						<span className="text-gradient-gold font-normal italic">
							transformation
						</span>{" "}
						?
					</h2>
				</Reveal>

				<Reveal delay={0.1}>
					<p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-ink/70 sm:text-sm">
						Prenez rendez-vous dès maintenant et laissez-nous prendre soin de
						vous.
					</p>
				</Reveal>

				<Reveal delay={0.2} direction="up">
					<div className="mt-4">
						<motion.a
							href={waLink()}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: "spring", stiffness: 400, damping: 18 }}
							className="animate-pulse-glow inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.06em] text-royal shadow-gold transition-colors hover:bg-gold-warm sm:px-7 sm:text-xs"
						>
							Réserver via WhatsApp
							<WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
						</motion.a>
					</div>
				</Reveal>
			</div>
		</Reveal>
	);
}

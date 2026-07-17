"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/site";

export function CtaBanner() {
	return (
		<section className="relative overflow-hidden bg-cream py-10 sm:py-12">
			{/* Background silk texture */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/left-image-effect.png"
					alt=""
					fill
					priority
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
					src="/assets/images/lotus-cote-droit.png"
					alt=""
					fill
					sizes="30vw"
					className="object-contain object-right"
				/>
			</motion.div>

			<div className="container-luxe relative z-10 text-center">
				<Reveal>
					<h2 className="mx-auto max-w-lg font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl md:text-4xl">
						Prête à commencer votre{" "}
						<span className="text-gradient-gold font-normal italic">
							transformation
						</span>{" "}
						?
					</h2>
				</Reveal>

				<Reveal delay={0.1}>
					<p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-ink/70 sm:text-base">
						Prenez rendez-vous dès maintenant et laissez-nous prendre soin de
						vous.
					</p>
				</Reveal>

				<Reveal delay={0.2} direction="up">
					<div className="mt-6">
						<motion.a
							href={waLink()}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: "spring", stiffness: 400, damping: 18 }}
							className="animate-pulse-glow inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.06em] text-royal shadow-gold transition-colors hover:bg-gold-warm sm:px-8 sm:text-sm"
						>
							Réserver via WhatsApp
							<WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
						</motion.a>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

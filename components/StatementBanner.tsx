"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function StatementBanner() {
	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-cream py-10 md:py-14"
		>
			{/* Déco gold — lignes fines animées */}
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				{/* Ligne gauche */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.4, ease }}
					className="absolute left-0 top-1/2 h-px w-1/3 origin-left bg-gradient-to-r from-transparent via-gold-deep/40 to-gold-deep/20"
				/>
				{/* Ligne droite */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.4, ease, delay: 0.2 }}
					className="absolute right-0 top-1/2 h-px w-1/3 origin-right bg-gradient-to-l from-transparent via-gold-deep/40 to-gold-deep/20"
				/>
				{/* Cercle doré gauche */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-gold/20"
				/>
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
					className="absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-gold-deep/25"
				/>
				{/* Cercle doré droite */}
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
					className="absolute -right-14 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-gold/20"
				/>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
					className="absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-gold-deep/25"
				/>
				{/* Petits losanges dorés */}
				{[
					{ left: "15%", top: "30%", size: 8, delay: 0 },
					{ left: "85%", top: "25%", size: 6, delay: 1.5 },
					{ left: "20%", top: "70%", size: 7, delay: 0.8 },
					{ left: "80%", top: "75%", size: 8, delay: 2 },
				].map((d) => (
					<motion.div
						key={`${d.left}-${d.top}`}
						animate={{ rotate: 45, opacity: [0.2, 0.6, 0.2] }}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: d.delay,
							ease: "easeInOut",
						}}
						className="absolute bg-gold-deep/30"
						style={{
							left: d.left,
							top: d.top,
							width: d.size,
							height: d.size,
							transform: "rotate(45deg)",
						}}
					/>
				))}
			</div>

			{/* Contenu */}
			<div className="container-luxe relative z-10 flex flex-col items-center gap-4 text-center">
				{/* Ornement lotus + anneaux dorés */}
				<div className="relative flex items-center justify-center">
					{/* Anneaux */}
					<motion.div
						animate={{ rotate: 360 }}
						transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
						className="absolute h-20 w-20 rounded-full border border-gold/30"
					/>
					<motion.div
						animate={{ rotate: -360 }}
						transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
						className="absolute h-28 w-28 rounded-full border border-gold-deep/20"
					/>
					{/* Lotus central */}
					<motion.div
						animate={{ y: [0, -4, 0], scale: [1, 1.03, 1] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft ring-2 ring-gold/40 shadow-gold"
					>
						<Image
							src="/assets/images/lotus-middle.png"
							alt=""
							width={36}
							height={36}
							className="object-contain"
							priority
						/>
					</motion.div>
				</div>

				{/* Texte */}
				<Reveal direction="up">
					<h2 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-royal sm:text-3xl">
						<span className="text-gradient-gold">Votre beauté</span>, notre{" "}
						<span className="text-gradient-gold">passion</span>.
					</h2>
				</Reveal>

				<Reveal direction="up" delay={0.1}>
					<p className="max-w-md text-sm leading-relaxed text-slate-ink/60">
						Chaque soin est une expérience unique, pensée pour révéler
						<br className="hidden sm:block" />
						l'éclat naturel qui vous est propre.
					</p>
				</Reveal>
			</div>
		</Reveal>
	);
}

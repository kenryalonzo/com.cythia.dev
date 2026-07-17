"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory">
			{/* Image de fond — clouds */}
			<div className="pointer-events-none absolute inset-0">
				<img
					src="/assets/images/image-404.webp"
					alt=""
					aria-hidden
					className="h-full w-full object-cover opacity-80 contrast-125 saturate-50"
				/>
				{/* Overlay pour contraste */}
				<div className="absolute inset-0 bg-ivory/20" />
				<div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/30 to-ivory/10" />
			</div>

			{/* 404 géant — plus visible, doré intense */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<motion.span
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
					className="select-none font-display text-[200px] leading-none font-bold text-gold/40 sm:text-[300px] md:text-[380px]"
					style={{ WebkitTextStroke: "2px rgba(253,207,2,0.15)" }}
				>
					404
				</motion.span>
			</div>

			{/* Glow doré derrière le 404 */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 60% 40% at 50% 50%, rgba(253,207,2,0.12) 0%, transparent 60%)",
				}}
			/>

			{/* Contenu */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
				className="relative z-10 flex flex-col items-center px-6 text-center"
			>
				<h1 className="font-display text-4xl font-bold tracking-tight text-royal sm:text-5xl">
					Page introuvable
				</h1>
				<p className="mt-4 max-w-md font-sans text-base leading-relaxed text-slate-ink">
					La page que vous recherchez n'existe pas ou a été déplacée.
					Revenons à l'accueil pour découvrir nos soins.
				</p>

				{/* Bouton avec animation agressive et répétitive */}
				<motion.div
					className="mt-10"
					animate={{
						scale: [1, 1.06, 1, 1.06, 1],
						y: [0, -4, 0, -4, 0],
					}}
					transition={{
						duration: 1.6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Link
						href="/"
						className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-royal shadow-gold transition-colors hover:bg-gold-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
					>
						{/* Glow pulsant autour du bouton */}
						<motion.span
							aria-hidden
							className="absolute -inset-1 rounded-full"
							animate={{
								boxShadow: [
									"0 0 0 0 rgba(253,207,2,0.4)",
									"0 0 0 8px rgba(253,207,2,0)",
									"0 0 0 0 rgba(253,207,2,0.4)",
									"0 0 0 8px rgba(253,207,2,0)",
									"0 0 0 0 rgba(253,207,2,0.4)",
								],
							}}
							transition={{
								duration: 1.6,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<span className="relative z-10">Retour à l'accueil</span>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
}

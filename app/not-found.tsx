"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory">
			{/* Image de fond — clouds */}
			<div className="pointer-events-none absolute inset-0">
				<img
					src="/assets/images/image-404.png"
					alt=""
					aria-hidden
					className="h-full w-full object-cover opacity-60"
				/>
				{/* Overlay dégradé doré en bas */}
				<div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/40 to-transparent" />
			</div>

			{/* 404 géant — effet flouté / brume dorée */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<motion.span
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
					className="select-none font-display text-[220px] leading-none font-bold tracking-tight text-gold/20 blur-[2px] sm:text-[320px] md:text-[400px]"
					style={{ WebkitTextStroke: "1px rgba(253,207,2,0.08)" }}
				>
					404
				</motion.span>
			</div>

			{/* Couche brume dorée supplémentaire */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-30"
				style={{
					background:
						"radial-gradient(ellipse 80% 50% at 50% 60%, rgba(253,207,2,0.15) 0%, transparent 70%)",
				}}
			/>

			{/* Contenu */}
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
				className="relative z-10 flex flex-col items-center px-6 text-center"
			>
				<h1 className="font-display text-4xl font-bold tracking-tight text-royal sm:text-5xl">
					Page introuvable
				</h1>
				<p className="mt-4 max-w-md font-sans text-base leading-relaxed text-slate-ink/70">
					La page que vous recherchez n'existe pas ou a été déplacée.
					Revenons à l'accueil pour découvrir nos soins.
				</p>
				<div className="mt-8">
					<Button href="/" variant="gold" size="lg">
						Retour à l'accueil
					</Button>
				</div>
			</motion.div>
		</div>
	);
}

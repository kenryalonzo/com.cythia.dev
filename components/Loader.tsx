"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Loader({ onComplete }: { onComplete: () => void }) {
	const [phase, setPhase] = useState<"enter" | "exit">("enter");

	useEffect(() => {
		const enter = setTimeout(() => setPhase("exit"), 2000);
		const done = setTimeout(() => onComplete(), 2600);
		return () => {
			clearTimeout(enter);
			clearTimeout(done);
		};
	}, [onComplete]);

	return (
		<AnimatePresence>
			{phase === "enter" || phase === "exit" ? (
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ivory"
				>
					{/* Anneau doré extérieur */}
					<motion.div
						initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
						animate={
							phase === "exit"
								? { scale: 1.4, opacity: 0, rotate: 30 }
								: { scale: 1, opacity: 1, rotate: 0 }
						}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="relative"
					>
						{/* Glow arrière */}
						<div
							aria-hidden
							className="absolute -inset-8 rounded-full opacity-30 blur-2xl"
							style={{
								background:
									"radial-gradient(circle, rgba(253,207,2,0.4) 0%, transparent 70%)",
							}}
						/>
						{/* Cercle doré */}
						<div
							aria-hidden
							className="absolute -inset-3 rounded-full border-2 border-gold/20"
						/>
						{/* Logo */}
						<div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-gold/40 sm:h-24 sm:w-24">
							<Image
								src="/assets/logo-cynthia.png"
								alt={site.brand}
								fill
								priority
								sizes="96px"
								className="object-cover"
							/>
						</div>
					</motion.div>

					{/* Marque */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={
							phase === "exit" ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }
						}
						transition={{
							duration: 0.7,
							delay: 0.3,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="mt-6 text-center"
					>
						<h1 className="font-display text-2xl font-bold tracking-tight text-royal sm:text-3xl">
							{site.brand}
						</h1>
						{/* Ligne dorée */}
						<motion.div
							initial={{ scaleX: 0 }}
							animate={phase === "exit" ? { scaleX: 0 } : { scaleX: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="mx-auto mt-3 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
						/>
						<motion.p
							initial={{ opacity: 0 }}
							animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
							transition={{
								duration: 0.6,
								delay: 0.7,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="mt-3 font-sans text-xs tracking-[0.15em] text-gold-deep/70 uppercase sm:text-sm"
						>
							{site.baseline}
						</motion.p>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}

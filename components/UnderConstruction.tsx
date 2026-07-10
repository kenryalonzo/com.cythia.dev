"use client";

import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

type UnderConstructionProps = {
	title: string;
	subtitle?: string;
};

export function UnderConstruction({ title, subtitle }: UnderConstructionProps) {
	return (
		<section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ivory py-20">
			{/* Décor doré */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 overflow-hidden"
			>
				<div
					className="absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-[0.04] blur-3xl"
					style={{
						background: "radial-gradient(circle, #fdcf02 0%, transparent 70%)",
					}}
				/>
				<div
					className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-[0.03] blur-3xl"
					style={{
						background: "radial-gradient(circle, #093485 0%, transparent 70%)",
					}}
				/>

				{/* Lotus décoratif */}
				<motion.div
					animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
					className="absolute -bottom-20 right-0 h-[200px] w-[200px] translate-x-1/4 opacity-[0.06]"
				>
					<Image
						src="/assets/images/floor-dore-image.png"
						alt=""
						fill
						sizes="200px"
						className="object-contain"
					/>
				</motion.div>
			</div>

			<div className="container-luxe relative">
				<div className="mx-auto flex max-w-lg flex-col items-center text-center">
					{/* Icône */}
					<Reveal direction="none">
						<motion.div
							animate={{ rotate: [0, -8, 0, 8, 0] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft ring-1 ring-gold/20"
						>
							<Construction size={28} className="text-gold-deep" />
						</motion.div>
					</Reveal>

					{/* Titre */}
					<Reveal delay={0.1}>
						<h1 className="mt-6 font-display text-3xl font-bold leading-[1.15] tracking-tight text-royal sm:text-4xl">
							{title}
						</h1>
					</Reveal>

					{/* Séparateur doré */}
					<Reveal delay={0.15}>
						<div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent" />
					</Reveal>

					{/* Message */}
					<Reveal delay={0.2}>
						<p className="mt-6 font-sans text-base leading-relaxed text-slate-ink/70">
							{subtitle ||
								"Cette page est en cours de développement. Nous travaillons activement à créer une expérience unique pour vous."}
						</p>
					</Reveal>

					{/* CTAs */}
					<Reveal
						delay={0.3}
						className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
					>
						<Button
							href={waLink()}
							external
							variant="gold"
							size="lg"
							className="animate-pulse-glow shadow-gold"
						>
							Nous contacter
						</Button>
						<Button href="/" variant="outline-gold" size="lg">
							Retour à l'accueil
						</Button>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

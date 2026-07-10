"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
	name: string;
	quote: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		name: "Sandra M.",
		quote:
			"Ma peau n'a jamais été aussi belle ! Le microblading a vraiment changé ma vie.",
		image: "/assets/images/testimonie1.jpg",
	},
	{
		name: "Lucie B.",
		quote:
			"Accueil chaleureux, soins professionnels et résultats au-delà de mes attentes.",
		image: "/assets/images/testimonie2.jpg",
	},
	{
		name: "Aïcha D.",
		quote: "Le microblading est parfait, très naturel. Je recommande à 100% !",
		image: "/assets/images/testimonie3.jpg",
	},
	{
		name: "Paul K.",
		quote:
			"Un soin du visage impeccable. Ma peau est revitalisée, je recommande vivement.",
		image: "/assets/images/testimonie4.jpg",
	},
	{
		name: "Emmanuel N.",
		quote:
			"Très satisfait du microneedling. Résultats visibles dès la première séance.",
		image: "/assets/images/testimonie5.jpg",
	},
	{
		name: "Fatou K.",
		quote:
			"Un vrai moment de détente. Ma peau est ultra douce après chaque soin.",
		image: "/assets/images/testimonie6.jpg",
	},
];

export function Testimonials() {
	const [active, setActive] = useState(2);

	const prev = useCallback(
		() => setActive((a) => (a > 0 ? a - 1 : testimonials.length - 1)),
		[],
	);
	const next = useCallback(
		() => setActive((a) => (a < testimonials.length - 1 ? a + 1 : 0)),
		[],
	);

	// Auto-play
	useEffect(() => {
		const interval = setInterval(next, 4000);
		return () => clearInterval(interval);
	}, [next]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [next, prev]);

	const getCardStyle = (index: number) => {
		const diff = index - active;
		const absDiff = Math.abs(diff);

		if (absDiff === 0) {
			return { scale: 1, x: 0, z: 30, opacity: 1, blur: 0 };
		}
		if (absDiff === 1) {
			return {
				scale: 0.82,
				x: diff > 0 ? 140 : -140,
				z: 20,
				opacity: 0.7,
				blur: 1,
			};
		}
		if (absDiff === 2) {
			return {
				scale: 0.65,
				x: diff > 0 ? 240 : -240,
				z: 10,
				opacity: 0.35,
				blur: 2,
			};
		}
		return { scale: 0.5, x: diff > 0 ? 300 : -300, z: 0, opacity: 0, blur: 3 };
	};

	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-ivory py-8 md:py-10"
		>
			<div className="container-luxe">
				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr]">
					{/* Colonne gauche — titre */}
					<Reveal direction="left">
						<span className="eyebrow inline-flex items-center gap-2">
							<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
							Elles nous font confiance
						</span>
						<h2 className="mt-3 font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl">
							Leurs <span className="text-gradient-gold">transformations</span>
							<br />
							parlent pour nous.
						</h2>
					</Reveal>

					{/* Colonne droite — carrousel + flèches */}
					<Reveal direction="right">
						{/* Carrousel coverflow */}
						<div className="relative flex h-[240px] items-center justify-center overflow-hidden">
							{testimonials.map((t, i) => {
								const style = getCardStyle(i);
								return (
									<motion.article
										key={t.name}
										animate={{
											x: style.x,
											scale: style.scale,
											zIndex: style.z,
											opacity: style.opacity,
											filter: `blur(${style.blur}px)`,
										}}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 30,
										}}
										onClick={() => setActive(i)}
										className="absolute flex w-[220px] cursor-pointer flex-col items-center rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-line/15"
										style={{ transformOrigin: "center center" }}
									>
										<span className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-200 ring-3 ring-white shadow-soft">
											<Image
												src={t.image}
												alt={t.name}
												fill
												sizes="80px"
												className="object-cover"
											/>
										</span>
										<span className="mt-3 text-center font-display text-sm font-semibold text-royal">
											{t.name}
										</span>
										<span className="mt-2 inline-flex items-center gap-1 rounded-full bg-royal-soft/60 px-3 py-1 text-[10px] font-medium text-royal">
											<Star size={10} className="fill-gold text-gold" />
											Customer
										</span>
										<p className="mt-3 text-center text-xs leading-relaxed text-slate-ink/60 line-clamp-2">
											« {t.quote} »
										</p>
									</motion.article>
								);
							})}
						</div>

						{/* Flèches sous le carrousel */}
						<div className="flex justify-center gap-2">
							<button
								type="button"
								onClick={prev}
								aria-label="Précédent"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-line/50 text-royal transition-all duration-300 hover:border-gold hover:bg-gold-soft"
							>
								<ChevronLeft size={16} />
							</button>
							<button
								type="button"
								onClick={next}
								aria-label="Suivant"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-line/50 text-royal transition-all duration-300 hover:border-gold hover:bg-gold-soft"
							>
								<ChevronRight size={16} />
							</button>
						</div>
					</Reveal>
				</div>
			</div>
		</Reveal>
	);
}

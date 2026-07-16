"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

type Testimonial = {
	name: string;
	quote: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		name: "Marie L.",
		quote:
			"Ma peau a complètement changé ! Les soins sont incroyables, ma peau n'a jamais été aussi lumineuse et douce. Merci Cynthia !",
		image: "/assets/images/testimonie1.jpg",
	},
	{
		name: "Aïcha D.",
		quote:
			"Professionnelle, accueil chaleureux et résultats visibles dès les premières séances. Je recommande les yeux fermés !",
		image: "/assets/images/testimonie3.jpg",
	},
];

type FAQ = {
	question: string;
	answer: string;
};

const faqs: FAQ[] = [
	{
		question: "Comment choisir le soin adapté à ma peau ?",
		answer:
			"Lors de votre première visite, nous réalisons un diagnostic complet de votre peau pour vous recommander les soins les plus adaptés à vos besoins.",
	},
	{
		question: "Les soins sont-ils adaptés aux peaux sensibles ?",
		answer:
			"Absolument. Nous utilisons des produits doux et nos protocoles sont ajustés pour respecter la sensibilité de chaque peau.",
	},
	{
		question: "Combien de temps durent les résultats ?",
		answer:
			"Les résultats varient selon le soin et le type de peau. En général, les premiers changements sont visibles dès la première séance, avec des effets durables sur le long terme.",
	},
	{
		question: "Faut-il prendre rendez-vous à l'avance ?",
		answer:
			"Nous vous recommandons de réserver à l'avance pour garantir votre créneau. Vous pouvez nous contacter directement via WhatsApp.",
	},
];

function RatingStars() {
	return (
		<div className="flex gap-0.5">
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={`star-${i}`}
					size={12}
					className="fill-gold text-gold"
				/>
			))}
		</div>
	);
}

export function PrestationTestimonialsCTA() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<Reveal as="section" variant="scroll" className="overflow-hidden">
			{/* ── Top: Témoignages + CTA ── */}
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{/* ── Témoignages (dark navy) ── */}
				<Reveal
					as="div"
					variant="scroll"
					className="relative bg-[#0a1d5a] px-5 py-10 md:px-10 md:py-14"
				>
					<div className="mx-auto max-w-[480px]">
						<span className="eyebrow inline-flex items-center gap-2 text-gold-deep/80">
							Elles nous font confiance
						</span>

						<h2 className="mt-2 font-display text-2xl font-bold leading-[1.15] tracking-tight text-ivory sm:text-3xl">
							Leurs{" "}
							<span className="text-gradient-gold">avis</span>, notre plus belle
							récompense.
						</h2>

						<div className="mt-6 flex gap-3">
							{testimonials.map((t, i) => (
								<motion.div
									key={t.name}
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15, duration: 0.5, ease }}
									className="flex-1 rounded-xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15"
								>
									<div className="flex items-center gap-2.5">
										<span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-300 ring-2 ring-gold/40">
											<Image
												src={t.image}
												alt={t.name}
												fill
												sizes="36px"
												className="object-cover"
											/>
										</span>
										<div>
											<span className="block font-display text-xs font-semibold text-ivory">
												{t.name}
											</span>
											<RatingStars />
										</div>
									</div>
									<p className="mt-2 text-xs leading-relaxed text-ivory/65">
										« {t.quote} »
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</Reveal>

				{/* ── CTA Lotus (cream) ── */}
				<Reveal
					as="div"
					variant="scroll"
					className="relative flex items-center bg-cream px-5 py-10 md:px-10 md:py-14"
				>
					{/* Lotus grand — droite */}
					<motion.div
						animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-40 sm:right-4 sm:opacity-100 lg:right-8"
					>
						<Image
							src="/assets/images/lotus-cote-droit.png"
							alt=""
							width={280}
							height={280}
							style={{ width: "auto", height: "auto" }}
							className="object-contain drop-shadow-[0_0_30px_rgba(253,207,2,0.4)]"
						/>
					</motion.div>

					<div className="relative z-10 mx-auto max-w-[340px] text-center lg:mx-0 lg:text-left">
						<h2 className="font-display text-2xl font-bold leading-[1.15] tracking-tight text-royal sm:text-3xl">
							<span className="text-gradient-gold">Prête à révéler</span>
							<br />
							la meilleure version
							<br />
							de vous-même ?
						</h2>
						<p className="mt-3 text-xs leading-relaxed text-slate-ink/65">
							Réservez votre consultation dès maintenant
							<br />
							et commencez votre transformation.
						</p>
						<div className="mt-5 lg:text-left">
							<Button
								href={waLink()}
								external
								variant="gold"
								size="lg"
								className="animate-pulse-glow whitespace-nowrap shadow-gold"
								icon={
									<svg
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-4 w-4"
										aria-hidden="true"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
									</svg>
								}
							>
								Réserver via WhatsApp
							</Button>
						</div>
					</div>
				</Reveal>
			</div>

			{/* ── Bottom: FAQ avec background ── */}
			<Reveal
				as="div"
				variant="scroll"
				className="relative overflow-hidden bg-ivory"
			>
				{/* Image de fond */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/assets/images/background_last_section.png"
						alt=""
						fill
						sizes="100vw"
						className="object-cover"
					/>
				</div>

				{/* Contenu FAQ — gauche uniquement */}
				<div className="relative z-10 px-5 py-10 md:px-10 md:py-14">
					<div className="mx-auto max-w-[520px]">
						<span className="eyebrow inline-flex items-center gap-2 text-gold-deep">
							Questions fréquentes
						</span>

						<div className="mt-5 space-y-0">
							{faqs.map((faq, i) => (
								<motion.div
									key={faq.question}
									initial={{ opacity: 0, x: -16 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.08, duration: 0.4, ease }}
									className="border-b border-slate-line/30 last:border-b-0"
								>
									<button
										type="button"
										onClick={() =>
											setOpenIndex(openIndex === i ? null : i)
										}
										className="flex w-full items-center justify-between gap-4 py-3.5 text-left"
									>
										<span className="font-display text-sm font-medium text-royal">
											{faq.question}
										</span>
										<motion.span
											animate={{ rotate: openIndex === i ? 45 : 0 }}
											transition={{ duration: 0.2 }}
											className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gold-deep"
										>
											<Plus size={14} />
										</motion.span>
									</button>
									<AnimatePresence initial={false}>
										{openIndex === i && (
											<motion.div
												initial={{ height: 0 }}
												animate={{ height: "auto" }}
												exit={{ height: 0 }}
												transition={{ duration: 0.3, ease }}
											>
												<p className="pb-3.5 text-xs leading-relaxed text-slate-ink/60">
													{faq.answer}
												</p>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</Reveal>
		</Reveal>
	);
}

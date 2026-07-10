"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

type FAQ = {
	question: string;
	answer: string;
};

const faqs: FAQ[] = [
	{
		question: "Le microneedling fait-il mal ?",
		answer:
			"Un anesthésiant topique est appliqué avant la séance pour minimiser toute inconfort. La plupart des clientes décrivent une sensation de légères picotements.",
	},
	{
		question: "Combien de séances faut-il ?",
		answer:
			"En général, 3 à 6 séances sont recommandées pour des résultats optimaux, espacées de 3 à 4 semaines. Votre protocole sera adapté lors du diagnostic.",
	},
	{
		question: "Comment se déroule une séance ?",
		answer:
			"Après un nettoyage approfondi, nous appliquons le protocole adapté à votre peau. La duree moyenne est de 45 minutes a 1 heure.",
	},
	{
		question: "Quels sont les moyens de paiement ?",
		answer:
			"Nous acceptons les paiements en especes, par Mobile Money (Orange Money, MTN) ainsi que par carte bancaire.",
	},
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-ivory py-10 md:py-14 section-below-fold"
		>
			<div className="container-luxe">
				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1fr]">
					{/* Colonne gauche — FAQ */}
					<Reveal direction="left">
						<span className="eyebrow inline-flex items-center gap-2">
							<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
							Questions fréquentes
						</span>

						<div className="mt-5 space-y-2">
							{faqs.map((faq, i) => (
								<div
									key={faq.question}
									className="overflow-hidden rounded-xl bg-cream ring-1 ring-slate-line/25"
								>
									<button
										type="button"
										onClick={() => setOpenIndex(openIndex === i ? null : i)}
										className="flex w-full items-center justify-between gap-4 p-4 text-left"
									>
										<span className="font-display text-sm font-semibold text-royal">
											{faq.question}
										</span>
										<motion.span
											animate={{ rotate: openIndex === i ? 45 : 0 }}
											transition={{ duration: 0.2 }}
											className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep"
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
												transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
											>
												<p className="px-4 pb-4 text-xs leading-relaxed text-slate-ink/65">
													{faq.answer}
												</p>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
						</div>
					</Reveal>

					{/* Colonne droite — CTA + Lotus */}
					<Reveal direction="right">
						<div className="relative flex min-h-[240px] items-center justify-center overflow-hidden py-6 md:py-10 lg:justify-start lg:min-h-[360px]">
							{/* Lotus en arrière-plan — collé à droite, caché sur mobile */}
							<motion.div
								animate={{
									y: [0, -8, 0],
									rotate: [0, 2, 0],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute top-18 right-22 hidden translate-x-1/3 lg:block"
							>
								<Image
									src="/assets/images/lotus-cote-droit.png"
									alt="lotus-image-cosmetique"
									width={280}
									height={280}
									style={{ width: "auto", height: "auto" }}
									className="object-contain drop-shadow-[0_0_30px_rgba(253,207,2,0.5)]"
								/>
							</motion.div>

							{/* Contenu CTA — z-index élevé pour passer devant */}
							<div className="relative z-20 max-w-[280px] text-center lg:ml-4 lg:text-left">
								<h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-royal sm:text-4xl">
									<span className="text-gradient-gold">Prête à révéler</span>
									<br />
									la meilleure version
									<br />
									de votre peau ?
								</h2>
								<p className="mt-4 text-sm leading-relaxed text-slate-ink/70">
									Réservez votre consultation dès maintenant
									<br />
									et commencez votre transformation.
								</p>
								<div className="mt-6 lg:text-left">
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
						</div>
					</Reveal>
				</div>
			</div>
		</Reveal>
	);
}

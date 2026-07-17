"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Filaments } from "@/components/ui/Filaments";
import { Reveal } from "@/components/ui/Reveal";

const timelineEvents = [
	{
		year: "2019",
		title: "Les premiers pas",
		description: "Naissance d'un rêve et d'un institut intimiste.",
		image: "/assets/images/lotus-middle.png",
	},
	{
		year: "2020",
		title: "L'expansion",
		description: "De nouveaux soins, plus d'expertise, plus de résultats.",
		image: "/assets/images/bureau-cynthia.png",
	},
	{
		year: "2021",
		title: "La confiance",
		description: "Une clientèle fidèle et des transformations qui parlent d'elles-mêmes.",
		image: "/assets/images/massage.png",
	},
	{
		year: "2022",
		title: "L'innovation",
		description: "Technologies avancées et protocoles exclusifs pour des résultats visibles.",
		image: "/assets/images/microneeding.jpg",
	},
	{
		year: "Aujourd'hui",
		title: "Notre vision",
		description: "Former, inspirer et continuer d'élever les standards de beauté.",
		image: "/assets/images/formation_pro.png",
	},
];

/**
 * OurStory — Compact narrative and visual timeline section for the About page.
 * Features a slim layout with 5-card gallery and chronological history.
 */
export function OurStory() {
	return (
		<section
			id="histoire"
			className="relative overflow-hidden bg-cream py-8 sm:py-10 md:py-12 lg:py-14"
		>
			{/* ─── Background silk texture (left side) ─── */}
			<div className="pointer-events-none absolute bottom-[-5%] left-[-5%] h-full w-[35%] opacity-30" aria-hidden="true">
				<Image
					src="/assets/images/forme-left.png"
					alt=""
					fill
					sizes="35vw"
					className="object-contain object-left-bottom"
				/>
			</div>

			{/* ─── Filaments — subtle gold strokes across the section ─── */}
			<Filaments intensity="subtle" />
			<Filaments intensity="subtle" className="-rotate-12 scale-105" />

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-[35%_1fr] lg:gap-8 xl:gap-12">
					{/* ─── Column 1: Narrative ─── */}
					<div className="flex flex-col">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-3 block !text-[9px] !tracking-[0.2em] !text-gold-deep/80 sm:!text-[10px] md:!text-[11px]">
								Notre Histoire
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="max-w-[260px] font-display text-2xl font-bold leading-[1.1] tracking-tight text-royal sm:text-3xl md:max-w-none md:text-[2.25rem] lg:text-[2.5rem]">
								Une passion devenue{" "}
								<br className="hidden sm:block lg:hidden" />
								une référence.
							</h2>
						</Reveal>

						<div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-ink/75 sm:text-sm md:mt-5 md:space-y-4 md:text-[13px]">
							<Reveal delay={0.3}>
								<p>
									Tout a commencé par un rêve : aider chaque femme à se sentir
									belle, confiante et fière de sa peau.
								</p>
							</Reveal>
							<Reveal delay={0.4}>
								<p>
									De cette passion est née Cynthia Cosmétique, un espace dédié à
									l&apos;excellence, à l&apos;écoute et à l&apos;innovation.
								</p>
							</Reveal>
							<Reveal delay={0.5}>
								<p>
									Aujourd&apos;hui, nous accompagnons des centaines de femmes à
									travers des soins sur-mesure et des formations de haut niveau.
								</p>
							</Reveal>
						</div>

						<Reveal delay={0.6} direction="up">
							<div className="mt-5 md:mt-6">
								<Button
									href="/contact"
									variant="gold"
									size="md"
									className="group animate-pulse-glow px-6 shadow-gold hover:shadow-lift"
								>
									Découvrir notre parcours
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</div>
						</Reveal>
					</div>

					{/* ─── Column 2: Gallery & Timeline ─── */}
					<div className="flex flex-col">
						{/* Horizontal Gallery */}
						<div className="grid grid-cols-5 gap-2 sm:gap-2.5 md:gap-3">
							{timelineEvents.map((item, i) => (
								<Reveal
									key={item.year}
									delay={0.1 * i}
									direction="up"
									className="h-full"
								>
									<div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-card ring-1 ring-slate-line/20 transition-all duration-700 hover:shadow-lift hover:-translate-y-1">
										<Image
											src={item.image}
											alt={item.title}
											fill
											sizes="(min-width: 1024px) 15vw, 20vw"
											className="object-cover transition-transform duration-1000 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-royal/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
									</div>
								</Reveal>
							))}
						</div>

						{/* Timeline visualization */}
						<div className="relative mt-8 px-1 sm:mt-10 md:mt-12 lg:mt-14">
							{/* Background Track */}
							<div className="absolute left-0 top-[7px] h-[1.5px] w-full bg-gold-deep/20" aria-hidden="true">
								<motion.div
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 1.8,
										ease: [0.22, 1, 0.36, 1],
										delay: 0.3,
									}}
									className="h-full w-full origin-left bg-gold-deep/60"
								/>
							</div>

							{/* Markers and Event description grid */}
							<div className="relative grid grid-cols-5 gap-1.5 sm:gap-2">
								{timelineEvents.map((item, i) => (
									<Reveal
										key={`${item.year}-meta`}
										delay={0.4 + 0.1 * i}
										direction="none"
									>
										<div className="flex flex-col items-center text-center">
											{/* Indicator dot */}
											<motion.div
												whileHover={{ scale: 1.2 }}
												className="relative z-10 mb-5 h-3.5 w-3.5 rounded-full border-[2px] border-cream bg-gold-deep shadow-gold ring-3 ring-gold/10 transition-colors sm:mb-6 sm:h-4 sm:w-4 sm:border-[2.5px] sm:ring-4"
											/>

											{/* Metadata labels */}
											<div className="flex flex-col items-center gap-0.5 sm:gap-1">
												<span className="font-display text-xs font-bold text-gold-deep sm:text-sm">
													{item.year}
												</span>
												<h3 className="font-display text-[11px] font-bold leading-tight text-royal sm:text-[13px] md:text-sm">
													{item.title}
												</h3>
												<p className="mt-0.5 line-clamp-3 max-w-[90px] text-[9px] leading-relaxed text-slate-ink/65 sm:max-w-[110px] sm:text-[10px] md:text-[11px]">
													{item.description}
												</p>
											</div>
										</div>
									</Reveal>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

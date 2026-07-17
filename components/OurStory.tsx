"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
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
		title: "Expansion",
		description: "De nouveaux soins, plus d'expertise, plus de résultats.",
		image: "/assets/images/bureau-cynthia.png",
	},
	{
		year: "2021",
		title: "Confiance",
		description: "Une clientèle fidèle et des transformations qui parlent d'elles-mêmes.",
		image: "/assets/images/massage.png",
	},
	{
		year: "2022",
		title: "Innovation",
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
 * OurStory — Narrative and visual timeline section for the About page.
 * Features a 5-card gallery and a chronological history of the brand.
 */
export function OurStory() {
	return (
		<section
			id="histoire"
			className="section-below-fold relative overflow-hidden bg-cream py-24 lg:py-36"
		>
			{/* Decorative background element */}
			<div className="pointer-events-none absolute bottom-[-5%] left-[-5%] h-full w-[40%] opacity-20" aria-hidden="true">
				<Image
					src="/assets/images/forme-left.png"
					alt=""
					fill
					className="object-contain object-left-bottom"
				/>
			</div>

			<div className="container-luxe relative z-10">
				<div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-10">
					{/* ─── Column 1: Narrative (5/12) ─── */}
					<div className="flex flex-col justify-center lg:col-span-5 lg:pr-14">
						<Reveal direction="down" delay={0.1}>
							<span className="eyebrow mb-6 block !text-gold-deep/80">
								Notre Histoire
							</span>
						</Reveal>

						<Reveal delay={0.2}>
							<h2 className="font-display text-4xl font-bold leading-[1.1] text-royal sm:text-5xl lg:text-6xl">
								Une passion devenue <br className="hidden xl:block" />
								une référence.
							</h2>
						</Reveal>

						<div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-ink/75 sm:text-[17px] md:max-w-md lg:max-w-none">
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
							<div className="mt-12">
								<Button
									href="/contact"
									variant="royal"
									size="lg"
									className="group px-10 shadow-soft hover:shadow-lift"
								>
									Découvrir notre parcours
									<ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</div>
						</Reveal>
					</div>

					{/* ─── Column 2: Gallery & Timeline (7/12) ─── */}
					<div className="flex flex-col lg:col-span-7">
						{/* Horizontal Gallery with responsive layout */}
						<div className="grid grid-cols-5 gap-2 sm:gap-3">
							{timelineEvents.map((item, i) => (
								<Reveal
									key={item.year}
									delay={0.1 * i}
									direction="up"
									className="h-full"
								>
									<div className="group relative aspect-[3/5] w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-line/20 transition-all duration-700 hover:shadow-lift hover:-translate-y-1">
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
						<div className="relative mt-16 px-2 lg:mt-20">
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
							<div className="relative grid grid-cols-5 gap-2">
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
												className="relative z-10 mb-8 h-4 w-4 rounded-full border-[2.5px] border-cream bg-gold-deep shadow-gold ring-4 ring-gold/10 transition-colors"
											/>

											{/* Metadata labels */}
											<div className="flex flex-col items-center gap-1.5">
												<span className="font-display text-sm font-bold text-gold-deep">
													{item.year}
												</span>
												<h3 className="font-display text-[15px] font-bold leading-tight text-royal lg:text-base">
													{item.title}
												</h3>
												<p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-slate-ink/65 sm:max-w-[120px] lg:text-xs">
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

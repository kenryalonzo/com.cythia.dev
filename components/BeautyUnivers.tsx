"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Eye,
	GraduationCap,
	Sparkles,
	User,
	Waves,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categories = [
	{
		title: "SOINS\nDU VISAGE",
		subtitle: "4 soins experts",
		image: "/assets/images/soin-visage.jpg",
		href: "#soins-visage",
		icon: Sparkles,
	},
	{
		title: "MICRONEEDLING\nEXPERT",
		subtitle: "1 protocole avancé",
		image: "/assets/images/microneeding.jpg",
		href: "#microneedling",
		icon: Zap,
	},
	{
		title: "BEAUTÉ\nDU REGARD",
		subtitle: "5 prestations",
		image: "/assets/images/beaute-au-regard.jpg",
		href: "#beaute-regard",
		icon: Eye,
	},
	{
		title: "MASSAGES\n& BIEN-ÊTRE",
		subtitle: "3 rituels",
		image: "/assets/images/massage.png",
		href: "#massages",
		icon: Waves,
	},
	{
		title: "ÉPILATION\nEXPERTE",
		subtitle: "2 techniques",
		image: "/assets/images/soin-expert.jpg",
		href: "#epilation",
		icon: User,
	},
	{
		title: "FORMATIONS\nPROFESSIONNELLES",
		subtitle: "3 programmes",
		image: "/assets/images/formation-soin.jpg",
		href: "#formations",
		icon: GraduationCap,
	},
];

/**
 * BeautyUnivers — Premium horizontal carousel showcasing beauty categories.
 * Faithfully reproduces the design from the attached screenshot.
 */
export function BeautyUnivers() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [activeDot, setActiveDot] = useState(0);

	// Handle scroll for indicator dots
	const onScroll = () => {
		if (!scrollRef.current) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
		const progress = scrollLeft / (scrollWidth - clientWidth);
		const index = Math.round(progress * 2); // Map to 3 indicator dots
		setActiveDot(index);
	};

	// Handle click on dots to scroll
	const scrollTo = (index: number) => {
		if (!scrollRef.current) return;
		const { scrollWidth, clientWidth } = scrollRef.current;
		const maxScroll = scrollWidth - clientWidth;
		const target = (index / 2) * maxScroll;
		scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
	};

	return (
		<section className="relative -mt-16 overflow-hidden bg-ivory pt-8 pb-12 md:-mt-20 md:pt-10 md:pb-16">
			{/* ─── Layer 0: Decorative Silk Backgrounds ─── */}
			<div className="pointer-events-none absolute left-[-10% ] top-0 h-full w-[40%] mix-blend-multiply opacity-40 lg:left-[-5%]">
				<Image
					src="/assets/images/forme-left.png"
					alt=""
					fill
					className="object-contain object-left"
					aria-hidden
				/>
			</div>
			<div className="pointer-events-none absolute right-[-10%] top-0 h-full w-[40%] rotate-180 mix-blend-multiply opacity-40 lg:right-[-5%]">
				<Image
					src="/assets/images/forme-left.png"
					alt=""
					fill
					className="object-contain object-right"
					aria-hidden
				/>
			</div>

			<div className="container-luxe relative z-10">
				{/* Header */}
				<SectionHeading
					title="Découvrez nos"
					highlight="univers de beauté"
					description="Cliquez sur une catégorie pour explorer nos soins en détail."
					align="center"
					className="mb-6 md:mb-8"
				/>

				{/* ─── Carousel / Grid Wrapper ─── */}
				<div className="relative">
					<div
						ref={scrollRef}
						onScroll={onScroll}
						className="scrollbar-hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0"
					>
						{categories.map((cat, i) => {
							const Icon = cat.icon;
							return (
								<Reveal
									key={cat.title}
									delay={i * 0.05}
									className="min-w-[280px] snap-center lg:min-w-0"
								>
									<Link
										href={cat.href}
										className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-card transition-all duration-500 hover:shadow-lift lg:aspect-[3/4.5] xl:aspect-[4/6]"
									>
										{/* Image Layer */}
										<Image
											src={cat.image}
											alt={cat.title.replace("\n", " ")}
											fill
											sizes="(min-width: 1024px) 16vw, 280px"
											className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
										/>

										{/* Premium Overlays — Darker for contrast as per design */}
										<div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-royal/30 to-transparent opacity-85" />
										<div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />

										{/* Content */}
										<div className="absolute inset-0 flex flex-col justify-end p-5">
											{/* Icon in translucent circle */}
											<div className="mb-auto flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-gold shadow-sm ring-1 ring-white/20 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
												<Icon className="h-5 w-5" />
											</div>

											{/* Text info */}
											<div className="space-y-1">
												<h3 className="whitespace-pre-line font-display text-base font-bold uppercase leading-[1.2] tracking-wider text-ivory sm:text-lg">
													{cat.title}
												</h3>
												<p className="text-[11px] font-medium text-ivory/60 sm:text-xs">
													{cat.subtitle}
												</p>
											</div>

											{/* Bottom Right Arrow */}
											<div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-gold/90 text-royal shadow-md transition-all duration-500 group-hover:translate-x-1 group-hover:bg-gold">
												<ArrowRight size={14} strokeWidth={3} />
											</div>
										</div>
									</Link>
								</Reveal>
							);
						})}
					</div>

					{/* ─── Carousel Indicators (Mobile/Tablet) ─── */}
					<div className="mt-8 flex justify-center gap-2 lg:hidden">
						{[0, 1, 2].map((dot) => (
							<button
								key={dot}
								type="button"
								onClick={() => scrollTo(dot)}
								className={cn(
									"h-1.5 transition-all duration-500 rounded-full cursor-pointer",
									activeDot === dot ? "w-6 bg-gold" : "w-1.5 bg-gold/30",
								)}
								aria-label={`Go to slide ${dot + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = [
	{
		title: "Soins\n du Visage",
		subtitle: "4 soins experts",
		image: "/assets/images/soin-visage.jpg",
		href: "#soins-visage",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
			</svg>
		),
	},
	{
		title: "Microneedling\n Expert",
		subtitle: "1 protocole avancé",
		image: "/assets/images/microneeding.jpg",
		href: "#microneedling",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
			</svg>
		),
	},
	{
		title: "Beauté\n du Regard",
		subtitle: "5 prestations",
		image: "/assets/images/beaute-au-regard.jpg",
		href: "#beaute-regard",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
	},
	{
		title: "Massages\n & Bien-Être",
		subtitle: "3 rituels",
		image: "/assets/images/massage.png",
		href: "#massages",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
			</svg>
		),
	},
	{
		title: "Épilation\n Experte",
		subtitle: "2 techniques",
		image: "/assets/images/soin-expert.jpg",
		href: "#epilation",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
			</svg>
		),
	},
	{
		title: "Formations\n Professionnelles",
		subtitle: "3 programmes",
		image: "/assets/images/formation-soin.jpg",
		href: "#formations",
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
			</svg>
		),
	},
];

export function BeautyUnivers() {
	return (
		<section className="relative -mt-20 overflow-hidden bg-cream pt-32 pb-20 md:-mt-28 md:pt-40 md:pb-28">
			{/* Soie dorée décorative */}
			<div className="pointer-events-none absolute -left-20 top-0 h-full w-[40%] opacity-30">
				<img
					src="/assets/images/forme-left.png"
					alt=""
					aria-hidden
					className="h-full w-full object-cover"
				/>
			</div>

			<div className="container-luxe relative z-10">
				{/* Heading */}
				<SectionHeading
					title="Découvrez nos"
					highlight="univers de beauté"
					description="Cliquez sur une catégorie pour explorer nos soins en détail."
					align="center"
				/>

				{/* Grille de cartes */}
				<div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
					{categories.map((cat, i) => (
						<Reveal key={cat.href} delay={i * 0.08}>
							<Link href={cat.href} className="group relative block overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-lift">
								{/* Image */}
								<div className="relative aspect-[4/5] overflow-hidden">
									<Image
										src={cat.image}
										alt={cat.title.replace("\n", " ")}
										fill
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
									/>
									{/* Gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
								</div>

								{/* Contenu */}
								<div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
									{/* Icône dorée (haut gauche) */}
									<div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/90 text-royal shadow-md backdrop-blur-sm sm:h-11 sm:w-11">
										{cat.icon}
									</div>

									{/* Titre */}
									<h3 className="whitespace-pre-line font-display text-lg font-bold uppercase leading-tight tracking-wide text-white sm:text-xl">
										{cat.title}
									</h3>

									{/* Sous-titre + flèche */}
									<div className="mt-1.5 flex items-center justify-between">
										<span className="text-xs text-white/80 sm:text-sm">
											{cat.subtitle}
										</span>
										<span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-royal group-hover:shadow-gold sm:h-9 sm:w-9">
											<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
											</svg>
										</span>
									</div>
								</div>
							</Link>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

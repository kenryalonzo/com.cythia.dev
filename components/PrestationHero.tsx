"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";

/**
 * PrestationHero — Header section for the services page.
 * Refactored to follow luxury tokens and remove hardcoded hex values.
 */
export function PrestationHero() {
	return (
		<section className="relative min-h-[600px] overflow-hidden bg-ivory md:min-h-[700px]">
			{/* ─── Background Image ─── */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative h-full w-[115%] -translate-y-[8%]">
					<Image
						src="/assets/images/cover-prestation-image.png"
						alt=""
						fill
						priority
						className="object-contain"
						aria-hidden
					/>
				</div>
				{/* Light gradient veil for text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-ivory/85 via-ivory/60 to-transparent" />
			</div>

			{/* ─── Content ─── */}
			<div className="container-luxe relative z-10 flex min-h-[600px] flex-col justify-center py-20 md:min-h-[700px] md:py-0">
				<div className="max-w-xl">
					{/* Eyebrow with decorative lotus */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="flex items-center gap-3"
					>
						<div className="relative h-6 w-6">
							<Image
								src="/assets/images/lotus-expertise.png"
								alt=""
								fill
								sizes="24px"
								className="object-contain"
								aria-hidden
							/>
						</div>
						<span className="eyebrow !text-gold-deep/80">
							L&apos;expertise au service de votre beauté
						</span>
					</motion.div>

					{/* Title with editorial italic accent */}
					<motion.h1
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="mt-5 font-display text-4xl font-bold leading-[1.1] text-royal sm:text-5xl lg:text-7xl"
					>
						Nos{" "}
						<span className="text-gradient-gold font-normal italic">
							Prestations
						</span>
					</motion.h1>

					{/* Luxury divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className="mt-4 h-0.5 w-20 origin-left bg-gradient-to-r from-gold-deep to-gold/30"
					/>

					{/* Subheading */}
					<motion.p
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className="mt-6 max-w-md text-base leading-relaxed text-slate-ink/80 sm:text-lg"
					>
						Des soins sur-mesure, des techniques de pointe et une approche
						personnalisée pour révéler la beauté naturelle de votre peau.
					</motion.p>

					{/* Call to Actions */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
						className="mt-8 flex flex-wrap items-center gap-4"
					>
						<a
							href={waLink("Bonjour, je souhaite réserver un soin.")}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2.5 rounded-full bg-royal px-8 py-4 text-xs font-bold uppercase tracking-[0.1em] text-ivory shadow-card transition-all hover:bg-royal-light hover:shadow-lift"
						>
							Réserver maintenant
							<svg
								className="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
						</a>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.1em] text-gold-deep transition-all hover:border-gold hover:bg-gold/5"
						>
							Nous contacter
							<svg
								className="h-3.5 w-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								aria-hidden
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

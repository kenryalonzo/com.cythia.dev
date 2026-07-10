"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { navLinks, site, waLink } from "@/lib/site";

const socials = [
	{
		name: "Instagram",
		href: site.instagram,
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="h-5 w-5"
				aria-label="Instagram"
			>
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
			</svg>
		),
	},
	{
		name: "Facebook",
		href: site.facebook,
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="h-5 w-5"
				aria-label="Facebook"
			>
				<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
			</svg>
		),
	},
	{
		name: "TikTok",
		href: site.tiktok,
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="h-5 w-5"
				aria-label="TikTok"
			>
				<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
			</svg>
		),
	},
];

const soins = [
	{ label: "Soins du visage", href: "#soins-visage" },
	{ label: "Beauté du regard", href: "#beaute-regard" },
	{ label: "Microneedling", href: "#soins-phares" },
	{ label: "Formations", href: "#formations" },
];

export function Footer() {
	return (
		<footer className="relative overflow-hidden bg-royal">
			<div className="container-luxe relative py-10 md:py-12">
				{/* Rangée haute — marque + newsletter */}
				<Reveal direction="none">
					<div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
						<div className="max-w-sm">
							<div className="flex items-center gap-3">
								<Image
									src="/assets/logo-cynthia.png"
									alt={site.brand}
									width={48}
									height={48}
									className="h-11 w-11 rounded-full ring-2 ring-gold/30"
								/>
								<span className="font-display text-xl font-bold tracking-tight text-white">
									{site.brand}
								</span>
							</div>
							<p className="mt-3 text-sm leading-relaxed text-white/60">
								{site.baseline}
							</p>
						</div>

						{/* Newsletter */}
						<div className="w-full max-w-sm">
							<h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-gold">
								Newsletter
							</h3>
							<form
								className="mt-3 flex gap-2"
								onSubmit={(e) => e.preventDefault()}
							>
								<input
									type="email"
									required
									placeholder="Votre email"
									aria-label="Votre email"
									className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/40"
								/>
								<motion.button
									type="submit"
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									transition={{ type: "spring", stiffness: 500, damping: 18 }}
									aria-label="S'inscrire"
									className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-royal shadow-gold transition-colors hover:bg-gold-warm"
								>
									<Send size={16} />
								</motion.button>
							</form>
						</div>
					</div>
				</Reveal>

				{/* Rangée centrale — 4 colonnes */}
				<Reveal direction="none" className="mt-8">
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
						{/* Navigation */}
						<div>
							<h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-gold">
								Navigation
							</h3>
							<ul className="mt-4 space-y-2.5">
								{navLinks.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											className="text-sm text-white/65 transition-colors duration-300 hover:text-gold"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Nos soins */}
						<div>
							<h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-gold">
								Nos soins
							</h3>
							<ul className="mt-4 space-y-2.5">
								{soins.map((s) => (
									<li key={s.href}>
										<a
											href={s.href}
											className="text-sm text-white/65 transition-colors duration-300 hover:text-gold"
										>
											{s.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-gold">
								Contact
							</h3>
							<ul className="mt-4 space-y-3">
								<li>
									<a
										href={`tel:${site.phoneRaw}`}
										className="inline-flex items-start gap-2 text-sm text-white/65 transition-colors hover:text-gold"
									>
										<Phone size={14} className="mt-0.5 shrink-0" />
										{site.phone}
									</a>
								</li>
								<li>
									<span className="inline-flex items-start gap-2 text-sm text-white/65">
										<MapPin size={14} className="mt-0.5 shrink-0" />
										{site.address}, {site.city}
									</span>
								</li>
								<li>
									<span className="inline-flex items-start gap-2 text-sm text-white/65">
										<Clock size={14} className="mt-0.5 shrink-0" />
										<span>
											{site.hours.week}
											<br />
											{site.hours.sunday}
										</span>
									</span>
								</li>
							</ul>
						</div>

						{/* Suivez-nous */}
						<div>
							<h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-gold">
								Suivez-nous
							</h3>
							<div className="mt-4 flex gap-3">
								{socials.map((s) => (
									<motion.a
										key={s.name}
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.15, y: -2 }}
										whileTap={{ scale: 0.95 }}
										aria-label={s.name}
										className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-gold hover:text-royal"
									>
										{s.icon}
									</motion.a>
								))}
							</div>
							<motion.a
								href={waLink()}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 500, damping: 18 }}
								className="animate-pulse-glow mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-[0.06em] text-royal shadow-gold"
							>
								<svg
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-4 w-4"
									aria-hidden="true"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
								</svg>
								WhatsApp
							</motion.a>
						</div>
					</div>
				</Reveal>

				{/* Rangée basse — copyright */}
				<Reveal direction="none" className="mt-10">
					<div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
						<p>
							&copy; {new Date().getFullYear()} {site.brand} — Tous droits
							réservés.
						</p>
						<div className="flex gap-4">
							<button
								type="button"
								className="bg-transparent transition-colors hover:text-gold"
							>
								Mentions légales
							</button>
							<button
								type="button"
								className="bg-transparent transition-colors hover:text-gold"
							>
								Confidentialité
							</button>
						</div>
					</div>
				</Reveal>
			</div>
		</footer>
	);
}

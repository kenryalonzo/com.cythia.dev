"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
				className="h-4 w-4"
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
				className="h-4 w-4"
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
				className="h-4 w-4"
				aria-label="TikTok"
			>
				<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
			</svg>
		),
	},
];

const soins = [
	{ label: "Microneedling", href: "#soins-phares" },
	{ label: "Soin Signature", href: "#soins-phares" },
	{ label: "Microblading", href: "#soins-phares" },
	{ label: "Extensions de cils", href: "#soins-phares" },
	{ label: "Tous les soins", href: "#soins-visage" },
];

export function Footer() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const onScroll = () =>
			setShowScrollTop(window.scrollY > window.innerHeight * 0.8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Reveal
			as="footer"
			variant="scroll"
			className="relative overflow-hidden bg-royal"
		>
			<div className="container-luxe relative py-4 md:py-6">
				<div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
					{/* Colonne 1 — Logo + baseline + réseaux */}
					<Reveal direction="none">
						<div>
							<div className="flex items-center gap-3">
								<Image
									src="/assets/logo-cynthia.png"
									alt={site.brand}
									width={60}
									height={60}
									className="h-14 w-14 rounded-full ring-2 ring-gold/30"
								/>
							</div>
							<p className="mt-3 max-w-[220px] text-xs leading-relaxed text-white/60">
								{site.baseline}
							</p>
							<div className="mt-4 flex gap-2.5">
								{socials.map((s, i) => (
									<motion.a
										key={s.name}
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.15, y: -2 }}
										whileTap={{ scale: 0.95 }}
										aria-label={s.name}
										className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-gold hover:text-royal sm:h-8 sm:w-8"
										style={{ animationDelay: `${i * 0.3}s` }}
									>
										<span className="animate-pulse-glow inline-flex h-full w-full items-center justify-center rounded-full">
											{s.icon}
										</span>
									</motion.a>
								))}
							</div>
						</div>
					</Reveal>

					{/* Colonne 2 — Navigation */}
					<Reveal direction="none">
						<h3 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-gold">
							Navigation
						</h3>
						<ul className="mt-2.5 space-y-1.5">
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
					</Reveal>

					{/* Colonne 3 — Soins */}
					<Reveal direction="none">
						<h3 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-gold">
							Soins
						</h3>
						<ul className="mt-2.5 space-y-1.5">
							{soins.map((s) => (
								<li key={s.label}>
									<a
										href={s.href}
										className="text-sm text-white/65 transition-colors duration-300 hover:text-gold"
									>
										{s.label}
									</a>
								</li>
							))}
						</ul>
					</Reveal>

					{/* Colonne 4 — Informations */}
					<Reveal direction="none">
						<h3 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-gold">
							Informations
						</h3>
						<ul className="mt-2.5 space-y-2">
							<li>
								<span className="inline-flex items-start gap-2 text-sm text-white/65">
									<MapPin size={14} className="mt-0.5 shrink-0" />
									<span>
										{site.address}
										<br />({site.city})
									</span>
								</span>
							</li>
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
								<a
									href={waLink(
										"Bonjour Cynthia, je souhaite réserver un soin.",
									)}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-start gap-2 text-sm text-white/65 transition-colors hover:text-gold"
								>
									<MessageCircle size={14} className="mt-0.5 shrink-0" />
									Réservation via WhatsApp
								</a>
							</li>
						</ul>
					</Reveal>

					{/* Colonne 5 — Horaires */}
					<Reveal direction="none">
						<h3 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-gold">
							Horaires
						</h3>
						<ul className="mt-2.5 space-y-1.5 text-sm text-white/65">
							<li>
								Lundi - Samedi
								<br />
								<span className="text-white/80">08h00 - 19h00</span>
							</li>
							<li>
								Dimanche
								<br />
								<span className="text-white/80">Fermé</span>
							</li>
						</ul>
					</Reveal>
				</div>

				{/* Copyright */}
				<Reveal direction="none">
					<div className="mt-4 border-t border-white/10 pt-3 text-center text-xs text-white/40">
						<p>
							&copy; {new Date().getFullYear()} {site.brand} — Tous droits
							réservés.
						</p>
					</div>
				</Reveal>
			</div>

			{/* Retour haut — fixe à droite, visible après le hero */}
			{showScrollTop ? (
				<motion.button
					type="button"
					onClick={scrollToTop}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					whileHover={{ scale: 1.12 }}
					whileTap={{ scale: 0.95 }}
					aria-label="Retour en haut"
					className="animate-pulse-glow fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-royal shadow-gold"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-5 w-5"
						aria-hidden="true"
					>
						<path d="M18 15l-6-6-6 6" />
					</svg>
				</motion.button>
			) : null}
		</Reveal>
	);
}

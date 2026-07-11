"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Share2 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const services = [
	"Microneedling",
	"Microblading",
	"Extensions de cils",
	"Soin du visage",
	"Beauté du regard",
	"Autre",
];

const contactItems = [
	{
		icon: MapPin,
		label: "Notre adresse",
		lines: [site.address, site.city],
	},
	{
		icon: Phone,
		label: "Appelez-nous",
		lines: [site.phone],
	},
	{
		icon: Mail,
		label: "Email",
		lines: ["contact@cynthiacosmetique.com"],
	},
	{
		icon: Clock,
		label: "Horaires d'ouverture",
		lines: [site.hours.week, site.hours.sunday],
	},
];

export function ContactSection() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<section className="relative flex items-center overflow-hidden bg-ivory py-10 md:py-12 lg:py-16">
			{/* ─── Arrière-plan — forme gauche dorée ─── */}
			<motion.img
				src="/assets/images/forme-left.png"
				alt=""
				aria-hidden
				animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				className="pointer-events-none absolute -left-10 top-0 h-[120%] w-[35%] object-cover opacity-30 mix-blend-multiply"
			/>

			{/* ─── Arrière-plan — bureau droit avec fondu ─── */}
			<div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-1/2 lg:block">
				<img
					src="/assets/images/bureau-cynthia.png"
					alt=""
					aria-hidden
					className="absolute inset-0 h-full w-full object-cover opacity-60"
					style={{
						WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 60%)",
						maskImage: "linear-gradient(to right, transparent 0%, black 60%)",
					}}
				/>
			</div>

			{/* ─── Ligne dorée verticale ─── */}
			<div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-deep/30 to-transparent lg:block" />

			{/* ─── Lotus central ─── */}
			<div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
				{/* Halo extérieur pulsant */}
				<motion.div
					animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0, 0.25] }}
					transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
					className="absolute inset-0 -m-5 rounded-full bg-gold/30"
				/>
				{/* Halo intermédiaire */}
				<motion.div
					animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0, 0.35] }}
					transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
					className="absolute inset-0 -m-3 rounded-full bg-gold-deep/25"
				/>
				{/* Cercle principal */}
				<div className="relative flex h-[90px] w-[90px] items-center justify-center rounded-full border border-gold/40 bg-ivory/95 shadow-gold backdrop-blur-sm">
					<div className="absolute top-0 h-1 w-1 -translate-y-1/2 rounded-full bg-gold" />
					<div className="absolute bottom-0 h-1 w-1 translate-y-1/2 rounded-full bg-gold" />
					<div className="absolute left-0 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
					<div className="absolute right-0 h-1 w-1 translate-x-1/2 rounded-full bg-gold" />
					{/* Lueur centrale */}
					<div className="absolute inset-4 rounded-full bg-gold/10 blur-md" />
					<motion.img
						src="/assets/images/lotus-middle.png"
						alt=""
						aria-hidden
						animate={{ rotate: [0, 3, 0, -3, 0] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						className="relative h-12 w-12 drop-shadow-[0_0_8px_rgba(201,162,39,0.6)]"
					/>
				</div>
			</div>

			{/* ─── Contenu ─── */}
			<div className="container-luxe relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">
				
				{/* ─── Colonne gauche — Formulaire ─── */}
				<Reveal direction="left">
					<div className="w-full lg:pr-16 xl:pr-24">
						<span className="eyebrow inline-flex items-center gap-2 text-[10px] tracking-[0.15em]">
							Écrivez-nous
						</span>
						<h2 className="mt-1.5 font-display text-3xl font-bold leading-[1.15] text-royal md:text-4xl">
							Nous sommes là
							<br />
							pour vous.
						</h2>

						{submitted ? (
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								className="mt-4 flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-card ring-1 ring-slate-line/15"
							>
								<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft">
									<svg className="h-6 w-6 text-gold-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<h3 className="font-display text-xl font-bold text-royal">Merci !</h3>
								<p className="mt-1.5 max-w-[240px] font-sans text-[11px] text-slate-ink/70">
									Votre message a bien été envoyé. Nous vous répondrons très vite.
								</p>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
								<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
									<input
										name="fullname"
										type="text"
										required
										placeholder="Nom complet"
										className="w-full rounded-lg border border-gold/30 bg-white px-4 py-2.5 font-sans text-[13px] text-royal shadow-sm placeholder:text-slate-ink/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 hover:border-gold/50"
									/>
									<input
										name="phone"
										type="tel"
										placeholder="Téléphone"
										className="w-full rounded-lg border border-gold/30 bg-white px-4 py-2.5 font-sans text-[13px] text-royal shadow-sm placeholder:text-slate-ink/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 hover:border-gold/50"
									/>
								</div>
								<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
									<input
										name="email"
										type="email"
										required
										placeholder="Email"
										className="w-full rounded-lg border border-gold/30 bg-white px-4 py-2.5 font-sans text-[13px] text-royal shadow-sm placeholder:text-slate-ink/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 hover:border-gold/50"
									/>
									<div className="relative">
										<select
											name="service"
											required
											className="w-full appearance-none rounded-lg border border-gold/30 bg-white px-4 py-2.5 pr-8 font-sans text-[13px] text-slate-ink/60 shadow-sm transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 hover:border-gold/50"
										>
											<option value="">Sujet</option>
											{services.map((s) => (
												<option key={s} value={s}>{s}</option>
											))}
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-ink/40">
											<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
											</svg>
										</div>
									</div>
								</div>
								<textarea
									name="message"
									rows={3}
									placeholder="Votre message"
									className="w-full resize-none rounded-lg border border-gold/30 bg-white px-4 py-2.5 font-sans text-[13px] text-royal shadow-sm placeholder:text-slate-ink/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 hover:border-gold/50"
								/>

								<motion.button
									type="submit"
									animate={{
										boxShadow: [
											"0 4px 14px rgba(201,162,39,.25)",
											"0 4px 14px rgba(201,162,39,.25), 0 0 0 10px rgba(253,207,2,0.22)",
											"0 4px 14px rgba(201,162,39,.25)",
										],
									}}
									transition={{ duration: 1.1, repeat: Infinity, ease: "easeOut" }}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="group relative flex w-full items-center justify-between overflow-hidden rounded-full bg-gradient-to-r from-gold-warm via-gold to-gold-warm px-2 py-2 pl-6 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-royal transition-all hover:shadow-lift"
								>
									<span className="flex-1 text-center">Envoyer le message</span>
									<span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-royal text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-royal-light">
										<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
										</svg>
									</span>
								</motion.button>

								<p className="flex items-center gap-1 pt-1 font-sans text-[9px] text-slate-ink/50">
									<svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
									Vos informations sont 100% confidentielles.
								</p>
							</form>
						)}
					</div>
				</Reveal>

				{/* ─── Colonne droite — Coordonnées ─── */}
				<Reveal direction="right">
					<div className="w-full lg:pl-16 xl:pl-24">
						<div className="mx-auto max-w-[360px] rounded-3xl bg-gradient-to-br from-gold/15 via-gold-warm/10 to-gold-deep/15 p-7 shadow-card ring-1 ring-gold/10 backdrop-blur-sm lg:mx-0">
							<span className="eyebrow inline-flex items-center gap-2 text-[9px]">
								<span className="h-px w-5 bg-gold-deep/60" aria-hidden />
								Nos coordonnées
							</span>

							<div className="mt-5 flex flex-col gap-5">
								{contactItems.map((item) => (
									<div key={item.label} className="flex items-start gap-3.5">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal text-gold shadow-md">
											<item.icon size={16} strokeWidth={1.5} />
										</div>
										<div className="pt-0.5">
											<p className="font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-gold-deep">
												{item.label}
											</p>
											<div className="mt-1">
												{item.lines.map((line) => (
													<p key={line} className="font-sans text-[12px] font-medium leading-relaxed text-royal">
														{line}
													</p>
												))}
											</div>
										</div>
									</div>
								))}

								{/* Réseaux sociaux */}
								<div className="flex items-start gap-3.5">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal text-gold shadow-md">
										<Share2 size={16} strokeWidth={1.5} />
									</div>
									<div className="pt-0.5">
										<p className="font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-gold-deep">
											Suivez-nous
										</p>
										<div className="mt-1.5 flex gap-2.5">
											<a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-royal shadow-sm ring-1 ring-slate-line/30 transition-all hover:bg-royal hover:text-gold hover:ring-royal" aria-label="Instagram">
												<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
											</a>
											<a href={site.facebook} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-royal shadow-sm ring-1 ring-slate-line/30 transition-all hover:bg-royal hover:text-gold hover:ring-royal" aria-label="Facebook">
												<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
											</a>
											<a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-royal shadow-sm ring-1 ring-slate-line/30 transition-all hover:bg-royal hover:text-gold hover:ring-royal" aria-label="TikTok">
												<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.54a8.21 8.21 0 004.76 1.52V6.61a4.83 4.83 0 01-1-.08z"/></svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

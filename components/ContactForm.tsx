"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, waLink } from "@/lib/site";

const services = [
	"Microneedling",
	"Microblading",
	"Extensions de cils",
	"Soin du visage",
	"Beauté du regard",
	"Autre",
];

export function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<Reveal
			as="section"
			variant="scroll"
			className="relative overflow-hidden bg-ivory py-16 md:py-24"
		>
			<div className="container-luxe">
				<SectionHeading
					eyebrow="Contact"
					title="Prenez rendez-vous"
					highlight="dès aujourd'hui"
					description="Une question, un devis personnalisé ou simplement envie d'échanger ? Répondons ensemble à vos besoins beauté."
					align="center"
					size="xl"
				/>

				<div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
					{/* Colonne gauche — Témoignage + description */}
					<Reveal direction="left">
						<div className="flex flex-col justify-between">
							{/* Bloc témoignage */}
							<div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-line/15 sm:p-8">
								<p className="font-display text-lg leading-relaxed text-royal/90 italic sm:text-xl">
									« Les soins de Cynthia ont transformé ma peau. Le microneedling
									a effacé mes cicatrices d'acné et ma peau n'a jamais été aussi
									lumineuse. L'équipe est aux petits soins et toujours à l'écoute. »
								</p>
								<div className="mt-5 flex items-center gap-4">
									<div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold/30">
										<img
											src="/assets/images/person1.jpg"
											alt="Cliente Cynthia Cosmétique"
											className="h-full w-full object-cover"
										/>
									</div>
									<div>
										<p className="font-sans text-sm font-semibold text-royal">
											Sarah N.
										</p>
										<p className="font-sans text-xs text-slate-ink/60">
											Cliente fidèle — Douala
										</p>
									</div>
								</div>
							</div>

							{/* Description */}
							<div className="mt-8">
								<p className="font-sans text-sm leading-relaxed text-slate-ink/70">
									{site.brand} n'est pas simplement un institut de beauté — c'est un
									espace dédié à révéler la meilleure version de votre peau. Nos soins
									experts, nos protocoles personnalisés et notre approche bienveillante
									vous accompagnent vers une beauté naturelle et durable.
								</p>
								<div className="mt-6">
									<Button href={waLink()} external variant="outline-gold" size="md">
										Écrire sur WhatsApp
									</Button>
								</div>
							</div>
						</div>
					</Reveal>

					{/* Colonne droite — Formulaire */}
					<Reveal direction="right">
						<form
							onSubmit={handleSubmit}
							className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-line/15 sm:p-8"
						>
							{submitted ? (
								<motion.div
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex flex-col items-center py-12 text-center"
								>
									<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft">
										<svg
											className="h-8 w-8 text-gold-deep"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 className="font-display text-xl font-bold text-royal">
										Merci pour votre message !
									</h3>
									<p className="mt-2 max-w-sm font-sans text-sm text-slate-ink/70">
										Nous vous répondrons dans les plus brefs délais. En attendant,
										n'hésitez pas à nous écrire sur WhatsApp.
									</p>
									<div className="mt-6">
										<Button href={waLink()} external variant="gold" size="md">
											WhatsApp direct
										</Button>
									</div>
								</motion.div>
							) : (
								<>
									{/* Prénom + Nom */}
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<div>
											<label
												htmlFor="firstname"
												className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide text-royal"
											>
												Prénom *
											</label>
											<input
												id="firstname"
												name="firstname"
												type="text"
												required
												placeholder="Votre prénom"
												className="w-full rounded-xl border border-slate-line/30 bg-ivory px-4 py-3 font-sans text-sm text-royal placeholder:text-slate-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
											/>
										</div>
										<div>
											<label
												htmlFor="lastname"
												className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide text-royal"
											>
												Nom *
											</label>
											<input
												id="lastname"
												name="lastname"
												type="text"
												required
												placeholder="Votre nom"
												className="w-full rounded-xl border border-slate-line/30 bg-ivory px-4 py-3 font-sans text-sm text-royal placeholder:text-slate-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
											/>
										</div>
									</div>

									{/* Email */}
									<div className="mt-4">
										<label
											htmlFor="email"
											className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide text-royal"
										>
											Email *
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											placeholder="votre@email.com"
											className="w-full rounded-xl border border-slate-line/30 bg-ivory px-4 py-3 font-sans text-sm text-royal placeholder:text-slate-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
										/>
									</div>

									{/* Téléphone */}
									<div className="mt-4">
										<label
											htmlFor="phone"
											className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide text-royal"
										>
											Téléphone
										</label>
										<input
											id="phone"
											name="phone"
											type="tel"
											placeholder="+237 6XX XXX XXX"
											className="w-full rounded-xl border border-slate-line/30 bg-ivory px-4 py-3 font-sans text-sm text-royal placeholder:text-slate-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
										/>
									</div>

									{/* Service souhaité */}
									<div className="mt-4">
										<label
											htmlFor="service"
											className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide text-royal"
										>
											Service souhaité *
										</label>
										<select
											id="service"
											name="service"
											required
											className="w-full appearance-none rounded-xl border border-slate-line/30 bg-ivory px-4 py-3 font-sans text-sm text-royal focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
										>
											<option value="">Sélectionnez un service</option>
											{services.map((s) => (
												<option key={s} value={s}>
													{s}
												</option>
											))}
										</select>
									</div>

									{/* Message */}
									<div className="mt-4">
										<label
											htmlFor="message"
											className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide text-royal"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											placeholder="Décrivez votre besoin ou posez votre question..."
											className="w-full resize-none rounded-xl border border-slate-line/30 bg-ivory px-4 py-3 font-sans text-sm text-royal placeholder:text-slate-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
										/>
									</div>

									{/* Bouton */}
									<div className="mt-6">
										<Button type="submit" variant="gold" size="lg" className="w-full">
											Envoyer ma demande
										</Button>
									</div>
								</>
							)}
						</form>
					</Reveal>
				</div>
			</div>
		</Reveal>
	);
}

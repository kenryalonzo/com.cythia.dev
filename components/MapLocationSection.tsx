"use client";

import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/**
 * MapLocationSection — interactive map with contact & access details.
 * Refactored to follow the "No dark zones" luxury philosophy (Ivory/Royal/Gold).
 */
export function MapLocationSection() {
	return (
		<section className="section-below-fold bg-ivory py-10 md:py-14">
			<div className="container-luxe">
				<Reveal variant="scroll" direction="none">
					<div className="relative min-h-[440px] overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-line/20">
						{/* Base background */}
						<div className="absolute inset-0 bg-cream" />
						<div
							className="absolute inset-0 opacity-10"
							style={{
								backgroundImage:
									"radial-gradient(circle at 2px 2px, var(--color-gold-deep) 1px, transparent 0)",
								backgroundSize: "32px 32px",
							}}
							aria-hidden
						/>

						{/* Interactive Map Iframe */}
						<div className="relative h-full min-h-[440px]">
							<iframe
								src={`https://maps.google.com/maps?q=${encodeURIComponent(`${site.brand} ${site.city}`)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
								className="absolute inset-0 h-full w-full border-0 transition-opacity duration-700"
								style={{
									filter:
										"saturate(0.5) brightness(1.02) contrast(1.02) sepia(0.05) hue-rotate(180deg)",
									opacity: 0.95,
								}}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title={`Carte ${site.brand}`}
							/>

							{/* Luxury Light Overlay */}
							<div
								className="pointer-events-none absolute inset-0"
								style={{
									background:
										"radial-gradient(ellipse at 40% 50%, rgba(253,207,2,0.08) 0%, transparent 70%)",
								}}
								aria-hidden
							/>

							{/* ─── Information Card (Left) ─── */}
							<div className="absolute left-4 top-4 z-10 w-[calc(100%-32px)] rounded-2xl bg-ivory/95 p-5 shadow-lift backdrop-blur-md ring-1 ring-white/60 sm:left-8 sm:top-8 sm:max-w-[320px] sm:p-6">
								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep ring-1 ring-gold/20">
										<MapPin className="h-5 w-5" />
									</div>
									<div>
										<h3 className="font-display text-lg font-bold text-royal">
											{site.brand}
										</h3>
										<p className="mt-1 font-sans text-xs leading-relaxed text-slate-ink/70">
											{site.address}
											<br />
											{site.city}, Cameroun
										</p>
									</div>
								</div>

								<div className="mt-5 space-y-3.5 border-t border-slate-line/20 pt-5">
									<div className="flex items-center gap-3">
										<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal/5 text-royal ring-1 ring-royal/10">
											<Phone className="h-4 w-4" />
										</div>
										<span className="font-sans text-sm font-medium text-royal">
											{site.phone}
										</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal/5 text-royal ring-1 ring-royal/10">
											<Clock className="h-4 w-4" />
										</div>
										<div className="flex flex-col">
											<span className="font-sans text-[13px] text-royal">
												{site.hours.week}
											</span>
										</div>
									</div>
								</div>

								<a
									href={`https://maps.google.com/?q=${encodeURIComponent(`${site.brand} ${site.address} ${site.city}`)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-royal transition-all hover:bg-gold-warm hover:shadow-gold"
								>
									Voir l&apos;itinéraire
									<ArrowRight
										size={14}
										className="transition-transform group-hover:translate-x-1"
									/>
								</a>
							</div>

							{/* ─── Accessibility Badge (Bottom Right) ─── */}
							<div className="absolute bottom-4 right-4 z-10 hidden sm:flex">
								<div className="rounded-2xl bg-ivory/80 px-5 py-4 shadow-card backdrop-blur-md ring-1 ring-white/40">
									<div className="flex items-center gap-3">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
											<svg
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={1.5}
												aria-hidden="true"
												role="img"
											>
												<title>Icône parking</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
												/>
											</svg>
										</div>
										<div>
											<p className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-gold-deep">
												Stationnement
											</p>
											<p className="font-sans text-[13px] text-slate-ink">
												Sécurisé & disponible
											</p>
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

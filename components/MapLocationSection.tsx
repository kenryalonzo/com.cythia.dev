"use client";

import { Reveal } from "@/components/ui/Reveal";

export function MapLocationSection() {
	return (
		<section className="section-below-fold bg-[#FAFAF8] py-8 md:py-10">
			<div className="container-luxe">
				<Reveal>
					<div
						className="relative overflow-hidden"
						style={{
							borderRadius: "1.25rem",
							minHeight: "240px",
						}}
					>
						{/* Fond navy derrière la carte */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(110deg, #060f2e 0%, #0a1d5a 40%, #071840 100%)",
							}}
						/>

						{/* ─── Carte OpenStreetMap embed ─── */}
						<div className="relative min-h-[240px]">
							<iframe
								src="https://maps.google.com/maps?q=Cynthia+Cosmetique+Bonapriso+Douala&t=&z=16&ie=UTF8&iwloc=&output=embed"
								style={{
									position: "absolute",
									inset: 0,
									width: "100%",
									height: "100%",
									border: 0,
								filter: "saturate(0.3) brightness(0.7) contrast(1.05) sepia(0.2) hue-rotate(190deg)",
								opacity: 0.85,
								}}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Carte Cynthia Cosmétique"
							/>

							{/* Overlay doré subtil pour teinter la carte */}
							<div
								className="pointer-events-none absolute inset-0"
								style={{
									background:
										"radial-gradient(ellipse at 40% 50%, rgba(253,207,2,0.06) 0%, transparent 70%)",
								}}
							/>

							{/* ─── Carte adresse blanche (gauche) ─── */}
							<div className="absolute left-4 top-4 z-10 w-[260px] rounded-2xl bg-white p-5 shadow-card">
								<div className="flex items-start gap-3">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-deep/12 text-gold-deep">
										<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
										</svg>
									</div>
									<div>
										<h3 className="font-display text-base font-bold text-royal">
											Cynthia Cosmétique
										</h3>
										<p className="mt-1 font-sans text-[13px] text-slate-ink/70">
											Malepe Cour Suprême
											<br />
											(Domino Market), Douala
										</p>
									</div>
								</div>
								<a
									href="https://maps.google.com/?q=Malepe+Cour+Supreme+Domino+Market+Douala"
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-gold-deep transition-colors hover:text-gold"
								>
									Voir itinéraire
									<svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
									</svg>
								</a>
							</div>

							{/* ─── Carte parking (droite) ─── */}
							<div className="absolute bottom-4 right-4 z-10 flex gap-3">
								<div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm ring-1 ring-white/10">
									<div className="flex items-start gap-2.5">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-deep/12 text-gold-deep">
											<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
											</svg>
										</div>
										<div>
											<p className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-gold-deep">
												Stationnement disponible
											</p>
											<p className="mt-1 font-sans text-[12px] leading-snug text-white/65">
												Parking sécurisé pour nos clientes.
											</p>
										</div>
									</div>
								</div>
								<div className="hidden w-16 shrink-0 overflow-hidden rounded-xl lg:block">
									<img
										src="/assets/images/bureau-cynthia.png"
										alt="Entrée Cynthia Cosmétique"
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

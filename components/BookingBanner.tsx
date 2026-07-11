"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { waLink } from "@/lib/site";

export function BookingBanner() {
	return (
		<section
			aria-label="Réserver maintenant"
			className="relative overflow-hidden"
			style={{
				background:
					"linear-gradient(110deg, #060f2e 0%, #0a1d5a 40%, #071840 100%)",
			}}
		>
			{/* ─── Sparkles dorés ─── */}
			{[...Array(16)].map((_, i) => {
				const lefts = [22, 35, 48, 58, 65, 72, 78, 84, 88, 91, 94, 96, 40, 55, 70, 82];
				const tops  = [18, 60, 30, 72, 14, 48, 22, 68, 38, 75, 50, 28, 82, 8, 58, 42];
				const sizes = [1, 1, 1.5, 1, 1, 1, 1.5, 1, 1, 1, 1.5, 1, 1, 1, 1, 1.5];
				return (
					<motion.div
						key={i}
						className="pointer-events-none absolute"
						style={{
							width: `${sizes[i]}px`,
							height: `${sizes[i] * 5}px`,
							left: `${lefts[i]}%`,
							top: `${tops[i]}%`,
							background: `linear-gradient(to bottom, rgba(253,207,2,0.5), rgba(201,162,39,0.15))`,
							borderRadius: "1px",
						}}
						animate={{
							opacity: [0.1, 0.4, 0.1],
							rotate: [0, 180, 360],
						}}
						transition={{
							opacity: { duration: 2.8 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
							rotate: { duration: 10 + i * 0.6, repeat: Infinity, ease: "linear" },
						}}
					/>
				);
			})}

			<div className="relative flex items-center py-10 sm:min-h-[200px] lg:min-h-[260px]">
				{/* ─── LOTUS GAUCHE — visible sur lg, masqué mobile ─── */}
				<div
					className="pointer-events-none absolute left-0 top-1/2 hidden lg:block"
					style={{ width: "320px", height: "320px", marginTop: "-100px" }}
					aria-hidden
				>
					{/* Anneaux ondulants */}
					{[
						{ size: 280, dur: 3.2, delay: 0, opacity: 0.22 },
						{ size: 220, dur: 2.8, delay: 0.5, opacity: 0.30 },
						{ size: 170, dur: 2.4, delay: 1.0, opacity: 0.38 },
						{ size: 120, dur: 2.0, delay: 1.5, opacity: 0.48 },
					].map((ring, i) => (
						<motion.div
							key={i}
							className="absolute left-1/2 top-1/2 rounded-full"
							style={{
								width: ring.size,
								height: ring.size,
								marginLeft: -ring.size / 2,
								marginTop: -ring.size / 2,
								border: `1.5px solid rgba(253,207,2,${ring.opacity})`,
								background: "transparent",
							}}
							animate={{
								scale: [0.9, 1.1, 0.9],
								opacity: [ring.opacity * 0.5, ring.opacity, ring.opacity * 0.5],
							}}
							transition={{
								duration: ring.dur,
								repeat: Infinity,
								ease: "easeInOut",
								delay: ring.delay,
							}}
						/>
					))}

					{/* Lotus flottant */}
					<motion.img
						src="/assets/images/right-lotus-blue-section.png"
						alt="Lotus Cynthia"
						className="absolute left-1/2 top-1/2"
						style={{
							width: "260px",
							height: "auto",
							marginLeft: "-130px",
							marginTop: "-130px",
							filter:
								"drop-shadow(0 0 25px rgba(253,207,2,0.6)) drop-shadow(0 0 50px rgba(201,162,39,0.3))",
						}}
						animate={{
							y: [0, -8, 0],
							rotate: [0, 1.5, 0, -1.5, 0],
						}}
						transition={{
							y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
							rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
						}}
					/>

					{/* Reflet */}
					<div
						style={{
							position: "absolute",
							left: "50%",
							top: "72%",
							marginLeft: "-130px",
							width: "260px",
							height: "80px",
							overflow: "hidden",
							maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 90%)",
							WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 90%)",
						}}
					>
						<img
							src="/assets/images/right-lotus-blue-section.png"
							alt=""
							aria-hidden
							style={{
								width: "260px",
								height: "auto",
								transform: "scaleY(-1)",
								opacity: 0.1,
								filter: "drop-shadow(0 0 15px rgba(253,207,2,0.2))",
							}}
						/>
					</div>
				</div>

				{/* ─── CONTENU ─── */}
				<div className="container-luxe relative mx-auto flex w-full flex-col items-center gap-4 px-4 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:pl-[260px]">
					{/* Texte centré */}
					<div className="flex-1 text-center sm:py-6 lg:py-8">
						<motion.p
							initial={{ opacity: 0, y: 6 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
							className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80 sm:text-[11px]"
						>
							Préférez-vous réserver directement ?
						</motion.p>
						<motion.h2
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
							className="mt-2 font-display text-lg font-bold leading-tight text-white sm:text-xl lg:mt-3 lg:text-2xl"
							style={{ lineHeight: 1.15 }}
						>
							Prenez rendez-vous en ligne
							<br />
							en quelques clics.
						</motion.h2>
					</div>

					{/* Séparateur vertical doré — desktop */}
					<div
						className="hidden shrink-0 self-stretch lg:block"
						style={{
							width: "1px",
							background:
								"linear-gradient(to bottom, transparent, rgba(201,162,39,0.45) 25%, rgba(201,162,39,0.45) 75%, transparent)",
						}}
					/>

					{/* CTA desktop */}
					<motion.div
						initial={{ opacity: 0, x: 16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="hidden shrink-0 flex-col items-center gap-3 lg:flex"
						style={{ minWidth: "220px" }}
					>
						<motion.a
							href={waLink("Bonjour, je souhaite prendre rendez-vous en ligne.")}
							target="_blank"
							rel="noopener noreferrer"
							animate={{
								boxShadow: [
									"0 4px 20px rgba(253,207,2,.30)",
									"0 4px 20px rgba(253,207,2,.30), 0 0 0 8px rgba(253,207,2,0.10)",
									"0 4px 20px rgba(253,207,2,.30)",
								],
							}}
							transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
							whileHover={{ scale: 1.04, y: -2 }}
							whileTap={{ scale: 0.97 }}
							className="inline-flex items-center gap-2.5 rounded-full border border-gold/20 px-7 py-3.5 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-royal transition-all"
							style={{
								background: "linear-gradient(135deg, #FDCF02 0%, #e8b800 100%)",
								whiteSpace: "nowrap",
							}}
						>
							<CalendarCheck size={15} strokeWidth={2.5} />
							Réserver maintenant
						</motion.a>

						<p className="max-w-[200px] text-center font-sans text-[11px] leading-snug text-white/45">
							Choisissez votre soin, votre date,
							<br />
							et laissez-nous prendre soin de vous.
						</p>
					</motion.div>

					{/* CTA mobile */}
					<motion.a
						href={waLink("Bonjour, je souhaite prendre rendez-vous en ligne.")}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-royal sm:hidden"
						style={{ background: "linear-gradient(135deg, #FDCF02 0%, #e8b800 100%)" }}
					>
						<CalendarCheck size={14} strokeWidth={2.5} />
						Réserver
					</motion.a>
				</div>
			</div>
		</section>
	);
}

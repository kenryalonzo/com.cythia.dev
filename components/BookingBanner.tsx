"use client";

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

export function BookingBanner() {
	return (
		<section
			id="reservation"
			className="relative overflow-hidden"
			style={{ background: "linear-gradient(135deg, #071f5c 0%, #093485 45%, #0a3a90 100%)" }}
		>
			{/* ─── Particules dorées flottantes ─── */}
			{[...Array(6)].map((_, i) => (
				<motion.div
					key={i}
					className="pointer-events-none absolute rounded-full bg-gold/20"
					style={{
						width: `${[4, 6, 3, 5, 4, 6][i]}px`,
						height: `${[4, 6, 3, 5, 4, 6][i]}px`,
						left: `${[15, 28, 42, 58, 72, 85][i]}%`,
						top: `${[20, 70, 40, 25, 65, 45][i]}%`,
					}}
					animate={{
						y: [0, -12, 0],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 3 + i * 0.5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: i * 0.4,
					}}
				/>
			))}

			{/* ─── Lueur dorée ambiante gauche ─── */}
			<div
				className="pointer-events-none absolute -left-10 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-20"
				style={{
					background: "radial-gradient(circle, rgba(253,207,2,0.5) 0%, transparent 70%)",
					filter: "blur(40px)",
				}}
			/>

			{/* ─── Lueur dorée ambiante droite ─── */}
			<div
				className="pointer-events-none absolute -right-10 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full opacity-10"
				style={{
					background: "radial-gradient(circle, rgba(253,207,2,0.4) 0%, transparent 70%)",
					filter: "blur(50px)",
				}}
			/>

			<div className="container-luxe relative mx-auto flex h-[120px] max-w-[1200px] items-center px-6 sm:h-[130px] md:h-[140px] lg:h-[110px]">
				{/* ─── GAUCHE : Lotus doré animé ─── */}
				<div className="relative hidden shrink-0 items-center justify-center lg:flex" style={{ width: "160px" }}>
					{/* Halo de lueur pulsante */}
					<motion.div
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.3, 0, 0.3],
						}}
						transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
						className="absolute rounded-full"
						style={{
							width: "180px",
							height: "180px",
							background: "radial-gradient(circle, rgba(253,207,2,0.4) 0%, transparent 70%)",
						}}
					/>
					<motion.div
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.4, 0, 0.4],
						}}
						transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
						className="absolute rounded-full"
						style={{
							width: "140px",
							height: "140px",
							background: "radial-gradient(circle, rgba(201,162,39,0.5) 0%, transparent 70%)",
						}}
					/>

					{/* Anneaux concentriques */}
					<motion.div
						animate={{ rotate: 360 }}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						className="absolute"
						style={{
							width: "120px",
							height: "120px",
							border: "1px solid rgba(253,207,2,0.15)",
							borderRadius: "50%",
						}}
					/>
					<div
						className="absolute"
						style={{
							width: "90px",
							height: "90px",
							border: "1px solid rgba(253,207,2,0.1)",
							borderRadius: "50%",
						}}
					/>

					{/* Lotus flottant */}
					<motion.img
						src="/assets/images/right-lotus-blue-section.png"
						alt="Lotus doré"
						animate={{
							y: [0, -8, 0],
							rotate: [0, 1.5, 0, -1.5, 0],
						}}
						transition={{
							y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
							rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
						}}
						className="relative z-10"
						style={{
							width: "140px",
							height: "auto",
							filter: "drop-shadow(0 0 20px rgba(253,207,2,0.5)) drop-shadow(0 0 40px rgba(201,162,39,0.3))",
						}}
					/>
				</div>

				{/* ─── CENTRE : Texte ─── */}
				<div className="flex flex-1 flex-col justify-center px-4 lg:px-8">
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80"
					>
						Préférez-vous réserver directement ?
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="mt-1 font-display font-bold leading-[1.1] text-white"
						style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
					>
						Prenez rendez-vous en ligne
						<br />
						<span style={{ color: "#FAFAF8" }}>en quelques clics.</span>
					</motion.h2>
				</div>

				{/* ─── Séparateur vertical doré ─── */}
				<div className="mx-4 hidden h-16 w-px shrink-0 bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />

				{/* ─── DROITE : CTA + sous-texte ─── */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
					className="flex shrink-0 flex-col items-center gap-2"
				>
					<motion.a
						href={site.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						animate={{
							boxShadow: [
								"0 4px 20px rgba(253,207,2,.30)",
								"0 4px 20px rgba(253,207,2,.30), 0 0 0 8px rgba(253,207,2,0.15)",
								"0 4px 20px rgba(253,207,2,.30)",
							],
						}}
						transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
						whileHover={{ scale: 1.04, y: -1 }}
						whileTap={{ scale: 0.97 }}
						className="flex items-center gap-2.5 rounded-full px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-royal transition-all"
						style={{
							background: "linear-gradient(135deg, #FDCF02 0%, #C9A227 100%)",
							whiteSpace: "nowrap",
						}}
					>
						<CalendarCheck size={16} strokeWidth={2} />
						Réserver maintenant
					</motion.a>

					<p className="max-w-[200px] text-center font-sans text-[10px] leading-relaxed text-white/50">
						Choisissez votre soin, votre date,
						<br />
						et laissez-nous prendre soin de vous.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import logoPaths from "@/components/logo-paths.json";

type PathAttrs = {
	d: string;
	fill: string;
	stroke: string;
	strokeWidth: number;
	strokeLinejoin: string;
	fillRule: string;
};

const T1: Transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };
const T2: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

/* ─── Brand colours mapping ─── */
const FILLS = [
	"#093485",
	"#FDCF02",
	"#C9A227",
	"#F9D471",
	"#E4B752",
	"#FFFFFF",
] as const;

/* ─── Particules dorées flottantes ─── */
const PARTICLES = [
	{ x: 20, y: 30, size: 3, delay: 0.2, drift: 8 },
	{ x: 70, y: 20, size: 2, delay: 0.6, drift: 12 },
	{ x: 40, y: 60, size: 2.5, delay: 1.0, drift: 6 },
	{ x: 80, y: 50, size: 2, delay: 1.4, drift: 10 },
	{ x: 15, y: 55, size: 1.5, delay: 1.8, drift: 7 },
	{ x: 55, y: 15, size: 2, delay: 2.2, drift: 9 },
	{ x: 88, y: 65, size: 1.8, delay: 0.8, drift: 11 },
	{ x: 62, y: 75, size: 2.2, delay: 1.6, drift: 5 },
];

function Particles({ phase }: { phase: "enter" | "exit" }) {
	return (
		<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
			{PARTICLES.map((p) => (
				<motion.div
					key={p.delay}
					initial={{ opacity: 0, y: "120%", x: `${p.x}%` }}
					animate={
						phase === "exit"
							? { opacity: 0, y: "-20%", scale: 0 }
							: {
									opacity: [0, 0.7, 0.3, 0],
									y: [`${p.y}%`, `${p.y - p.drift}%`],
								}
					}
					transition={{
						duration: 3,
						delay: p.delay,
						ease: "easeOut",
						opacity: { duration: 2.5, times: [0, 0.3, 0.7, 1] },
					}}
					className="absolute h-1.5 w-1.5 rounded-full"
					style={{
						left: `${p.x}%`,
						width: p.size,
						height: p.size,
						background:
							"radial-gradient(circle, rgba(253,207,2,0.8) 0%, rgba(253,207,2,0) 100%)",
						boxShadow: "0 0 6px rgba(253,207,2,0.4)",
					}}
				/>
			))}
		</div>
	);
}

/* ─── Shimmer — reflet doré qui traverse le logo ─── */
function Shimmer({ phase }: { phase: "enter" | "exit" }) {
	return (
		<motion.div
			initial={{ x: "-120%", skewX: "-20deg" }}
			animate={
				phase === "exit"
					? { x: "120%", skewX: "-20deg", opacity: 0 }
					: { x: "120%", skewX: "-20deg" }
			}
			transition={{
				duration: 1.4,
				delay: phase === "exit" ? 0 : 1.6,
				ease: [0.22, 1, 0.36, 1],
			}}
			aria-hidden
			className="pointer-events-none absolute inset-0"
		>
			<div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
		</motion.div>
	);
}

/* ─── Logo SVG avec les vrais paths du logo ─── */
function LogoPaths({ phase }: { phase: "enter" | "exit" }) {
	const isExit = phase === "exit";

	const delays = [
		{ enter: 0.2, exit: 0 },
		{ enter: 0.55, exit: 0.05 },
		{ enter: 0.8, exit: 0.1 },
		{ enter: 1.05, exit: 0.15 },
		{ enter: 1.3, exit: 0.2 },
		{ enter: 1.5, exit: 0.25 },
	];

	const animProps = [
		{ initial: { opacity: 0, scale: 1.15, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 } },
		{ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } },
		{ initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } },
		{ initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 } },
		{ initial: { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 } },
		{ initial: { opacity: 0 }, animate: { opacity: 1 } },
	];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 500 500"
			className="h-full w-full"
			role="img"
			aria-label="Logo Cynthia Cosmétique"
		>
			{(logoPaths as PathAttrs[]).map((p, i) => {
				const exitAnim = [
					{ opacity: 0, scale: 0.85, y: -20 },
					{ opacity: 0, y: -12 },
					{ opacity: 0, y: -8 },
					{ opacity: 0, y: -6 },
					{ opacity: 0, y: -4 },
					{ opacity: 0 },
				][i];

				return (
					<motion.path
						key={i}
						initial={animProps[i].initial}
						animate={isExit ? exitAnim : animProps[i].animate}
						transition={{ ...(i === 0 ? T1 : T2), delay: isExit ? delays[i].exit : delays[i].enter }}
						d={p.d}
						fill={FILLS[i]}
						stroke={FILLS[i]}
						strokeWidth={p.strokeWidth || 0.25}
						strokeLinejoin={p.strokeLinejoin as "round" | "miter" | "bevel" | "inherit" | undefined || "round"}
						fillRule={p.fillRule as "nonzero" | "evenodd" | undefined || "nonzero"}
					/>
				);
			})}
		</svg>
	);
}

/* ─── Loader principal ─── */
export function Loader({ onComplete }: { onComplete: () => void }) {
	const [phase, setPhase] = useState<"enter" | "exit">("enter");

	useEffect(() => {
		const enter = setTimeout(() => setPhase("exit"), 2800);
		const done = setTimeout(() => onComplete(), 3500);
		return () => {
			clearTimeout(enter);
			clearTimeout(done);
		};
	}, [onComplete]);

	return (
		<AnimatePresence>
			{phase === "enter" || phase === "exit" ? (
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-ivory"
				>
					{/* Particules */}
					<Particles phase={phase} />

					{/* Glow ambiant */}
					<motion.div
						initial={{ opacity: 0, scale: 0.6 }}
						animate={
							phase === "exit"
								? { opacity: 0, scale: 1.6, transition: { duration: 0.8 } }
								: { opacity: 1, scale: 1 }
						}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
						aria-hidden
						className="pointer-events-none absolute inset-0"
					>
						<div
							className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] blur-3xl sm:h-[600px] sm:w-[600px]"
							style={{
								background:
									"radial-gradient(circle, rgba(253,207,2,0.25) 0%, rgba(9,52,133,0.06) 50%, transparent 70%)",
							}}
						/>
					</motion.div>

					{/* Anneau extérieur rotatif */}
					<motion.div
						animate={
							phase === "exit"
								? { rotate: 180, scale: 1.4, opacity: 0 }
								: { rotate: 360 }
						}
						transition={{
							rotate: {
								duration: phase === "exit" ? 0.6 : 8,
								repeat: phase === "enter" ? Infinity : 0,
								ease: phase === "exit" ? "easeIn" : "linear",
							},
							scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
							opacity: { duration: 0.3 },
						}}
						aria-hidden
						className="pointer-events-none absolute h-[340px] w-[340px] rounded-full border border-gold/10 sm:h-[420px] sm:w-[420px]"
					/>

					{/* Second anneau (contre-rotation) */}
					<motion.div
						animate={
							phase === "exit"
								? { rotate: -180, scale: 1.3, opacity: 0 }
								: { rotate: -360 }
						}
						transition={{
							rotate: {
								duration: phase === "exit" ? 0.8 : 12,
								repeat: phase === "enter" ? Infinity : 0,
								ease: phase === "exit" ? "easeIn" : "linear",
							},
							scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
							opacity: { duration: 0.3 },
						}}
						aria-hidden
						className="pointer-events-none absolute h-[280px] w-[280px] rounded-full border border-gold-deep/8 sm:h-[350px] sm:w-[350px]"
					/>

					{/* Logo */}
					<motion.div
						initial={{ scale: 0.7, opacity: 0 }}
						animate={
							phase === "exit"
								? { scale: 0.85, opacity: 0, y: -20 }
								: { scale: 1, opacity: 1, y: 0 }
						}
						transition={{
							duration: 0.9,
							delay: phase === "exit" ? 0 : 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative h-[200px] w-[200px] sm:h-[260px] sm:w-[260px]"
					>
						{/* Shimmer sur le logo */}
						<Shimmer phase={phase} />
						<LogoPaths phase={phase} />
					</motion.div>

					{/* Marque */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={
							phase === "exit"
								? { opacity: 0, y: -12 }
								: { opacity: 1, y: 0 }
						}
						transition={{
							duration: 0.7,
							delay: phase === "exit" ? 0.1 : 1.8,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="mt-6 text-center"
					>
						<h2 className="font-display text-xl font-bold tracking-tight text-royal sm:text-2xl">
							{site.brand}
						</h2>
						<motion.div
							initial={{ scaleX: 0 }}
							animate={
								phase === "exit" ? { scaleX: 0 } : { scaleX: 1 }
							}
							transition={{
								duration: 0.8,
								delay: phase === "exit" ? 0 : 2.0,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="mx-auto mt-3 h-px w-20 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
						/>
						<motion.p
							initial={{ opacity: 0, letterSpacing: "0.3em" }}
							animate={
								phase === "exit"
									? { opacity: 0 }
									: { opacity: 1, letterSpacing: "0.15em" }
							}
							transition={{
								duration: 0.6,
								delay: phase === "exit" ? 0.05 : 2.2,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="mt-2 font-sans text-[10px] uppercase tracking-[0.15em] text-gold-deep/60 sm:text-xs"
						>
							{site.baseline}
						</motion.p>
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}

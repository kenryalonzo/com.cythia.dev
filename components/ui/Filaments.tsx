"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FilamentsProps = {
	className?: string;
	/** opacity of the gold strokes (kept low — gold stays precious) */
	intensity?: "subtle" | "soft";
};

/** Static particle config — stable keys, no index-derived ids. */
const PARTICLES = [
	{ id: "p1", cx: 120, cy: 160, r: 1.6, duration: 6, delay: 0 },
	{ id: "p2", cx: 350, cy: 400, r: 2.5, duration: 7, delay: 0.6 },
	{ id: "p3", cx: 580, cy: 160, r: 1.6, duration: 8, delay: 1.2 },
	{ id: "p4", cx: 810, cy: 400, r: 2.5, duration: 9, delay: 1.8 },
	{ id: "p5", cx: 1040, cy: 160, r: 1.6, duration: 10, delay: 2.4 },
	{ id: "p6", cx: 1270, cy: 400, r: 2.5, duration: 11, delay: 3 },
] as const;

/**
 * Filaments — fine animated gold strokes drifting in the background.
 * Designed for LIGHT backgrounds: strokes use gold-deep at low opacity,
 * never dark. Purely decorative (aria-hidden).
 */
export function Filaments({ className, intensity = "subtle" }: FilamentsProps) {
	const op = intensity === "soft" ? 0.5 : 0.32;

	return (
		<div
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 overflow-hidden",
				className,
			)}
		>
			<svg
				role="presentation"
				className="absolute inset-0 h-full w-full"
				viewBox="0 0 1440 900"
				preserveAspectRatio="xMidYMid slice"
				fill="none"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="fil-gold" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#c9a227" stopOpacity="0" />
						<stop offset="50%" stopColor="#fdcf02" stopOpacity={op} />
						<stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
					</linearGradient>
				</defs>

				<motion.path
					d="M-50 220 C 300 120, 520 360, 820 240 S 1300 140, 1520 320"
					stroke="url(#fil-gold)"
					strokeWidth="1.4"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2.4, ease: "easeInOut" }}
				/>
				<motion.path
					d="M-50 560 C 280 660, 560 480, 880 600 S 1320 700, 1520 540"
					stroke="url(#fil-gold)"
					strokeWidth="1"
					initial={{ pathLength: 0, opacity: 0 }}
					whileInView={{ pathLength: 1, opacity: 0.8 }}
					viewport={{ once: true }}
					transition={{ duration: 2.8, ease: "easeInOut", delay: 0.3 }}
				/>
				{/* slow drifting particles — static config, stable keys */}
				{PARTICLES.map((p) => (
					<motion.circle
						key={p.id}
						cx={p.cx}
						cy={p.cy}
						r={p.r}
						fill="#fdcf02"
						animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
						transition={{
							duration: p.duration,
							repeat: Infinity,
							ease: "easeInOut",
							delay: p.delay,
						}}
					/>
				))}
			</svg>
		</div>
	);
}

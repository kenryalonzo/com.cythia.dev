"use client";

import { motion, type Variant } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = 28;

const variantsFor = (dir: Direction): Record<string, Variant> => ({
	hidden: {
		opacity: 0,
		y: dir === "up" ? offset : dir === "down" ? -offset : 0,
		x: dir === "left" ? offset : dir === "right" ? -offset : 0,
	},
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 },
	},
});

type RevealProps = {
	children: ReactNode;
	direction?: Direction;
	delay?: number;
	className?: string;
	as?: "div" | "section" | "li" | "span";
	once?: boolean;
	amount?: number;
};

/**
 * Reveal — fade + slide au scroll (whileInView).
 * Respecte prefers-reduced-motion via le CSS global.
 */
export function Reveal({
	children,
	direction = "up",
	delay = 0,
	className,
	as = "div",
	once = true,
	amount = 0.25,
}: RevealProps) {
	const MotionTag = motion[as];
	const variants = variantsFor(direction);

	return (
		<MotionTag
			className={className}
			variants={variants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once, amount }}
			transition={{ delay }}
		>
			{children}
		</MotionTag>
	);
}

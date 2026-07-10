"use client";

import { motion, useScroll, useTransform, type Variant } from "framer-motion";
import { type ReactNode, useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";
type AsType = "div" | "section" | "footer" | "li" | "span";

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
	as?: AsType;
	id?: string;
	once?: boolean;
	amount?: number;
	/** "once" = fade-in one shot ; "scroll" = apparition + disparition continue */
	variant?: "once" | "scroll";
};

/* Sous-composant interne — useScroll n'est appelé que pour le variant "scroll" */
function ScrollReveal({
	children,
	direction,
	className,
	as,
	id,
}: {
	children: ReactNode;
	direction: Direction;
	className?: string;
	as: AsType;
	id?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.12, 0.88, 1],
		[0, 1, 1, 0],
	);

	const y = useTransform(
		scrollYProgress,
		[0, 0.12, 0.88, 1],
		[
			direction === "up" || direction === "none"
				? 40
				: direction === "down"
					? -40
					: 0,
			0,
			0,
			direction === "down" || direction === "none"
				? -40
				: direction === "up"
					? 40
					: 0,
		],
	);

	const x = useTransform(
		scrollYProgress,
		[0, 0.12, 0.88, 1],
		[
			direction === "left" ? 40 : direction === "right" ? -40 : 0,
			0,
			0,
			direction === "right" ? 40 : direction === "left" ? -40 : 0,
		],
	);

	const style = { opacity, y, x };

	switch (as) {
		case "footer":
			return (
				<motion.footer
					ref={ref as never}
					id={id}
					className={className}
					style={style}
				>
					{children}
				</motion.footer>
			);
		case "section":
			return (
				<motion.section
					ref={ref as never}
					id={id}
					className={className}
					style={style}
				>
					{children}
				</motion.section>
			);
		case "li":
			return (
				<motion.li
					ref={ref as never}
					id={id}
					className={className}
					style={style}
				>
					{children}
				</motion.li>
			);
		case "span":
			return (
				<motion.span
					ref={ref as never}
					id={id}
					className={className}
					style={style}
				>
					{children}
				</motion.span>
			);
		default:
			return (
				<motion.div ref={ref} id={id} className={className} style={style}>
					{children}
				</motion.div>
			);
	}
}

/**
 * Reveal — fade + slide au scroll.
 *  - variant="once" (défaut) : animation d'entrée unique (whileInView)
 *  - variant="scroll"        : fondu continu (entrée + sortie) basé sur le progrès du scroll
 * Respecte prefers-reduced-motion via le CSS global.
 */
export function Reveal({
	children,
	direction = "up",
	delay = 0,
	className,
	as = "div",
	id,
	once = true,
	amount = 0.25,
	variant = "once",
}: RevealProps) {
	if (variant === "scroll") {
		return (
			<ScrollReveal direction={direction} className={className} as={as} id={id}>
				{children}
			</ScrollReveal>
		);
	}

	/* Mode "once" — comportement historique (whileInView) */
	const MotionTag = motion[as];
	const variants = variantsFor(direction);

	return (
		<MotionTag
			id={id}
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

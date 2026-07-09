"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline-gold" | "royal" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
	children: ReactNode;
	variant?: Variant;
	size?: Size;
	className?: string;
	icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
	href: string;
	external?: boolean;
};

type ButtonAsButton = CommonProps & {
	href?: undefined;
	onClick?: () => void;
	type?: "button" | "submit";
};

/**
 * Button — luxury pill CTA.
 *  - gold        : plein doré, texte bleu royal (CTA principal)
 *  - outline-gold: contour doré, fond transparent
 *  - royal       : plein bleu royal, texte ivoire
 *  - ghost       : texte seul, doré au hover
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
	const { children, variant = "gold", size = "md", className, icon } = props;

	const base = cn(
		"group/cta relative inline-flex items-center justify-center gap-2.5",
		"rounded-full font-sans font-semibold uppercase tracking-[0.06em]",
		"transition-colors duration-300 will-change-transform",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
	);

	const sizes: Record<Size, string> = {
		md: "px-6 py-3 text-xs",
		lg: "px-8 py-4 text-sm",
	};

	const variants: Record<Variant, string> = {
		gold: "bg-gold text-royal hover:bg-gold-warm",
		"outline-gold":
			"border border-gold-deep/50 text-royal bg-transparent hover:bg-gold-soft",
		royal: "bg-royal text-ivory hover:bg-royal-light",
		ghost: "text-royal hover:text-gold-deep bg-transparent px-2",
	};

	const content = (
		<span className="relative z-10 inline-flex items-center gap-2.5">
			{children}
			{icon ? (
				<span className="inline-flex h-4 w-4 items-center">{icon}</span>
			) : null}
		</span>
	);

	const motionProps = {
		whileHover: { scale: 1.03 },
		whileTap: { scale: 0.98 },
		transition: { type: "spring" as const, stiffness: 400, damping: 22 },
	};

	if (props.href !== undefined) {
		const isExternal = "external" in props && props.external;
		if (isExternal) {
			return (
				<motion.a
					href={props.href}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(base, sizes[size], variants[variant], className)}
					{...motionProps}
				>
					{content}
				</motion.a>
			);
		}
		return (
			<motion.div {...motionProps} className="inline-flex">
				<Link
					href={props.href}
					className={cn(base, sizes[size], variants[variant], className)}
				>
					{content}
				</Link>
			</motion.div>
		);
	}

	return (
		<motion.button
			type={props.type ?? "button"}
			onClick={props.onClick}
			className={cn(base, sizes[size], variants[variant], className)}
			{...motionProps}
		>
			{content}
		</motion.button>
	);
}

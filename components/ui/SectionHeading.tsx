import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	/** Highlight part of the title (rendered in gold). */
	highlight?: string;
	description?: string;
	align?: "left" | "center";
	className?: string;
	/** Title element for SEO hierarchy (h2 default on sections). */
	as?: "h2" | "h3";
	/** Override heading size. */
	size?: "sm" | "md" | "lg" | "xl";
};

/**
 * SectionHeading — eyebrow + Playfair title (+ optional gold highlight) + description.
 * Shared header used across editorial sections.
 */
export function SectionHeading({
	eyebrow,
	title,
	highlight,
	description,
	align = "center",
	className,
	as = "h2",
	size = "md",
}: SectionHeadingProps) {
	const sizes = {
		sm: "text-2xl sm:text-3xl",
		md: "text-3xl sm:text-4xl",
		lg: "text-4xl sm:text-5xl",
		xl: "text-5xl sm:text-6xl",
	};
	const Tag = as;
	return (
		<div
			className={cn(
				"flex flex-col gap-4",
				align === "center"
					? "items-center text-center"
					: "items-start text-left",
				className,
			)}
		>
			{eyebrow ? (
				<Reveal direction="none">
					<span className="eyebrow inline-flex items-center gap-2">
						<span className="h-px w-6 bg-gold-deep/60" aria-hidden />
						{eyebrow}
					</span>
				</Reveal>
			) : null}

			<Reveal delay={0.05}>
				<Tag
					className={cn(
						"max-w-2xl text-balance font-display font-bold tracking-tight text-royal",
						sizes[size],
						align === "center" ? "mx-auto" : "",
					)}
				>
					{title}{" "}
					{highlight ? (
						<span className="text-gradient-gold">{highlight}</span>
					) : null}
				</Tag>
			</Reveal>

			{description ? (
				<Reveal delay={0.1}>
					<p
						className={cn(
							"max-w-xl text-base leading-relaxed text-slate-ink/80",
							align === "center" ? "mx-auto" : "",
						)}
					>
						{description}
					</p>
				</Reveal>
			) : null}
		</div>
	);
}

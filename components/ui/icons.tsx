import type { SVGProps } from "react";

/**
 * Skin-concern line icons — fine gold line-art (1.5 stroke), rendered with
 * currentColor so the parent controls the tint. Used in SkinConcerns cards.
 */

const base = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
	"aria-hidden": true,
};

/* Acné & imperfections — a face profile with spots */
export function IconAcne(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="8.5" />
			<circle cx="9" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
			<circle cx="14.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
			<circle cx="10.5" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
			<circle cx="15" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
		</svg>
	);
}

/* Taches & hyperpigmentation — uneven surface with a marked spot */
export function IconSpots(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="8.5" />
			<path d="M5 13c2.2 1.6 4 2 7 2s4.8-.4 7-2" />
			<circle cx="12.5" cy="9" r="2" />
		</svg>
	);
}

/* Peau terne & fatiguée — a droplet crossed by a glow ray */
export function IconDull(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<path d="M12 3.5c2.6 3 4.8 5.4 4.8 8.3a4.8 4.8 0 0 1-9.6 0c0-2.9 2.2-5.3 4.8-8.3Z" />
			<path d="M9.5 12.2c.3 1.1 1 1.9 2 2.2" />
		</svg>
	);
}

/* Cicatrices & pores dilatés — a healed line with pore dots */
export function IconScars(props: SVGProps<SVGSVGElement>) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="8.5" />
			<path d="M8.5 8.5 15.5 15.5" />
			<circle cx="8.5" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
			<circle cx="15.5" cy="15.5" r="0.6" fill="currentColor" stroke="none" />
			<circle cx="15.5" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
			<circle cx="8.5" cy="15.5" r="0.6" fill="currentColor" stroke="none" />
		</svg>
	);
}

export const skinConcernIcons = {
	acne: IconAcne,
	spots: IconSpots,
	dull: IconDull,
	scars: IconScars,
} as const;

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const STAR_POSITIONS = [0, 1, 2, 3, 4] as const;

/** Stars — 5 gold stars (rating display). Decorative; labelled by parent context. */
export function Stars({
	className,
	size = 16,
}: {
	className?: string;
	size?: number;
}) {
	return (
		<div
			className={cn("inline-flex items-center gap-0.5", className)}
			role="img"
			aria-label="5 étoiles sur 5"
		>
			{STAR_POSITIONS.map((position) => (
				<Star
					key={position}
					size={size}
					className="fill-gold text-gold"
					strokeWidth={0}
					aria-hidden
				/>
			))}
		</div>
	);
}

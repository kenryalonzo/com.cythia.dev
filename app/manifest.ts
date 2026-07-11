import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Cynthia Cosmétique",
		short_name: "Cynthia",
		description:
			"L'expertise au service de votre peau et de votre beauté naturelle — Institut de beauté haut de gamme à Douala.",
		start_url: "/",
		display: "standalone",
		background_color: "#fafaf8",
		theme_color: "#093485",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}

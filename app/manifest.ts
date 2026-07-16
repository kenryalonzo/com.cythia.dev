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
			src: "/assets/logo-cynthia.png",
			sizes: "2048x2048",
			type: "image/png",
		},
	],
	};
}

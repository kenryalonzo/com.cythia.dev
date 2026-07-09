import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://cynthia-cosmetique.com"),
	title: {
		default: "Cynthia Cosmétique — L'expertise au service de votre peau",
		template: "%s · Cynthia Cosmétique",
	},
	description:
		"Soins experts du visage, microneedling, beauté du regard et accompagnement personnalisé à Douala. Révélez la meilleure version de votre peau.",
	keywords: [
		"Cynthia Cosmétique",
		"soin visage Douala",
		"microneedling",
		"microblading",
		"extensions de cils",
		"esthétique Cameroun",
	],
	authors: [{ name: "Cynthia Cosmétique" }],
	openGraph: {
		type: "website",
		locale: "fr_FR",
		title: "Cynthia Cosmétique — L'expertise au service de votre peau",
		description:
			"Soins experts, microneedling, beauté du regard et accompagnement personnalisé à Douala.",
		siteName: "Cynthia Cosmétique",
		images: [
			{
				url: "/assets/logo-cynthia.png",
				width: 1200,
				height: 1200,
				alt: "Cynthia Cosmétique",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cynthia Cosmétique",
		description:
			"L'expertise au service de votre peau et de votre beauté naturelle.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="fr"
			className={`${playfair.variable} ${inter.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-ivory">{children}</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { LoaderProvider } from "@/components/LoaderProvider";
import "./globals.css";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "600", "700"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600"],
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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "BeautySalon",
	name: "Cynthia Cosmétique",
	description:
		"Soins experts du visage, microneedling, beauté du regard et accompagnement personnalisé à Douala.",
	url: "https://cynthia-cosmetique.com",
	telephone: "+237696565756",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Malepe Cour Suprême (Domino Market)",
		addressLocality: "Douala",
		addressCountry: "CM",
	},
	openingHours: "Mo-Sa 08:00-19:00",
	image: "/assets/logo-cynthia.png",
	priceRange: "$$",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="fr"
			data-scroll-behavior="smooth"
			className={`${playfair.variable} ${inter.variable} h-full antialiased`}
		>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			</head>
			<body className="min-h-full flex flex-col bg-ivory">
				<LoaderProvider>{children}</LoaderProvider>
				<Script id="scroll-restore" strategy="beforeInteractive">
					{`if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);`}
				</Script>
				<script
					type="application/ld+json"
					/* biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD */
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}

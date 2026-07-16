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
	metadataBase: new URL("https://cynthiacosmetique.com"),
	title: {
		default: "Cynthia Cosmétique — L'expertise au service de votre peau",
		template: "%s · Cynthia Cosmétique",
	},
	description:
		"Soins experts du visage, microneedling, beauté du regard et accompagnement personnalisé à Douala. Révélez la meilleure version de votre peau.",
	keywords: [
		"Cynthia Cosmétique",
		"soin visage Douala",
		"institut beauté Douala",
		"microneedling",
		"microblading",
		"extensions de cils",
		"beauté du regard",
		"soin peau Cameroun",
		"esthétique Douala",
		"cosmétique Douala",
	],
	authors: [{ name: "Cynthia Cosmétique" }],
	creator: "Cynthia Cosmétique",
	publisher: "Cynthia Cosmétique",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		title: "Cynthia Cosmétique — L'expertise au service de votre peau",
		description:
			"Soins experts, microneedling, beauté du regard et accompagnement personnalisé à Douala.",
		siteName: "Cynthia Cosmétique",
		url: "https://cynthiacosmetique.com",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Cynthia Cosmétique — Institut de beauté haut de gamme à Douala",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cynthia Cosmétique",
		description:
			"L'expertise au service de votre peau et de votre beauté naturelle.",
	},
	icons: {
		icon: [
			{
				url: "/assets/logo-cynthia.png",
				sizes: "2048x2048",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/assets/logo-cynthia.png",
				sizes: "2048x2048",
				type: "image/png",
			},
		],
	},
	other: {
		"geo.region": "CM-LT",
		"geo.placename": "Douala",
		"geo.position": "4.0511;9.7679",
		ICBM: "4.0511, 9.7679",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "BeautySalon",
			"@id": "https://cynthiacosmetique.com/#organisation",
			name: "Cynthia Cosmétique",
			description:
				"Soins experts du visage, microneedling, beauté du regard et accompagnement personnalisé à Douala. Révélez la meilleure version de votre peau.",
			url: "https://cynthiacosmetique.com",
			telephone: "+237696565756",
			email: "cynthiacosmetique237@gmail.com",
			founder: { "@type": "Person", name: "Cynthia" },
			foundingDate: "2022",
			areaServed: "Douala, Cameroun",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Malepe Cour Suprême (Domino Market)",
				addressLocality: "Douala",
				addressRegion: "Littoral",
				addressCountry: "CM",
			},
			openingHoursSpecification: [
				{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					opens: "08:00",
					closes: "19:00",
				},
			],
			image: "/assets/logo-cynthia.png",
			priceRange: "$$",
			sameAs: [
				"https://instagram.com/cynthiacosmetique",
				"https://facebook.com/cynthiacosmetique",
				"https://tiktok.com/@cynthiacosmetique",
			],
		},
		{
			"@type": "BreadcrumbList",
			"@id": "https://cynthiacosmetique.com/#breadcrumb",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://cynthiacosmetique.com" },
				{ "@type": "ListItem", position: 2, name: "Prestations", item: "https://cynthiacosmetique.com/prestation" },
				{ "@type": "ListItem", position: 3, name: "À propos", item: "https://cynthiacosmetique.com/a-propos" },
				{ "@type": "ListItem", position: 4, name: "Contact", item: "https://cynthiacosmetique.com/contact" },
			],
		},
	],
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
				<script
					type="application/ld+json"
					/* biome-ignore lint/security/noDangerouslySetInnerHtml: static FAQ JSON-LD */
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: [
								{
									"@type": "Question",
									name: "Le microneedling fait-il mal ?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Un anesthésiant topique est appliqué avant la séance pour minimiser toute inconfort. La plupart des clientes décrivent une sensation de légères picotements.",
									},
								},
								{
									"@type": "Question",
									name: "Combien de séances faut-il ?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "En général, 3 à 6 séances sont recommandées pour des résultats optimaux, espacées de 3 à 4 semaines. Votre protocole sera adapté lors du diagnostic.",
									},
								},
								{
									"@type": "Question",
									name: "Comment se déroule une séance ?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Après un nettoyage approfondi, nous appliquons le protocole adapté à votre peau. La durée moyenne est de 45 minutes à 1 heure.",
									},
								},
								{
									"@type": "Question",
									name: "Quels sont les moyens de paiement ?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Nous acceptons les paiements en espèces, par Mobile Money (Orange Money, MTN) ainsi que par carte bancaire.",
									},
								},
							],
						}),
					}}
				/>
			</body>
		</html>
	);
}

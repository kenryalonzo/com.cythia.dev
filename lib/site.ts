/**
 * Cynthia Cosmétique — site-wide configuration & content.
 * Source of truth for navigation, contact, and WhatsApp links.
 */

export const site = {
	brand: "Cynthia Cosmétique",
	baseline:
		"L'expertise au service de votre peau et de votre beauté naturelle.",
	phone: "+237 696 56 57 56",
	phoneRaw: "+237696565756",
	address: "Malepe Cour Suprême (Domino Market)",
	city: "Douala",
	whatsapp: "237696565756", // numéro au format international sans "+"
	instagram: "https://www.instagram.com/cynthiacosmetique",
	facebook: "https://www.facebook.com/p/Cynthia-cosmetique-100069296700084/",
	tiktok: "https://www.tiktok.com/@cynthia.cosmtique5",
	linkedin: "https://www.linkedin.com/in/cynthia-cosmetique-7385a2216/",
	hours: {
		week: "Lundi - Samedi : 08h00 - 19h00",
		sunday: "Dimanche : Fermé",
	},
} as const;

export const navLinks = [
	{ label: "Accueil", href: "/" },
	{ label: "À propos", href: "/a-propos" },
	{ label: "Prestation", href: "/prestation" },
	{ label: "Contact", href: "/contact" },
] as const;

/** Builds a wa.me link with a prefilled message. */
export function waLink(
	message = "Bonjour Cynthia, je souhaite réserver un soin.",
) {
	return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

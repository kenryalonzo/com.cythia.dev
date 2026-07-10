import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

const SkinConcerns = dynamic(() =>
	import("@/components/SkinConcerns").then((m) => m.SkinConcerns),
);
const Transformation = dynamic(() =>
	import("@/components/Transformation").then((m) => m.Transformation),
);
const FeaturedTreatments = dynamic(() =>
	import("@/components/FeaturedTreatments").then((m) => m.FeaturedTreatments),
);
const Expertise = dynamic(() =>
	import("@/components/Expertise").then((m) => m.Expertise),
);
const Testimonials = dynamic(() =>
	import("@/components/Testimonials").then((m) => m.Testimonials),
);
const Explore = dynamic(() =>
	import("@/components/Explore").then((m) => m.Explore),
);
const FAQ = dynamic(() => import("@/components/FAQ").then((m) => m.FAQ));
const Footer = dynamic(() =>
	import("@/components/Footer").then((m) => m.Footer),
);

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col">
				<Hero />
				<SkinConcerns />
				<Transformation />
				<FeaturedTreatments />
				<Expertise />
				<Testimonials />
				<Explore />
				<FAQ />
			</main>
			<Footer />
		</>
	);
}

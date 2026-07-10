import { Expertise } from "@/components/Expertise";
import { Explore } from "@/components/Explore";
import { FeaturedTreatments } from "@/components/FeaturedTreatments";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SkinConcerns } from "@/components/SkinConcerns";
import { Testimonials } from "@/components/Testimonials";
import { Transformation } from "@/components/Transformation";

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
			</main>
		</>
	);
}

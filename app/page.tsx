import { FeaturedTreatments } from "@/components/FeaturedTreatments";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col">
				<Hero />
				<FeaturedTreatments />
			</main>
		</>
	);
}

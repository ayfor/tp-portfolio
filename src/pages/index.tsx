import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import GeoOrbitSection from "../components/sections/GeoOrbitSection";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<GeoOrbitSection />
			<ServicesSection />
		</>
	);
};

export default Home;

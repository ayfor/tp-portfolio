import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import GeoOrbitSection from "../components/sections/GeoOrbitSection";
import HeroSection from "../components/sections/HeroSection";
import CurveContentSection from "../components/sections/CurveContentSection";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<GeoOrbitSection />
			<CurveContentSection />
		</>
	);
};

export default Home;

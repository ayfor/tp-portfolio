import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import GeoOrbitSection from "../components/sections/GeoOrbitSection";
import CurveContentSection from "../components/sections/CurveContentSection";
import HeroSection from "../components/sections/HeroSection";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<GeoOrbitSection />
			{/* <CurveContentSection /> */}
		</>
	);
};

export default Home;

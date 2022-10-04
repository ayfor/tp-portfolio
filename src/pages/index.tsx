import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import GeoOrbitSection from "../components/GeoOrbitSection";
import CurveContentSection from "../components/sections/curve/CurveContentSection";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<GeoOrbitSection />
			<CurveContentSection />
		</>
	);
};

export default Home;

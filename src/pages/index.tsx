import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import GeoOrbitSection from "../components/GeoOrbitSection";
import SkewContentSection from "../components/SkewContentSection";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<GeoOrbitSection />
			<SkewContentSection />
		</>
	);
};

export default Home;

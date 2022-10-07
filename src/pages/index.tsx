import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import GeoOrbitSection from "../components/sections/GeoOrbitSection";
import CurveContentSection from "../components/sections/CurveContentSection";
import HeroSection from "../components/sections/HeroSection";

const Home: NextPage = () => {
	return (
		<>
			<Head key={0}>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
				<link href='https://fonts.googleapis.com/css2?family=Lato&display=swap' rel='stylesheet' />
			</Head>
			<Navbar />
			<HeroSection />
			<GeoOrbitSection />
			<CurveContentSection />
		</>
	);
};

export default Home;

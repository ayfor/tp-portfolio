import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import ThreeDBackground from "../components/ThreeDBackground";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<ThreeDBackground />
		</>
	);
};

export default Home;

import "../styles/globals.css";
import "../styles/curve-section.css";
import "../styles/react-fiber-custom.css";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default MyApp;

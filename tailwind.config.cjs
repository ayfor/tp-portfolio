/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			flex: {
				"01": "0 0 100%",
			},
			colors: {
				primary: "#000000",
				"purple-accent": "rgb(168 85 247)",
				"teal-accent": "rgb(20 184 166)",
				"violet-accent": "rgb(139 92 246)",
			},
		},
		fontFamily: {
			sans: "Poppins, ui-sans-serif, system-ui",
			serif: "Poppins, ui-serif, Georgia",
			mono: "Poppins, ui-monospace, SFMono-Regular",
			subtitle: "Lato, sans-serif",
			display: "Comfortaa, sans-serif",
		},
	},
	plugins: [],
};

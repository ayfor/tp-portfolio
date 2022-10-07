/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			flex: {
				"01": "0 0 100%",
			},
		},
		fontFamily: {
			subtitle: "Lato, sans-serif",
		},
	},
	plugins: [],
};

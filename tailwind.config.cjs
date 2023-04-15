/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Nanum Gothic, ui-sans-serif, system-ui",
			serif: "Nanum Gothic, ui-serif, Georgia",
			mono: "Nanum Gothic, ui-monospace, SFMono-Regular",
			subtitle: "Nanum Gothic, sans-serif",
			display: "Noto Serif JP, serif",
			// display: "Comfortaa, sans-serif",
		},
		dropShadow: {
			glow: ["0 0px 20px #60a5fa", "0 0px 30px #a855f7"],
		},
		extend: {
			flex: {
				"01": "0 0 100%",
			},
			colors: {
				primary: "#242424",
				highlight: "#047857",
				"purple-accent": "rgb(168 85 247)",
				"teal-accent": "rgb(20 184 166)",
				"violet-accent": "rgb(139 92 246)",
			},
			animation: {
				"gradient-x": "gradient-x 15s ease infinite",
				"gradient-y": "gradient-y 15s ease infinite",
				"gradient-xy": "gradient-xy 15s ease infinite",
			},
			keyframes: {
				"gradient-y": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "center top",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "center center",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				"gradient-xy": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	plugins: [],
};

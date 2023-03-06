/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			display: ["Poppins", "sans-serif"],
			body: ["Poppins", "sans-serif"],
		},
		extend: {
			fontSize: {
				14: "14px",
			},
			backgroundColor: {
				black: "#000000",
				"kijeka-blue": "#004B95",
				white: "#FFFFFF",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
				grayBG: "#F5F5F5",
				whiteBG: "#F5F5F5",
				grayBG2: "#D9D9D9",
			},
			colors: {
				"kijeka-blue": "#004B95",
				sidebar: "#004B95",
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				color: "rgba(0, 0, 0, 0.1)",
			},
			width: {
				400: "400px",
				760: "760px",
				780: "780px",
				800: "800px",
				1000: "1000px",
				1200: "1200px",
				1400: "1400px",
			},
			height: {
				80: "80px",
			},
			minHeight: {
				590: "590px",
			},
		},
	},
	plugins: [],
};

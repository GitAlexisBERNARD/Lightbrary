/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "Secondary1(Gold)": "#ecb365",
      "Primary2(White)": "#ffffff",
      "Primary1(Black)": "#0e0e0e",
      "Secondary2(Beige)": "#f3d1a2",
      "Secondary3": "#f7e0c1",
      "Gray1": "#d3d3d3",
      "Red": "#ff1f00",
    },
    fontFamily: {
      "ubuntu": "Ubuntu"
     },
    extend: {},
  },
  plugins: [],
}
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
      "text": "Ubuntu",
    },
    fontSize: {
      "menu":"14px",
      "connexion":"16px",
    },
    borderRadius: {
      "inscription":"101px",
    },
    extend: {
      gridTemplateColumns: {
        desktop: 'repeat(12, minmax(0, 86px))',
        mobile: 'repeat(4, minmax(0, 64px))'
      },
    },
  plugins: [],
  }
}
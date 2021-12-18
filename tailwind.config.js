module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        "test": "url('/assets/home/background-home-mobile.jpg')"
      }
    },
    colors: {
      "black": "#0B0D17",
      "violet": "#D0D6F9",
      "white": "#FFFFFF"
    }
  },
  plugins: [],
}

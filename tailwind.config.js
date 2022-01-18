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
    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlow': ['"Barlow Condensed"', 'sans-serif']
    },
    fontSize: {
      'h1': '150px',
      'h2': '100px',
      'h3': '56px',
      'h4': '32px',
      'h5': '28px',
      'subhead1': '28px',
      'subhead2': '14px',
      'navtext': '16px',
      'bodytext': '18px'
    },
    extend: {
      backgroundImage: {
        "home": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "dest": "url('/assets/destination/background-destination-mobile.jpg')",
        "dest-tablet": "url('/assets/destination/background-destination-tablet.jpg')",
        "dest-desktop": "url('/assets/destination/background-destination-desktop.jpg')",
        "crew": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')"
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

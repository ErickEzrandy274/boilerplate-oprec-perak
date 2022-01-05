module.exports = {
  content: [
    "./pages/**/*.{tsx,ts,js,jsx}",
    "./components/**/*.{tsx,ts,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        creamer: '#F1D78E',
        lightBlue: ' #6A7CC8',
        darkCreamer: '#EBC761',
        green: '#03BF67',
        lightGreen: `#03F182`,
        bayam: '#028F4D',
        brown: '#CC9D1A',
        darkYellow: `#E5B632`,
        pink: `#FAA299`,
        darkRed: `#EE200C`,

      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      width: {
        '19/20' : '95%',
        '31/32': '96.875%',
        '63/64': '98.4375%',
      },
      inset: {
        '1/8': '12.5%',
        '3/20': '15%',
        '1/5': '20%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '1/12' : '8.33%',
        '1/16': '6.25%'
      }
    },
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'mulish': ["'Mulish'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

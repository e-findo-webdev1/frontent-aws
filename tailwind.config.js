/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'logo': ['Rokkit']
    },
    extend: {
      colors: {
        'mcs-background': '#9892A4',
        'accent-color-1': '#CDBAB1',
        'accent-color-2': '#B69B8F',
        'accent-color-3': '#9F7C6E',
        'accent-color-4': '#DBCBC4',
        'accent-color-5': '#E4D4CD',
        'accent-color-green': '#7fe57f'
      }
    },
  },
  plugins: [],
}
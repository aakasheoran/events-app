const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        open: ['Open Sans', 'Lato', 'sans-serif'],
        fira: ['Fira', 'sans-serif'],
      },
      padding: {
        '10pc': '10%'
      }
    },
  },
  plugins: [],
}
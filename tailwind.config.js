const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      green_primary: '#4E8568',
      green_secondary: "#3EA7C8",
      gray_default: '#A8B2AD',
      gray_text: '#9A9A9A',
      gray_toggle: '#C4C4C4',
      gray_light: "#747474",
      danger_red: "#d9534f"
    }
    },
    variants: {
      extend: {
        opacity: ['disabled'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // import tailwind forms
   ],
}

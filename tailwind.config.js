/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', ...fontFamily.sans],
        'raleway': ['Raleway', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
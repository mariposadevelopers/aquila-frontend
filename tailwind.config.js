/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'inter': ['inter', ...defaultTheme.fontFamily.sans], 
        'clash': ['clash', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [daisyui],
    daisyui: {
    themes: ["bumblebee", "dark", "cupcake", "business", "light" ],
  },
}
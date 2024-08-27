/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        "neutralSilver": '#F5F7FA',
        "neutralGray": '#717171',
        "neutralDGrey": '#4D4D4D',
        "brandPrimary": '#4CAF4F',
        "gray900": '#18191F'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
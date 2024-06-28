/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepblue: "#00545F"
      }
        
      // colors: {
      //   ligtblue: "#00545F",
      // },
      // you can paste the color in the tailwind.config.js to the theme ther if you are using the color in other pages after that call it in the bg-lightblue in the hero.jsx
    },
  },
  plugins: [],
}


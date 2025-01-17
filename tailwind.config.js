/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        Anton: ['Anton', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif']
      },
      height:{
        customh1: "calc(100vh - 360px)",
        customh2: "calc(100vh - 230px)",
        customh3: "calc(100vh - 535px)",
        customh4: "calc(100vh - 666px)",
        customh5: "calc(100vh - 513px)",
        customh6: "calc(100vh - 100px)",
        customh7: "calc(100vh - 345px)",
        customh8: "calc(100vh - 324px)",
        customh9: "calc(100vh - 330px)",
        customh10: "calc(100vh - 200px)",
        customh11: "calc(100vh - 300px)",
        customh12: "calc(100vh - 278px)",
        customh13: "calc(100vh - 285px)",

      }
    },
  },
  plugins: [],
}


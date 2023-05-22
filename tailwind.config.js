/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue : '#214252',
        blue:"#4D4C7D",
        textBlue:"#848d92"
      }
    },
  },
  plugins: [],
}


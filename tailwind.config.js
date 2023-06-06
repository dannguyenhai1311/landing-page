/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      noto :['Noto Sans KR','sans-serif']
    },
    extend: { 
      colors:{
        primary:"#0066C1",
      }
    },
  },
  plugins: [],
}
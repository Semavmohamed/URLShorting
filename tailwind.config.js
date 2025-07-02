/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#3b3054',
        second:'#2acfcf ',
        backfooter:'#232027',
        buttonH:'#9be3e2',
        whiteP:'#bfbfbf',
        p1:'#221d2a',
        p2:'#35323ede',
        p3:'#9e9aa7de',
        background:'#f0f1f6',
      }
    },
  },
  plugins: [],
  
}


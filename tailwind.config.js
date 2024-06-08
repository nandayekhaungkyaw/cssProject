/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily:{
        "poppin":["Poppins", "sans-serif;"],
        "padauk":[" Padauk", "sans-serif"],
        "poppin-padauk":["Poppins"," Padauk","sans-serif"]
      },
      colors: {
        primary: '#E21B1B',
      secondary:"#03AED2"},
    },
    
  },
  plugins: [],
}


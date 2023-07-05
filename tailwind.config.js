/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/*.{js,jsx}",
  "./Pages/*.{js,jsx}",
  "./Components/*.{js,jsx}"
],
  theme: {
    container:{
      center:true
    },
    extend: {
      backgroundImage:{
        "img-home" : "url('./public/images/food6.jpg')",
        "img-about" : "url('./public/images/food7.jpg')"
      },
      backgroundColor:{
        "primary" : "#11161A"
      }
    },
  },
  plugins: [],
}


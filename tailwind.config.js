/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'railway':['Raleway','sans-seif'],
        'lato':['Lato', 'sans-serif'],
      }, 
      // backgroundImage: {
      //   'custom-img': "url('./images/bg-img.jpg')",
      // },
    },
  },
  plugins: [],
}
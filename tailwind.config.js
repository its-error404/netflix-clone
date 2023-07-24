module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        BebasNeue: ['Bebas Neue', 'sans-serif'],
      }, 
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
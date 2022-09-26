/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        todo: ['Licorice'],
        body: ['Montserrat']
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        
      },
      colors: {
        'grey-rgba': 'rgba(209, 213, 219, 0.54)',
      },
      boxShadow: {
        'standard': '0 2px 4px rgba(0, 0, 0, 0.54)',
        'light':'0 0 2px',
        'equal': '0 0 10px -2px rgba(0,0,0,.54)'
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
  
      })
    },
  },
  plugins: [],
}

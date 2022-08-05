/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'light-blue':"#e5edfa",
        'dark-blue':"#3b4f5b",
        'shadow-blue': "#caddf9",
        'purple':"#4a3071",
        'title':"#41505a",
        'subtitle':"#a1adb8",
        'slider': "#2e60ca",
        
      },
      fontSize:{
        'total-size': '70px',
        'total-sub-size': '40px',
        'input-title-size': '12px',
        'slider-value-size': '30px',
        'slider-lable-size': '20px',
      },
    },
  },
  plugins: [],
}

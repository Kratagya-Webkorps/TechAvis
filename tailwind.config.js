/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backg:"#FEFEFE",
        Logo: '#604CE6',
        primary:"#2639ED",
        secondary:"#565656",
        tertiary:"#757575",
        about_heading:"#072125",
        about_num:"#20484F",
        custom_blue:"#272D4E",
        services_heading:"#1D1D1D",
        services_span:"#464646",
        

      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

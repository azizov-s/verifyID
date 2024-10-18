/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {

      colors: {
        // pallete1: {
        //   primary: '#EEEEEE',
        //   secondary: '#00ADB5',
        //   accent: '#393E46',
        //   background: '#222831'
        // },
        // pallete2: {
        //   primary: '#222831',
        //   secondary: '#393E46',
        //   accent: '#00ADB5',
        //   background: '#EEEEEE'
        // },
        pallete1: {
          primary: '#E2F1E7',
          secondary: '#629584',
          accent: '#387478',
          background: '#243642'
        },
        pallete1: {
          primary: '#243642',
          secondary: '#387478',
          accent: '#629584',
          background: '#E2F1E7'
        },
      },
    },
    // } 
    // extend: {},
  },
  plugins: [
  ],
}
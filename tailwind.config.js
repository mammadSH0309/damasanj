/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      xs : '0px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily : {
      yekan : 'yekan',
      iphoneBold : 'iphoneBold',
      iphoneMedium: 'iphoneMedium',
      iphone: 'iphone',
      IosUltralight : 'IosUltralight', 
      FontIos : 'FontIos' , 
      Calibri : 'Calibri',
      CalibriBold : 'CalibriBold',
      CalibriLight : 'CalibriLight',
      IranSans : 'IranSans_Light',
      IranSansBold : 'IranSans_bold',
      IRANSansMedium : 'iranSans_Medium'
  
    },
    animation : 
    {
      "fade-in": "fade-in 0.6s ease-in", 
      "fade-out": "fade-out 0.6s ease-out"
    },
    "fade-in": {
      "0%": {
        "opacity": "0"
      },
      "100%": {
        "opacity": "1"
      }
    },
    "fade-out": {
      "0%": {
        "opacity": "1"
      },
      "100%": {
        "opacity": "0"
      }
    },
   
      
    extend: {
      animation: {
        'spin-veryslow': 'spin 3s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-medium': 'spin 1s linear infinite',
        'spin-fast': 'spin 0.7s linear infinite',
        'spin-veryfast': 'spin 0.2s linear infinite',
      }
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs")
  ],
  darkMode: "class"
}


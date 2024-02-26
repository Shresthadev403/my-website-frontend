/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '280px',
        sm: '360px',
        md: '640px',
        lg: '1366px',
        xl: '1920px',
      },
      colors: {
        'ghost-white': '#e6eaf6', //text on darker background
        'red-munsell': '#fd0c43', //buttton
        'cadet-gray': '#989ca6',  //text/background
        'french-gray': '#bdc1ca',//text
        'charcoal': '#3c404d',  //header
      },
    },
  },
  plugins: [],
};

//ghost-white:e6eaf6
//red-munsell:fd0c43
//cadet-gray:989ca6
// french-gray:bdc1ca
//charcoal:3c404d

// modified one
//header-gray: 3c404d
//text-gray: 525c68
//accent-teal: 17bab4
//accent-pink: f26176
//base-gray: efeff4

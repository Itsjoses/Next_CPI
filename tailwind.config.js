/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'purpleMenu':"#7063FE",
        light:{
          primary: '#dfe9f5',
          secondary: '#06A3DA',
          third: '#A0BFE0',
        },
        dark:{

        }
      }
    },
    minWidth:{
      '16': '4rem',
      '36': '9rem'
    },
    boxShadow:{
      custom: '0 20px 35px rgba(0, 0, 0, 0.1)'
    },
    boxShadow:{
      neonCustom: '-5px 5px 2em .3em #D24DB2, 5px -5px 2em .3em #B354D0'
    }
  },
  plugins: [],
}


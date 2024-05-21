/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./index.html",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      yellow: '#FFFF00',
      white: '#FFFFFF',
    },
    fontFamily: {
      'neue': ['Neue Haas Grotesk Display Pro', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'herobuttonbg': "url('/herobuttonbg.svg')",
        "rightgradient": "url('/rightgradient.svg')",
        "centergradient": "url('/centergradient.svg')",
        "topgradient": "url('/topgradient.svg')",
        "footerbg": "url('/footerbg.svg')",
      },
      boxShadow: {
        '3xl': '0 0 39px 4px rgba(0, 0, 0, 0.9)',
        '4xl': '0 0 30px 6px rgba(0, 0, 0, 0.9)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }    
    },
  },
  plugins: [],
}
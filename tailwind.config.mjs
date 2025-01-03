/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-primary': '#336633', // A brighter green for primary elements
        'forest-secondary': '#66CC66', // A vivid secondary color for highlights
        'forest-accent': '#CCFFCC', // A soft accent color for text
        'forest-text': '#F0FFF0', // A light text color for readability
        'forest-dark': '#254D25', // A darker shade for backgrounds
      },
      backgroundImage: {
        'forest-pattern': "url('/images/forest-bg.jpg')",
        'forest-gradient': 'linear-gradient(to bottom, rgba(26,47,17,0.9), rgba(26,47,17,0.7))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(52, 211, 153, 0.3)',
      }
    },
  },
  plugins: [],
};

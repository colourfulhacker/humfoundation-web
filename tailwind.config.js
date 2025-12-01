/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          900: '#4A0404', // Royal Maroon
          800: '#630808',
        },
        gold: {
          400: '#D4AF37', // Gold
          500: '#C5A028',
          600: '#B08D1E',
        },
        teal: {
          800: '#004D40', // Deep Teal
          900: '#00332A',
        },
        stone: {
          50: '#FAF9F6', // Off-white texture base
          100: '#F5F5F0',
          200: '#E6E6E0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'certificate-pattern': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      }
    },
  },
  plugins: [],
}
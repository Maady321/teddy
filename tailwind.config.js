/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosy: {
          100: '#ffe4e6', // light pastel pink
          200: '#fecdd3',
          300: '#fda4af',
          500: '#fb7185',
        },
        lavender: {
          100: '#f3e8ff',
          200: '#e9d5ff',
          500: '#a855f7',
        },
        cream: '#fffdd0',
        beige: '#f5f5dc',
        "love-red": '#ff6b6b',
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        handwriting: ['"Sacramento"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

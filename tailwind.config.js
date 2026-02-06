/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        card: '#0a0a0a',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        brand: ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

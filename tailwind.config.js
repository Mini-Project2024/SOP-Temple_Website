/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Adjust '10s' to your preferred duration
      },
      screens: {
        xs: '360px', // or whatever size you need
      },
    },
  },
  plugins: [],
}
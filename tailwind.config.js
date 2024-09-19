/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Slow spin animation
        'slideInLeft': 'slideInLeft 1.5s ease-in-out', // Slide in from left
        'slideInRight': 'slideInRight 1.5s ease-in-out', // Slide in from right
        'slideInUp': 'slideInUp 1.5s ease-in-out', // Slide in from bottom
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        xs: '360px',
        ms: '780px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        heffe: {
          dark: '#0D1B2A',
          gold: '#FFD700',
          soft: '#1B263B',
          gray: '#3A4750',
          white: '#E5E5E5',
          success: '#3CB371',
          warning: '#FFA500',
          error: '#DC3545',
          info: '#17A2B8',
        },
      },
      fontFamily: {
        radlush: ['Radlush', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown-800': '#4e3e2f',
        'brown-600': '#7b6651',
        'green-50': '#f0f8f4',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'table-2': '750px',
      'table-3': '1000px',
      'table-4': '1300px',
      'table-5': '1600px',
    },
    extend: {},
  },
  plugins: [],
}

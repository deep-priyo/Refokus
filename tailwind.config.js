/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi_variable': ['satoshi_variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        accent: '#f97316',
        neutral: '#64748b',
      }
    }
  },
  plugins: [],
}

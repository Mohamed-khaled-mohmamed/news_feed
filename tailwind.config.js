module.exports = {
  darkMode: 'class', // لإضافة دعم الثيم الداكن
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c', // لون الخلفية الداكنة
        darkText: '#a0aec0', // لون النص في الثيم الداكن
      },
    },
  },
  plugins: [],
}

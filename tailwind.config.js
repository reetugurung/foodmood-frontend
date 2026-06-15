/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2c2f24",       // Bistro dark font/bg
          primary: "#ad343e",    // Bistro red theme color
          secondary: "#4f5447",  // Bistro gray-green subtext
          lightBg: "#f9f9f7",    // Bistro soft cream background
        }
      }
    },
  },
  plugins: [],
};
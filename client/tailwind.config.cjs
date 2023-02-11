/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      main: "Poppins, sans-serif",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};

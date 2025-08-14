/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        usersnack: {
          primary: "#FF6B35",
          secondary: "#F7931E",
          dark: "#2C3E50",
          light: "#ECF0F1",
        },
      },
    },
  },
  plugins: [],
};

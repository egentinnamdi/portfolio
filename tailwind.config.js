/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        primaryTrans: "rgba(3, 7, 18, 0.5)",
        primaryTransDark: "rgba(3, 7, 18, 0.7)",
        text: "#6941C6",
        transparent: "rgba(105, 65, 198, 0.5)",
        util: "#03A5A9",
        secondary: "#110F17",
      },
    },
  },
  plugins: [],
};

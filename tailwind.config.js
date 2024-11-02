/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        text: "#6941C6",
        transparent: "rgba(105, 65, 198, 0.5)",
        util: "#03A5A9",
        secondary: "#110F17",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        700: "700px",
        580: "580px",
      },
      height: {
        600: "600px",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redHatDisplay: ["Red Hat Display", "sans-serif"],
        mullish: ["Mulish", "sans-serif"],
      },
      colors:{
        "primary": "#38036C",
        grey:{
          100: "#101828",
        },
        purple:{
          50: "#38036C",
        }
      }
    },
  },
  plugins: [],
};

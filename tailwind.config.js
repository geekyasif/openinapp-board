/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
        figtree: ["Figtree", "sans"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "pie-green": "#98D89E",
        "pie-yellow": "F6DC7D",
        "pie-red": "#EE8484",
        "card-green": "#7FCD93",
        "card-yellow": "#DEBF85",
        "card-pink": "#ECA4A4",
        "card-blue": "#A9B0E",
      },
    },
  },
  plugins: [],
};

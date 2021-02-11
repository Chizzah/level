module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#faed26",
        secondary: "#620a75",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

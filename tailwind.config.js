module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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

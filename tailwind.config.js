const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: { colors: colors },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss", require("@tailwindcss/forms")],
}

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.base"),
        },
        h1: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.5xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h2: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h3: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h4: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h5: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h6: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
      });
    })
  ],
}

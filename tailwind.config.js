const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        2: "0 1px 3px 0 rgb(11 17 29 / 98%), 0 1px 2px 0 rgb(9 18 35 / 90%)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.pink.700"),
            a: {
              color: theme("colors.pink.500"),
              "&:hover": {
                color: theme("colors.pink.700"),
              },
              code: { color: theme("colors.pink.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.pink.300"),
            a: {
              color: theme("colors.pink.400"),
              "&:hover": {
                color: theme("colors.pink.600"),
              },
              code: { color: theme("colors.pink.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.pink.700"),
              color: theme("colors.pink.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.pink.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.pink.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.pink.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.pink.500") },
              },
            },
            strong: { color: theme("colors.pink.300") },
            thead: {
              color: theme("colors.pink.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.pink.700"),
              },
            },
          },
        },
      }),
      colors: {
        pink: {
          50: "#fdf2f8",
          100: "#fce8f3",
          200: "#fad1e8",
          300: "#f8a3c1",
          400: "#f668a2",
          500: "#ec407a",
          600: "#d81b60",
          700: "#c2185b",
          800: "#ad1457",
          900: "#880e4f",
        },
      },
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
      boxShadow: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

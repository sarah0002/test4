/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        farve: {
          50: "#EBF1DF",
          100: "#32557B",
          200: "#F4FCFF",
        },
      },

      // Tilføj spacing
      // spacing: {
      //   m: '40px',
      // },

      // Tilføj fonte
      fontFamily: {
        titan: ["Titan One", "sans-serif"],
        worksans: ["Worksans", "sans-serif"],
        display: ["Courier", "monospace"],
      },

      // Typografi
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],
        large: ["2.5rem", { lineHeight: "3.75rem" }],
      },

      // Fontvægt
      fontWeight: {
        regular: "400",
      },

      // Borders
      // borderWidth: {
      //   DEFAULT: '1px',
      //   0: '0px',
      //   2: '2px',
      // },

      // Border-radius
      // borderRadius: {
      //   DEFAULT: '1.25rem',
      //   none: '0px',
      // },

      // Box shadows
      // boxShadow: {
      //   drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)',
      // },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};

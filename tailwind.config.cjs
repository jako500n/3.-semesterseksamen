/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Når farverne bruges til styling, skriver man eksempelvis xx-pink-700, da bindestregen automatisk tilføjes
      pink: {
        100: "#FEF8FB",
        200: "#FCEAF3",
        300: "#F9D4E6",
        400: "#F7C6DE",
        500: "#F5B8D6",
        600: "#EC78B1",
        700: "#E54392",
        800: "#D81E79",
        900: "#951553",
      },
      sienna: {
        100: "#FFA673",
        200: "#FF7A2D",
        300: "#DB5000",
        400: "#BB4400",
        500: "#A03A00",
        600: "#853000",
        700: "#6E2800",
        800: "#5B2100",
        900: "#4C1B00",
      },
      black: {
        100: "#666666",
        200: "#5A5A5A",
        300: "#4D4D4D",
        400: "#404040",
        500: "#333333",
        600: "#262626",
        700: "#1A1A1A",
        800: "#0D0D0D",
        900: "#000000",
      },
      white: {
        100: "#FFFFFF",
        200: "#F2F2F2",
        300: "#E6E6E6",
        400: "#D9D9D9",
        500: "#CCCCCC",
        600: "#C0C0C0",
        700: "#B3B3B3",
        800: "#A6A6A6",
        900: "#999999",
      },
      check: {
        green: "#2a5f38",
      },

      // tokens til components
      footer: "#FCEAF3",
      copyColor: "#5B2100",
    },
    fontSize: {
      // Ved styling skriver man eksempelvis text-H3_mobile

      // Fonthieraki til desktop
      H1_desktop: [
        "4.768rem",
        { letterSpacing: "0.08rem", fontWeight: "100", lineHeight: "103.9px" },
      ],
      H2_desktop: [
        "3.052rem",
        {
          letterSpacing: "0.08rem",
          fontWeight: "light",
          lineHeight: "66.5px",
        },
      ],
      H3_desktop: [
        "2.441rem",
        {
          letterSpacing: "0.08rem",
          fontWeight: "medium",
          lineHeight: "53.2px",
        },
      ],
      menulinks_desktop: [
        "1.953rem",
        { letterSpacing: "0.05rem", fontWeight: "book", lineHeight: "42.6px" },
      ],
      body_base: ["1rem", { letterSpacing: "0.10rem", lineHeight: "30px" }],
      body_semibold: [
        "1rem",
        { letterSpacing: "0.10rem", fontWeight: "600", lineHeight: "30px" },
      ],
      body_xs: ["0.8rem", { letterSpacing: "0.10rem", lineHeight: "30px" }],
      knaptekst_desktop: [
        "1.66rem",
        { letterSpacing: "0.10rem", lineHeight: "34px" },
      ],

      // Fonthieraki til mobile
      H1_mobile: [
        "3.052rem",
        { letterSpacing: "0.08rem", fontWeight: "light" },
      ],
      H2_mobile: [
        "1.953rem",
        { letterSpacing: "0.08rem", fontWeight: "light" },
      ],
      H3_mobile: [
        "1.563rem",
        { letterSpacing: "0.08rem", fontWeight: "medium" },
      ],
      menulinks_mobile: [
        "1.563rem",
        { letterSpacing: "0.08rem", fontWeight: "book" },
      ],
      knaptekst_mobile: [
        "1.188rem",
        { letterSpacing: "0.10rem", lineHeight: "24.4px" },
      ],
    },

    dropShadow: {
      knapShadow: "4px 4px 4px #0D0D0D",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

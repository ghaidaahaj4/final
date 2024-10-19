/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        amber: {
          200: "var(--amber_200)",
          "200_01": "var(--amber_200_01)",
          "200_7f": "var(--amber_200_7f)"
        },
        black: {
          900: "var(--black_900)",
          "900_19": "var(--black_900_19)",
          "900_26": "var(--black_900_26)",
          "900_33": "var(--black_900_33)",
          "900_3f": "var(--black_900_3f)",
          "900_7f": "var(--black_900_7f)",
          "900_99": "var(--black_900_99)"
        },
        blue_gray: {
          100: "var(--blue_gray_100)"
        },
        gray: {
          200: "var(--gray_200)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          900: "var(--gray_900)",
          "400_01": "var(--gray_400_01)",
          "600_01": "var(--gray_600_01)"
        },
        red: {
          900: "var(--red_900)",
          700: "var(--red_a700)"
        },
        white: {
          a700: "var(--white_a700)",
          a700_7f: "var(--white_a700_7f)"
        }
      },
      boxShadow: {
        xs: "0 0 22px -2px #0000003f",
        sm: "0 0 8px 2px #0000003f",
        md: "0 0 14px 4px #0000003f",
        lg: "0 0 6px 3px #0000003f"
      },
      fontFamily: {
        casaygontext: "CASaygonText",
        quicksand: "Quicksand",
        casaygon: "CA Saygon",
        cheesesauce: "Cheese Sauce",
        generalsans: "General Sans"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
};
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme"); //eslint-disable-line

//eslint-disable-line
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette"); //eslint-disable-line

const svgToDataUri = require("mini-svg-data-uri"); //eslint-disable-line

const colors = require("tailwindcss/colors"); //eslint-disable-line

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#141315",
        "secondary-black": "#1F2937",
        "primary-bg": "#111827",
        "primary-purple": "#CB80EE",
        "secondary-purple": "#9967EA",
        "tertiary-purple": "#E377CD",
        "dark-blue": "#261E44",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        gradient: "shift 3s ease infinite",
        gallery:
          "moscroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        shift: {
          "0%": {
            backgroundPosition: "0% 100%",
          },
          "100%": {
            backgroundPosition: "0% 10%",
          },
        },

        move: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"), //eslint-disable-line
    addVariablesForColors,
    //eslint-disable-next-line
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          //eslint-disable-next-line
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }), //eslint-disable-next-line
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }), //eslint-disable-next-line
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
} satisfies Config;

//eslint-disable-next-line
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

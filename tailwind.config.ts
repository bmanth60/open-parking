import { type Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";
import daisyui from "daisyui";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,svelte,js,ts,jsx,tsx,vue}"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",

          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",

          accent: "#37cdbe",
          "accent-focus": "#2ba69a",
          "accent-content": "#ffffff",

          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",

          "base-100": "#3b424e",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",

          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
      {
        light: {
          primary: "#570df8",
          "primary-focus": "#4506cb",
          "primary-content": "#ffffff",

          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",

          accent: "#37cdbe",
          "accent-focus": "#2ba69a",
          "accent-content": "#ffffff",

          neutral: "#3b424e",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#ced3d9",
          "base-content": "#1e2734",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
  theme: {
    screens: {
      md: "940px",
    },
    extend: {},
  },
  plugins: [tailwindTypography, daisyui],
};

export default config;

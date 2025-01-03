import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exotwo: ['"Exo 2"', "sans-serif"],
        viga: ['"Viga"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#028355",
          light: "#FE6E27",
          dark: "#1E40AF",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

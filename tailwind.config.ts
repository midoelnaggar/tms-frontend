import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "4xl": { max: "2560px" },
      "3xl": { max: "1920px" },
      "2xl": { max: "1440px" },
      "xl": { max: "1280px" },
      "lg": { max: "1024px" },
      "md": { max: "768px" },
      "sm": { max: "475px" },
      "xs": { max: "320px" }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          '50': '#ecfaff',
          '100': '#d5f3ff',
          '200': '#b4ebff',
          '300': '#81e1ff',
          '400': '#45ccff',
          '500': '#1baeff',
          '600': '#038fff',
          '700': '#0077f8',
          '800': '#055fc8',
          '900': '#0b529d',
          '950': '#071c35',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

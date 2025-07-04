// tailwind.config.js

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../design-system/packages/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--button-primary-bg))",
        "primary-foreground": "hsl(var(--button-primary-text))",

        cta: "hsl(var(--button-cta-bg))",
        "cta-foreground": "hsl(var(--button-cta-text))",

        success: "hsl(var(--button-success-bg))",
        "success-foreground": "hsl(var(--button-success-text))",

        warning: "hsl(var(--button-warning-bg))",
        "warning-foreground": "hsl(var(--button-warning-text))",

        destructive: "hsl(var(--button-destructive-bg))",
        "destructive-foreground": "hsl(var(--button-destructive-text))",
      },
    },
  },

  corePlugins: {
    preflight: false,
  },

  plugins: [],
};

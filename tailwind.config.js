// portal-prototype/tailwind.config.js

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include components package for proper class detection
    "./node_modules/@serendipetey/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Map design token CSS custom properties directly
        primary: {
          DEFAULT: "var(--button-primary-bg)",
          foreground: "var(--button-primary-text)",
          hover: "var(--button-primary-bg-hover)",
          focus: "var(--button-primary-bg-focus)",
        },

        cta: {
          DEFAULT: "var(--button-cta-bg)",
          foreground: "var(--button-cta-text)",
          hover: "var(--button-cta-bg-hover)",
          focus: "var(--button-cta-bg-focus)",
        },

        success: {
          DEFAULT: "var(--button-success-bg)",
          foreground: "var(--button-success-text)",
          hover: "var(--button-success-bg-hover)",
          focus: "var(--button-success-bg-focus)",
        },

        warning: {
          DEFAULT: "var(--button-warning-bg)",
          foreground: "var(--button-warning-text)",
          hover: "var(--button-warning-bg-hover)",
          focus: "var(--button-warning-bg-focus)",
        },

        destructive: {
          DEFAULT: "var(--button-destructive-bg)",
          foreground: "var(--button-destructive-text)",
          hover: "var(--button-destructive-bg-hover)",
          focus: "var(--button-destructive-bg-focus)",
        },

        // Additional design token mappings
        navy: {
          100: "var(--color-navy-100, #f0f3f7)",
          200: "var(--color-navy-200, #e3e9ef)",
          300: "var(--color-navy-300, #b6c3d2)",
          400: "var(--color-navy-400, #164b8f)",
          500: "var(--color-navy-500, #0e3a6c)",
          600: "var(--color-navy-600, #0a2d54)",
          700: "var(--color-navy-700, #07203c)",
        },
      },

      spacing: {
        // Map design token spacing
        4: "var(--space-4, 4px)",
        8: "var(--space-8, 8px)",
        12: "var(--space-12, 12px)",
        16: "var(--space-16, 16px)",
        24: "var(--space-24, 24px)",
        32: "var(--space-32, 32px)",
      },

      borderRadius: {
        DEFAULT: "var(--button-border-radius, 6px)",
        md: "var(--border-radius-md, 6px)",
      },
    },
  },

  // Remove preflight to avoid conflicts with design system
  corePlugins: {
    preflight: false,
  },

  plugins: [],
};

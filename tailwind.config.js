/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Map design system tokens to Tailwind
      colors: {
        // Primary colors (Navy)
        primary: {
          DEFAULT: "var(--color-navy-500)",
          foreground: "var(--color-white)",
          50: "var(--color-navy-50)",
          100: "var(--color-navy-100)",
          200: "var(--color-navy-200)",
          300: "var(--color-navy-300)",
          400: "var(--color-navy-400)",
          500: "var(--color-navy-500)",
          600: "var(--color-navy-600)",
          700: "var(--color-navy-700)",
          800: "var(--color-navy-800)",
          900: "var(--color-navy-900)",
        },

        // CTA colors (Brand Red)
        cta: {
          DEFAULT: "var(--color-red-500)",
          foreground: "var(--color-white)",
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
          300: "var(--color-red-300)",
          400: "var(--color-red-400)",
          500: "var(--color-red-500)",
          600: "var(--color-red-600)",
          700: "var(--color-red-700)",
          800: "var(--color-red-800)",
          900: "var(--color-red-900)",
        },

        // Success colors (Teal)
        success: {
          DEFAULT: "var(--color-success-500)",
          foreground: "var(--color-white)",
          50: "var(--color-success-50)",
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
          800: "var(--color-success-800)",
          900: "var(--color-success-900)",
        },

        // Warning colors (Amber)
        warning: {
          DEFAULT: "var(--color-warning-500)",
          foreground: "var(--color-warning-900)",
          50: "var(--color-warning-50)",
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
          500: "var(--color-warning-500)",
          600: "var(--color-warning-600)",
          700: "var(--color-warning-700)",
          800: "var(--color-warning-800)",
          900: "var(--color-warning-900)",
        },

        // Destructive colors
        destructive: {
          DEFAULT: "var(--color-destructive-500)",
          foreground: "var(--color-white)",
          50: "var(--color-destructive-50)",
          100: "var(--color-destructive-100)",
          200: "var(--color-destructive-200)",
          300: "var(--color-destructive-300)",
          400: "var(--color-destructive-400)",
          500: "var(--color-destructive-500)",
          600: "var(--color-destructive-600)",
          700: "var(--color-destructive-700)",
          800: "var(--color-destructive-800)",
          900: "var(--color-destructive-900)",
        },

        // Surface and background colors
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",

        // Border and text colors
        border: "var(--color-border)",
        muted: "var(--color-text-muted)",
        "muted-foreground": "var(--color-text-muted)",

        // Gray scale
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
      },

      // Spacing scale from design tokens
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        20: "var(--space-20)",
        24: "var(--space-24)",
        32: "var(--space-32)",
      },

      // Typography from design tokens
      fontSize: {
        xs: [
          "var(--typography-caption-size)",
          { lineHeight: "var(--typography-caption-line-height)" },
        ],
        sm: [
          "var(--typography-small-size)",
          { lineHeight: "var(--typography-small-line-height)" },
        ],
        base: [
          "var(--typography-body-size)",
          { lineHeight: "var(--typography-body-line-height)" },
        ],
        lg: [
          "var(--typography-h4-size)",
          { lineHeight: "var(--typography-h4-line-height)" },
        ],
        xl: [
          "var(--typography-h3-size)",
          { lineHeight: "var(--typography-h3-line-height)" },
        ],
        "2xl": [
          "var(--typography-h2-size)",
          { lineHeight: "var(--typography-h2-line-height)" },
        ],
        "3xl": [
          "var(--typography-h1-size)",
          { lineHeight: "var(--typography-h1-line-height)" },
        ],
      },

      // Border radius from design tokens
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
      },

      // Shadows from design tokens
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
    },
  },
  plugins: [],
};

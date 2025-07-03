/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // 🔥 CRITICAL: Explicitly list the CSS custom property classes that components use
  safelist: [
    // Specific classes the sidebar components actually use
    "bg-[var(--color-surface)]",
    "bg-[var(--color-surface-subtle)]",
    "bg-[var(--color-navy-100)]",
    "bg-[var(--color-navy-500)]",
    "bg-[var(--color-accent)]",
    "text-[var(--color-text-heading)]",
    "text-[var(--color-text-body)]",
    "text-[var(--color-text-muted)]",
    "text-[var(--color-text-link)]",
    "text-[var(--color-white)]",
    "border-[var(--color-border)]",
    "border-[var(--color-border-subtle)]",
    "border-b-[var(--color-border)]",
    "border-t-[var(--color-border)]",
    "hover:bg-[var(--color-accent)]",
    "hover:bg-[var(--color-navy-100)]",
    "hover:text-[var(--color-accent-foreground)]",
    "hover:text-[var(--color-text-link-hover)]",
    "focus-visible:bg-[var(--color-focus-500)]",
    "focus-visible:text-[var(--color-navy-500)]",
    "focus:ring-[var(--color-border-focus)]",
    "focus:ring-offset-[var(--color-surface)]",
    "data-[state=open]:bg-[var(--color-navy-100)]",
    // Additional classes for components
    "min-h-[44px]",
    "min-h-[40px]",
    "sm:min-h-[40px]",
    "w-4",
    "h-4",
    "w-5",
    "h-5",
    "w-8",
    "h-8",
  ],

  theme: {
    extend: {
      // ✅ Design token color mappings with direct hex values for reliability
      colors: {
        // Primary colors (Navy) - using direct hex values for reliability
        primary: {
          DEFAULT: "#0e3a6c", // --color-navy-500
          foreground: "#ffffff",
          50: "#f0f3f7",
          100: "#f0f3f7",
          200: "#e3e9ef",
          300: "#b6c3d2",
          400: "#164b8f",
          500: "#0e3a6c",
          600: "#0a2d54",
          700: "#07203c",
        },

        // Navy scale (matches design tokens)
        navy: {
          100: "#f0f3f7",
          200: "#e3e9ef",
          300: "#b6c3d2",
          400: "#164b8f",
          500: "#0e3a6c",
          600: "#0a2d54",
          700: "#07203c",
        },

        // CTA colors (Red) - using direct hex values for reliability
        cta: {
          DEFAULT: "#a30134", // --color-red-500
          foreground: "#ffffff",
          100: "#f5e6eb",
          200: "#ebccd7",
          300: "#d199af",
          400: "#b76687",
          500: "#a30134",
          600: "#7a0125",
          700: "#52011a",
        },

        // Red scale (matches design tokens)
        red: {
          100: "#f5e6eb",
          200: "#ebccd7",
          300: "#d199af",
          400: "#b76687",
          500: "#a30134",
          600: "#7a0125",
          700: "#52011a",
        },

        // Success colors - maps to your --color-success-* tokens (#007d85 teal)
        success: {
          DEFAULT: "#007d85", // Direct hex value for reliability
          foreground: "#ffffff",
          50: "#f0f8f9",
          100: "#e6f2f3",
          200: "#bfe0e2",
          300: "#99ced1",
          400: "#99ced1",
          500: "#007d85", // Main success color
          600: "#00646a",
          700: "#004b4f",
        },

        // Warning colors - using direct hex values for reliability
        warning: {
          DEFAULT: "#b75b00", // --color-warning-500
          foreground: "#000000",
          100: "#fdf7f0",
          200: "#f8efe6",
          300: "#efdcbf",
          400: "#e6c999",
          500: "#b75b00",
          600: "#924900",
          700: "#6e3700",
        },

        // Destructive colors - using direct hex values for reliability
        destructive: {
          DEFAULT: "#d92b2b", // --color-destructive-500
          foreground: "#ffffff",
          100: "#fbeaea",
          200: "#f7d5d5",
          300: "#efabab",
          400: "#e78181",
          500: "#d92b2b",
          600: "#b12222",
          700: "#8a1919",
        },

        // Gray scale - using direct hex values for reliability
        gray: {
          50: "#f7f8f9",
          100: "#f3f4f5",
          200: "#ebebeb",
          300: "#e4e4e4",
          400: "#b3b9bf",
          500: "#8f949a",
          600: "#6f757d",
          700: "#4c5258",
          800: "#2f2f2f",
          900: "#000000",
        },

        // 🔥 ADD: Support for component CSS custom property classes
        // These allow classes like bg-[var(--color-navy-500)] to work
        surface: "#ffffff", // --color-surface
        "surface-subtle": "#f7f8f9", // --color-surface-subtle
        border: "#e4e4e4", // --color-border
        "border-subtle": "#ebebeb", // --color-border-subtle
        "text-heading": "#0e3a6c", // --color-text-heading (navy-500)
        "text-body": "#4c5258", // --color-text-body (gray-700)
        "text-muted": "#8f949a", // --color-text-muted (gray-500)
        "text-link": "#a30134", // --color-text-link (red-500)
        "text-link-hover": "#7a0125", // --color-text-link-hover (red-600)
        accent: "#f0f3f7", // --color-accent (navy-100)
        "accent-foreground": "#0e3a6c", // --color-accent-foreground
        "focus-500": "#ff9900", // --color-focus-500
        white: "#ffffff", // --color-white
      },

      // ✅ Map spacing tokens to Tailwind
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

      // ✅ Map border radius tokens
      borderRadius: {
        sm: "var(--border-radius-sm)",
        DEFAULT: "var(--border-radius-md)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
      },

      // ✅ Map shadow tokens
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },

      // ✅ Map typography tokens
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
    },
  },
  plugins: [],
};

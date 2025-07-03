/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // 🔥 SIMPLIFIED: Minimal theme - design system handles all component styling
    extend: {
      // Only portal-specific utilities if needed
      // Component styling comes from @serendipetey/components CSS bundle
    },
  },

  // 🔥 IMPORTANT: Ensure Tailwind doesn't override component styles
  corePlugins: {
    // Let the design system handle all component base styles
    preflight: false,
  },

  plugins: [],
};

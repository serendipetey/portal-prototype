// src/components/DirectButtonTest.tsx

/**
 * 🎯 Direct Button Test
 *
 * Testing design tokens with direct CSS application
 */
export default function DirectButtonTest() {
  return (
    <div className="p-8 space-y-6 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🎯 Direct Button Test
        </h1>
        <p className="text-gray-600">
          Testing design tokens with direct CSS application
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Design System Button (Current)
        </h2>

        {/* Current design system button - NOT WORKING */}
        <div className="flex gap-4 items-center">
          <button
            className="inline-flex items-center justify-center px-4 py-2 border font-medium rounded-md"
            style={{
              backgroundColor: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
              borderColor: "var(--button-primary-border)",
              height: "var(--button-height-md)",
              borderRadius: "var(--button-border-radius)",
            }}
          >
            Direct CSS Test
          </button>

          <div className="text-sm text-gray-500">
            ← Should be navy blue with white text
          </div>
        </div>

        {/* Fallback test with known values */}
        <h2 className="text-lg font-semibold text-gray-900">
          Fallback Test (Known Values)
        </h2>

        <div className="flex gap-4 items-center">
          <button
            className="inline-flex items-center justify-center px-4 py-2 border font-medium rounded-md"
            style={{
              backgroundColor: "#0e3a6c", // We know this value from console
              color: "white",
              borderColor: "transparent",
              height: "40px",
              borderRadius: "6px",
            }}
          >
            Known Values Test
          </button>

          <div className="text-sm text-gray-500">
            ← Should definitely be navy blue
          </div>
        </div>

        {/* Debug info */}
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Debug Info:
          </h3>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• Design tokens loaded: ✅</p>
            <p>• --button-primary-bg: #0e3a6c (confirmed)</p>
            <p>• If first button is navy blue: CSS approach works ✅</p>
            <p>• If first button is white: CSS specificity issue ❌</p>
          </div>
        </div>
      </div>
    </div>
  );
}

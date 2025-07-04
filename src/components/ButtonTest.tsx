// src/components/ButtonTest.tsx

import { Button } from "@serendipetey/components";

/**
 * 🎯 Enhanced Button Test Component
 *
 * Testing button typography, styling, and design token integration.
 * Updated to include Poppins font validation.
 */
export default function ButtonTest() {
  // Check if CSS custom properties are loaded
  const checkCSSProperty = (propertyName: string): string => {
    if (typeof window === "undefined") return "N/A";

    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(propertyName)
      .trim();

    return value || "NOT FOUND";
  };

  return (
    <div className="p-8 space-y-6 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🎯 Button Test - Typography & Styling
        </h1>
        <p className="text-gray-600">
          Testing button with exact design token integration including Poppins
          typography
        </p>
      </div>

      {/* Typography Comparison */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Typography Validation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Reference Button */}
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Reference (Manual Styles)
            </h3>
            <Button
              variant="primary"
              size="md"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "0.025em",
              }}
            >
              Primary Button
            </Button>
            <p className="text-xs text-gray-500 mt-1">
              Poppins 600, 16px, 0.025em spacing
            </p>
          </div>

          {/* Design System Button */}
          <div className="p-4 border rounded bg-blue-50">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Design System
            </h3>
            <Button variant="primary" size="md">
              Primary Button
            </Button>
            <p className="text-xs text-gray-500 mt-1">
              Using design token typography
            </p>
          </div>
        </div>
      </div>

      {/* All Variants Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          All Button Variants
        </h2>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="md">
            Primary
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
          <Button variant="cta" size="md">
            CTA
          </Button>
          <Button variant="success" size="md">
            Success
          </Button>
          <Button variant="warning" size="md">
            Warning
          </Button>
          <Button variant="destructive" size="md">
            Destructive
          </Button>
          <Button variant="ghost" size="md">
            Ghost
          </Button>
        </div>
      </div>

      {/* Typography CSS Properties Debug */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Typography Properties Debug
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
          {[
            "--button-font-family",
            "--button-font-weight",
            "--button-font-size",
            "--button-line-height",
            "--button-letter-spacing",
            "--button-primary-bg",
          ].map((property) => {
            const value = checkCSSProperty(property);
            const isLoaded = value !== "NOT FOUND";

            return (
              <div
                key={property}
                className={`p-2 rounded border text-xs ${
                  isLoaded
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <span className={isLoaded ? "text-green-700" : "text-red-700"}>
                  {property}:
                </span>{" "}
                <span className="text-gray-600">{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expected vs Actual */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Expected Appearance
        </h3>

        <div className="p-4 bg-blue-50 rounded-md">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">
            ✅ Success Criteria:
          </h4>
          <div className="text-xs text-blue-700 space-y-1">
            <p>
              • <strong>Font:</strong> Poppins (Google Fonts loaded)
            </p>
            <p>
              • <strong>Weight:</strong> 600 (semibold - noticeably bolder)
            </p>
            <p>
              • <strong>Size:</strong> 16px base font size
            </p>
            <p>
              • <strong>Spacing:</strong> 0.025em letter spacing (slightly
              wider)
            </p>
            <p>
              • <strong>Color:</strong> Navy blue background (#0e3a6c), white
              text
            </p>
            <p>
              • <strong>Height:</strong> 40px for medium size
            </p>
            <p>
              • <strong>Border Radius:</strong> 6px rounded corners
            </p>
          </div>
        </div>

        {/* Comparison Status */}
        <div className="p-4 border rounded">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Status Check:
          </h4>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <span
                className={
                  checkCSSProperty("--button-font-family") !== "NOT FOUND"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {checkCSSProperty("--button-font-family") !== "NOT FOUND"
                  ? "✅"
                  : "❌"}
              </span>
              <span>Font family property loaded</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={
                  checkCSSProperty("--button-font-weight") === "600"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {checkCSSProperty("--button-font-weight") === "600"
                  ? "✅"
                  : "❌"}
              </span>
              <span>Font weight is 600 (semibold)</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={
                  checkCSSProperty("--button-letter-spacing") === "0.025em"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {checkCSSProperty("--button-letter-spacing") === "0.025em"
                  ? "✅"
                  : "❌"}
              </span>
              <span>Letter spacing is 0.025em</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

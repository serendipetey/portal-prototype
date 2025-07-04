// portal-prototype/src/components/CSSTokenDiagnostic.tsx

import { Button } from "@serendipetey/components";

/**
 * 🔍 CSS Design Token Diagnostic
 *
 * Checks which CSS custom properties are loaded and available
 * Identifies the architectural disconnect in the design system pipeline
 */
export default function CSSTokenDiagnostic() {
  // Function to check CSS custom property values
  const getCSSProperty = (propertyName: string): string => {
    if (typeof window === "undefined") return "N/A";

    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(propertyName)
      .trim();

    return value || "NOT FOUND";
  };

  // Check if property exists
  const hasProperty = (propertyName: string): boolean => {
    const value = getCSSProperty(propertyName);
    return value !== "NOT FOUND" && value !== "";
  };

  // Button-related CSS custom properties that should exist
  const buttonProperties = [
    // Typography
    "--button-font-family",
    "--button-font-weight",
    "--button-letter-spacing",
    "--button-line-height",

    // Sizes
    "--button-font-size-sm",
    "--button-font-size-md",
    "--button-font-size-lg",
    "--button-font-size-xl",

    // Heights
    "--button-height-sm",
    "--button-height-md",
    "--button-height-lg",
    "--button-height-xl",

    // Primary button
    "--button-primary-bg",
    "--button-primary-text",
    "--button-primary-bg-hover",

    // Outline button
    "--button-outline-bg",
    "--button-outline-text",
    "--button-outline-border",

    // CTA button
    "--button-cta-bg",
    "--button-cta-text",
    "--button-cta-bg-hover",
  ];

  const foundProperties = buttonProperties.filter(hasProperty);
  const missingProperties = buttonProperties.filter(
    (prop) => !hasProperty(prop)
  );

  return (
    <div className="p-8 space-y-8 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🔍 CSS Design Token Diagnostic
        </h1>
        <p className="text-gray-600">
          Checking which CSS custom properties are available to identify the
          pipeline issue
        </p>
      </div>

      {/* Overall Status */}
      <div
        className={`p-4 rounded-lg border-2 ${
          missingProperties.length === 0
            ? "bg-green-50 border-green-200"
            : "bg-red-50 border-red-200"
        }`}
      >
        <h2 className="text-lg font-semibold mb-2">
          {missingProperties.length === 0
            ? "✅ All Properties Found"
            : "❌ Missing Properties Detected"}
        </h2>
        <div className="text-sm">
          <div>✅ Found: {foundProperties.length} properties</div>
          <div>❌ Missing: {missingProperties.length} properties</div>
          <div>📊 Total Expected: {buttonProperties.length} properties</div>
        </div>
      </div>

      {/* Missing Properties */}
      {missingProperties.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-red-900">
            ❌ Missing CSS Properties
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
              {missingProperties.map((prop) => (
                <div key={prop} className="text-red-700">
                  {prop}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Found Properties */}
      {foundProperties.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-green-900">
            ✅ Found CSS Properties
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="grid grid-cols-1 gap-2 text-sm">
              {foundProperties.map((prop) => (
                <div key={prop} className="flex justify-between">
                  <span className="font-mono text-green-700">{prop}</span>
                  <span className="text-green-600 font-mono bg-white px-2 py-1 rounded text-xs">
                    {getCSSProperty(prop)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS Import Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          💉 CSS Import Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Expected Import */}
          <div className="p-4 border rounded bg-blue-50">
            <h3 className="font-semibold text-blue-900 mb-2">
              Expected CSS Import
            </h3>
            <code className="text-xs bg-white p-2 rounded block text-blue-800">
              @import "@serendipetey/design-tokens/dist/css/index.css";
            </code>
            <div className="text-sm text-blue-700 mt-2">
              ☝️ This should load all button tokens
            </div>
          </div>

          {/* Actual Status */}
          <div className="p-4 border rounded bg-yellow-50">
            <h3 className="font-semibold text-yellow-900 mb-2">
              Actual Status
            </h3>
            <div className="text-sm space-y-1">
              <div>CSS file imported: ✅ (in index.css)</div>
              <div>
                Properties loaded:{" "}
                {foundProperties.length > 0 ? "⚠️ Partial" : "❌ None"}
              </div>
              <div>Button styling: ❌ Using fallbacks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Buttons */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          🧪 Button Behavior Test
        </h2>
        <div className="p-4 border rounded bg-gray-50">
          <div className="flex gap-4 mb-4">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="cta">CTA</Button>
          </div>
          <div className="text-sm text-gray-600">
            If CSS properties are missing, buttons will use hardcoded fallback
            values instead of design tokens.
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          🛠️ Next Steps Based on Results
        </h2>
        <div className="p-4 border rounded bg-blue-50">
          {missingProperties.length > 0 ? (
            <div className="space-y-2 text-sm">
              <div className="font-semibold text-blue-900">
                ❌ Properties Missing - Fix Required:
              </div>
              <div>
                1. Rebuild design-system tokens: <code>pnpm run build</code>
              </div>
              <div>2. Check CSS import order in prototype</div>
              <div>3. Verify CSS file contents are correct</div>
              <div>4. Consider bundling CSS with component library</div>
            </div>
          ) : (
            <div className="space-y-2 text-sm">
              <div className="font-semibold text-green-900">
                ✅ Properties Found - Architecture Issue:
              </div>
              <div>1. Component not using properties correctly</div>
              <div>2. Investigate button component implementation</div>
              <div>3. Check CSS cascade and specificity</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

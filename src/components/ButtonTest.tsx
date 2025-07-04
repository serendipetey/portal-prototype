// src/components/ButtonTest.tsx

import { Button } from "@serendipetey/components";

/**
 * 🎯 Single Button Test Component
 *
 * Testing ONLY the Primary button to ensure it matches storybook design exactly.
 * This replaces the complex CSSVerificationTest for focused testing.
 */
export default function ButtonTest() {
  return (
    <div className="p-8 space-y-6 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🎯 Primary Button Test
        </h1>
        <p className="text-gray-600">
          Testing Primary button with design token integration
        </p>
      </div>

      {/* Single Primary Button Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Primary Button (Fixed Implementation)
        </h2>

        <div className="flex gap-4 items-center">
          <Button variant="primary" size="md">
            Primary
          </Button>

          {/* Reference for comparison */}
          <div className="text-sm text-gray-500">
            ← Should match storybook Primary button exactly
          </div>
        </div>

        {/* Token verification */}
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Design Tokens Used:
          </h3>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• Background: var(--button-primary-bg)</p>
            <p>• Text: var(--button-primary-text)</p>
            <p>• Border: var(--button-primary-border)</p>
            <p>• Height: var(--button-height-md)</p>
            <p>• Padding: var(--button-padding-x-md)</p>
            <p>• Border Radius: var(--button-border-radius)</p>
          </div>
        </div>

        {/* Expected appearance */}
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            Expected Appearance:
          </h3>
          <div className="text-xs text-blue-700 space-y-1">
            <p>• Navy blue background (#2C5C99 or similar)</p>
            <p>• White text</p>
            <p>• Rounded corners</p>
            <p>• 40px height (md size)</p>
            <p>• Hover: Darker blue background</p>
            <p>• Focus: Blue focus ring</p>
          </div>
        </div>
      </div>

      {/* Quick comparison with other variants (optional) */}
      <details className="bg-gray-50 p-4 rounded-md">
        <summary className="font-medium cursor-pointer text-gray-900">
          🔧 Quick Comparison (Click to expand)
        </summary>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button variant="primary" size="md">
            Primary
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
          <Button variant="cta" size="md">
            CTA
          </Button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          All buttons should now use their specific design tokens
        </p>
      </details>
    </div>
  );
}

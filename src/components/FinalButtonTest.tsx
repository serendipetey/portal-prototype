// src/components/FinalButtonTest.tsx

import { Button } from "@serendipetey/components";

/**
 * 🎯 Final Button Test - Design System Component
 *
 * Testing the ACTUAL Button component with design tokens
 */
export default function FinalButtonTest() {
  return (
    <div className="p-8 space-y-6 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🎉 Final Button Test - Design System Components
        </h1>
        <p className="text-gray-600">
          Testing the actual Button component with fixed design token
          integration
        </p>
      </div>

      <div className="space-y-6">
        {/* Primary Button Test */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Primary Button (Should Match Storybook)
          </h2>

          <div className="flex gap-4 items-center">
            <Button variant="primary" size="md">
              Primary
            </Button>

            <div className="text-sm text-gray-500">
              ← Should be navy blue (#0e3a6c) with white text
            </div>
          </div>
        </div>

        {/* All Variants Test */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            All Button Variants
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="cta">CTA</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Size Test */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Button Sizes
          </h2>

          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" size="xl">
              Extra Large
            </Button>
          </div>
        </div>

        {/* Success Criteria */}
        <div className="mt-6 p-4 bg-green-50 rounded-md">
          <h3 className="text-sm font-semibold text-green-900 mb-2">
            ✅ Success Criteria:
          </h3>
          <div className="text-xs text-green-700 space-y-1">
            <p>• Primary button: Navy blue background, white text</p>
            <p>• Outline button: Navy blue border and text, white background</p>
            <p>• All buttons: Proper sizing and rounded corners</p>
            <p>• Matches storybook design exactly</p>
            <p>• Clean import pipeline established</p>
          </div>
        </div>
      </div>
    </div>
  );
}

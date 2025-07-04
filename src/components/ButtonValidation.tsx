// portal-prototype/src/components/ButtonValidation.tsx

import { Button } from "@serendipetey/components";

/**
 * 🎯 Button Validation Component
 *
 * Tests button styling to match Storybook design exactly
 * Validates: Typography, Colors, Hover States, Sizing
 */
export default function ButtonValidation() {
  return (
    <div className="p-8 space-y-8 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🎯 Button Validation Test
        </h1>
        <p className="text-gray-600">
          Testing all button variants to match Storybook design exactly
        </p>
      </div>

      {/* All Variants Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
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

        <div className="text-sm text-gray-500 mt-2">
          ✅ Should have proper colors, hover states, and Poppins font (weight:
          500)
        </div>
      </div>

      {/* Size Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Button Sizes</h2>
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

        <div className="text-sm text-gray-500 mt-2">
          ✅ Heights: 32px, 40px, 48px, 56px | Font sizes: 12px, 14px, 16px,
          18px
        </div>
      </div>

      {/* Hover State Instructions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Hover State Test
        </h2>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex gap-4 mb-3">
            <Button variant="primary">Hover Me</Button>
            <Button variant="outline">Hover Me</Button>
            <Button variant="cta">Hover Me</Button>
          </div>
          <p className="text-sm text-yellow-700">
            <strong>Manual Test:</strong> Hover over buttons above. Primary
            should darken to #0a2d54, Outline should show hover effect.
          </p>
        </div>
      </div>

      {/* Typography Validation */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Typography Validation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Expected Typography
            </h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Font: Poppins</div>
              <div>Weight: 500 (medium)</div>
              <div>Letter spacing: 0.025em</div>
              <div>Line height: 1.5</div>
            </div>
          </div>

          <div className="p-4 border rounded bg-green-50">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Actual Button Sample
            </h3>
            <Button variant="primary" size="md">
              Primary Button
            </Button>
            <div className="text-xs text-gray-500 mt-2">
              Compare against expected values
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Validation Checklist
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">✅</span>
              <span>Poppins font loaded</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>Font weight: 500 (medium)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>Letter spacing: 0.025em</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>Hover states working</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>Primary: Navy #0e3a6c</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>Button heights correct</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>All variants render</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-4">🔍</span>
              <span>Matches Storybook exactly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

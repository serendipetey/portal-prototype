// portal-prototype/src/components/ButtonComparisonTest.tsx

import { Button } from "@serendipetey/components";
import { ButtonFixed } from "../components/ButtonFixed"; // We'll copy the fixed component here

/**
 * 🔬 Button Comparison Test
 *
 * Side-by-side comparison of old vs fixed button implementation
 * Tests if the architectural fix resolves all styling issues
 */
export default function ButtonComparisonTest() {
  return (
    <div className="p-8 space-y-8 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🔬 Button Architecture Fix Test
        </h1>
        <p className="text-gray-600">
          Comparing old button (using fallbacks) vs fixed button (using CSS
          custom properties correctly)
        </p>
      </div>

      {/* Primary Button Comparison */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Primary Button Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Old Button */}
          <div className="p-4 border rounded bg-red-50">
            <h3 className="text-sm font-semibold text-red-700 mb-3">
              ❌ Old Button (Architectural Issues)
            </h3>
            <div className="space-y-3">
              <Button variant="primary" size="md">
                Primary Button
              </Button>
              <Button variant="outline" size="md">
                Outline Button
              </Button>
              <Button variant="cta" size="md">
                CTA Button
              </Button>
            </div>
            <div className="text-xs text-red-600 mt-2">
              Using fallback values, broken hover states
            </div>
          </div>

          {/* Fixed Button */}
          <div className="p-4 border rounded bg-green-50">
            <h3 className="text-sm font-semibold text-green-700 mb-3">
              ✅ Fixed Button (CSS Custom Properties)
            </h3>
            <div className="space-y-3">
              <ButtonFixed variant="primary" size="md">
                Primary Button
              </ButtonFixed>
              <ButtonFixed variant="outline" size="md">
                Outline Button
              </ButtonFixed>
              <ButtonFixed variant="cta" size="md">
                CTA Button
              </ButtonFixed>
            </div>
            <div className="text-xs text-green-600 mt-2">
              Using design tokens directly, working hover states
            </div>
          </div>
        </div>
      </div>

      {/* All Variants Comparison */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          All Variants Comparison
        </h2>

        {/* Old Buttons */}
        <div className="p-4 border rounded bg-red-50">
          <h3 className="text-sm font-semibold text-red-700 mb-3">
            ❌ Old Buttons
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="cta">CTA</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Fixed Buttons */}
        <div className="p-4 border rounded bg-green-50">
          <h3 className="text-sm font-semibold text-green-700 mb-3">
            ✅ Fixed Buttons
          </h3>
          <div className="flex flex-wrap gap-2">
            <ButtonFixed variant="primary">Primary</ButtonFixed>
            <ButtonFixed variant="outline">Outline</ButtonFixed>
            <ButtonFixed variant="cta">CTA</ButtonFixed>
            <ButtonFixed variant="success">Success</ButtonFixed>
            <ButtonFixed variant="warning">Warning</ButtonFixed>
            <ButtonFixed variant="destructive">Destructive</ButtonFixed>
            <ButtonFixed variant="ghost">Ghost</ButtonFixed>
          </div>
        </div>
      </div>

      {/* Size Comparison */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Size Comparison</h2>

        {/* Old Sizes */}
        <div className="p-4 border rounded bg-red-50">
          <h3 className="text-sm font-semibold text-red-700 mb-3">
            ❌ Old Sizes (Hardcoded)
          </h3>
          <div className="flex items-center gap-2">
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
              XL
            </Button>
          </div>
          <div className="text-xs text-red-600 mt-2">
            Heights: h-8, h-10, h-12, h-14 (Tailwind classes)
          </div>
        </div>

        {/* Fixed Sizes */}
        <div className="p-4 border rounded bg-green-50">
          <h3 className="text-sm font-semibold text-green-700 mb-3">
            ✅ Fixed Sizes (CSS Custom Properties)
          </h3>
          <div className="flex items-center gap-2">
            <ButtonFixed variant="primary" size="sm">
              Small
            </ButtonFixed>
            <ButtonFixed variant="primary" size="md">
              Medium
            </ButtonFixed>
            <ButtonFixed variant="primary" size="lg">
              Large
            </ButtonFixed>
            <ButtonFixed variant="primary" size="xl">
              XL
            </ButtonFixed>
          </div>
          <div className="text-xs text-green-600 mt-2">
            Heights: 32px, 40px, 48px, 56px (Design token values)
          </div>
        </div>
      </div>

      {/* Hover Test Instructions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          🎯 Hover State Test
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-red-50">
            <h3 className="text-sm font-semibold text-red-700 mb-3">
              ❌ Old Hover (Broken)
            </h3>
            <div className="space-y-2">
              <Button variant="primary">Hover Me</Button>
              <Button variant="outline">Hover Me</Button>
              <Button variant="cta">Hover Me</Button>
            </div>
            <div className="text-xs text-red-600 mt-2">
              Only outline works, others use fallbacks
            </div>
          </div>

          <div className="p-4 border rounded bg-green-50">
            <h3 className="text-sm font-semibold text-green-700 mb-3">
              ✅ Fixed Hover (Working)
            </h3>
            <div className="space-y-2">
              <ButtonFixed variant="primary">Hover Me</ButtonFixed>
              <ButtonFixed variant="outline">Hover Me</ButtonFixed>
              <ButtonFixed variant="cta">Hover Me</ButtonFixed>
            </div>
            <div className="text-xs text-green-600 mt-2">
              All hover states should work correctly
            </div>
          </div>
        </div>
      </div>

      {/* Expected Results */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          📋 Expected Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h3 className="text-sm font-semibold text-blue-700 mb-2">
              Fixed Buttons Should Have:
            </h3>
            <div className="text-sm space-y-1">
              <div>✅ Poppins font, weight 500</div>
              <div>✅ Correct colors (#0e3a6c navy for primary)</div>
              <div>✅ Working hover states for ALL variants</div>
              <div>✅ Exact heights: 32px, 40px, 48px, 56px</div>
              <div>✅ No black shadows or artifacts</div>
              <div>✅ Letter spacing: 0.025em</div>
            </div>
          </div>

          <div className="p-4 border rounded bg-yellow-50">
            <h3 className="text-sm font-semibold text-yellow-700 mb-2">
              If Fixed Buttons Work:
            </h3>
            <div className="text-sm space-y-1">
              <div>🔧 Replace old button component</div>
              <div>📦 Update component library architecture</div>
              <div>🚀 Deploy to design system</div>
              <div>✨ Perfect Storybook match achieved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

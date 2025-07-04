// portal-prototype/src/pages/Dashboard.tsx

import { Button } from "@serendipetey/components";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🔍 Design System Pipeline Test
        </h1>
        <p className="text-gray-600">
          Testing clean import and usage of Button component from design system
        </p>
      </div>

      {/* Pipeline Status */}
      <div className="p-4 border rounded bg-blue-50">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">
          Pipeline Status
        </h2>
        <div className="text-sm space-y-1">
          <div>✅ Design system builds successfully</div>
          <div>
            ✅ Component library installed: @serendipetey/components@1.0.2
          </div>
          <div>✅ Clean import works: import Button from component library</div>
          <div>🔍 Testing button rendering and functionality...</div>
        </div>
      </div>

      {/* Clean Button Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Button Component Test
        </h2>

        <div className="p-4 border rounded">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            All Variants (Clean Import)
          </h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="cta">CTA</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            All Sizes
          </h3>
          <div className="flex items-center gap-3 mb-4">
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

          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Hover Test
          </h3>
          <div className="flex gap-3">
            <Button variant="primary">Hover Me</Button>
            <Button variant="outline">Hover Me</Button>
            <Button variant="cta">Hover Me</Button>
          </div>
        </div>
      </div>

      {/* Expected Issues (Pre-Fix) */}
      <div className="p-4 border rounded bg-yellow-50">
        <h2 className="text-lg font-semibold text-yellow-900 mb-2">
          Expected Issues (Before Permanent Fix)
        </h2>
        <div className="text-sm text-yellow-700 space-y-1">
          <div>
            ❌ Buttons use hardcoded fallback values (not design tokens)
          </div>
          <div>❌ Only outline hover state works</div>
          <div>
            ❌ Sizing uses Tailwind classes (h-8, h-10, etc.) instead of 32px,
            40px, etc.
          </div>
          <div>❌ Typography may not use Poppins weight 500 correctly</div>
          <div>✅ But components render and import cleanly!</div>
        </div>
      </div>

      {/* Pipeline Success Criteria */}
      <div className="p-4 border rounded bg-green-50">
        <h2 className="text-lg font-semibold text-green-900 mb-2">
          Pipeline Verification ✅
        </h2>
        <div className="text-sm text-green-700 space-y-1">
          <div>✅ Design system builds without errors</div>
          <div>✅ Component library publishes correctly</div>
          <div>✅ Prototype imports components cleanly</div>
          <div>✅ No module resolution errors</div>
          <div>✅ Ready for permanent fix implementation</div>
        </div>
      </div>

      {/* Simple Dashboard Content */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-semibold text-gray-900">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900">1,234</p>
            <Button variant="primary" size="sm" className="mt-2">
              View Details
            </Button>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-semibold text-gray-900">Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">$45,678</p>
            <Button variant="outline" size="sm" className="mt-2">
              View Report
            </Button>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-semibold text-gray-900">Projects</h3>
            <p className="text-2xl font-bold text-gray-900">87</p>
            <Button variant="cta" size="sm" className="mt-2">
              Create New
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

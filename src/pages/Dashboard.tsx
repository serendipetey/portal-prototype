// portal-prototype/src/pages/Dashboard.tsx

import { Button, Input } from "@serendipetey/components";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          🔍 Design System Pipeline Test
        </h1>
        <p className="text-gray-600">
          Testing clean import and usage of Button and Input components from
          design system
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
            ✅ Component library installed: @serendipetey/components@1.0.3
          </div>
          <div>✅ Clean import works: import Button from component library</div>
          <div>🔍 Testing Input import and rendering...</div>
        </div>
      </div>

      {/* Button Component Test */}
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
            States & Loading
          </h3>
          <div className="flex items-center gap-3">
            <Button variant="primary" loading>
              Loading
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </div>

      {/* NEW: Input Component Test */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Input Component Test
        </h2>

        <div className="p-4 border rounded space-y-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Basic Input States
          </h3>

          {/* Basic Input */}
          <div className="space-y-2">
            <Input label="Basic Input" placeholder="Enter your text here..." />
          </div>

          {/* Required Input */}
          <div className="space-y-2">
            <Input
              label="Required Field"
              labelState="required"
              placeholder="This field is required"
            />
          </div>

          {/* Optional Input */}
          <div className="space-y-2">
            <Input
              label="Optional Field"
              labelState="optional"
              placeholder="This field is optional"
            />
          </div>

          {/* Input with Hint Text */}
          <div className="space-y-2">
            <Input
              label="Email Address"
              labelState="required"
              placeholder="you@example.com"
              hintText="We'll never share your email with anyone else."
            />
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3 pt-4">
            Input States (Error/Success)
          </h3>

          {/* Error State */}
          <div className="space-y-2">
            <Input
              label="Password"
              labelState="required"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters long"
              variant="error"
            />
          </div>

          {/* Success State */}
          <div className="space-y-2">
            <Input
              label="Username"
              labelState="required"
              placeholder="Choose a username"
              success="Username is available!"
              variant="success"
            />
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3 pt-4">
            Input Sizes
          </h3>

          {/* Different Sizes */}
          <div className="space-y-3">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input (default)" />
            <Input size="lg" placeholder="Large input" />
            <Input size="xl" placeholder="Extra large input" />
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3 pt-4">
            Input Types
          </h3>

          {/* Different Input Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone number" />
            <Input type="number" placeholder="Age" />
            <Input type="date" />
            <Input type="search" placeholder="Search..." />
            <Input type="url" placeholder="Website URL" />
          </div>
        </div>
      </div>

      {/* Pipeline Validation Status */}
      <div className="p-4 border rounded bg-green-50">
        <h2 className="text-lg font-semibold text-green-900 mb-2">
          Pipeline Validation Results
        </h2>
        <div className="text-sm space-y-1">
          <div>🔍 Testing import/export pipeline...</div>
          <div>🔍 Testing design token loading...</div>
          <div>🔍 Testing component rendering...</div>
          <div>🔍 Testing TypeScript support...</div>
          <div className="text-green-700 font-medium mt-2">
            ✅ If you can see Input components above, the pipeline is working!
          </div>
        </div>
      </div>
    </div>
  );
}

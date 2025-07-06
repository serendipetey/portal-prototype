// portal-prototype/src/pages/Dashboard.tsx

import { useState } from "react";
import { Button, Input } from "@serendipetey/components";

export default function Dashboard() {
  const [interactiveLoading, setInteractiveLoading] = useState(false);

  const handleLoadingTest = () => {
    setInteractiveLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setInteractiveLoading(false);
    }, 3000);
  };

  return (
    <div className="p-8 space-y-8 bg-white">
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
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded mb-3">
            <p className="text-sm text-yellow-700 mb-2">
              <strong>Animation Test:</strong> The loading buttons below should
              show a spinning animation. If you don't see spinning, the
              tailwindcss-animate plugin needs to be configured.
            </p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Button variant="primary" loading>
              Loading
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Interactive Loading Test
          </h3>
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              loading={interactiveLoading}
              onClick={handleLoadingTest}
              disabled={interactiveLoading}
            >
              {interactiveLoading ? "Loading..." : "Click to Test Loading"}
            </Button>
            <span className="text-sm text-gray-500">
              {interactiveLoading
                ? "🔄 Should show spinning animation"
                : "Click to see 3-second loading animation"}
            </span>
          </div>
        </div>
      </div>

      {/* Input Component Test */}
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
              hintText="Password must be at least 8 characters long"
              error="Password is too weak - add special characters"
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
          <div>
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

          <h3 className="text-sm font-semibold text-gray-700 mb-3 pt-4">
            Disabled Input
          </h3>

          {/* Disabled Input */}
          <div>
            <Input label="Disabled Input" value="Cannot edit this" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

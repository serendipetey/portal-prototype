// src/components/ButtonDebugTest.tsx
import { Button } from "@serendipetey/components";

export default function ButtonDebugTest() {
  return (
    <div className="p-6 space-y-4 bg-gray-50 border rounded-lg">
      <h3 className="text-lg font-semibold">🔍 Button Debug Test</h3>

      {/* Test all variants */}
      <div className="space-y-3">
        <div className="flex gap-2 items-center">
          <Button variant="primary">Primary</Button>
          <span className="text-xs text-gray-600">
            Should be navy background
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="outline">Outline</Button>
          <span className="text-xs text-gray-600">
            Should be navy border, transparent bg
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="cta">CTA</Button>
          <span className="text-xs text-gray-600">
            Should be red background
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="success">Success</Button>
          <span className="text-xs text-gray-600">
            Should be teal background
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="destructive">Destructive</Button>
          <span className="text-xs text-gray-600">
            Should be red background
          </span>
        </div>
      </div>

      {/* Check if Button component has expected props */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>Button component imported from: @serendipetey/components</p>
        <p>Component exists: {Button ? "✅ Yes" : "❌ No"}</p>
        <p>Component type: {typeof Button}</p>
      </div>
    </div>
  );
}

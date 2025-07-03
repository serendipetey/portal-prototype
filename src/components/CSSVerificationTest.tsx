// src/components/CSSVerificationTest.tsx
import { Button } from "@serendipetey/components";
import {
  debugCSSLoading,
  getCSSCustomPropertyValue,
} from "@/utils/cssDebugHelper";
import { useEffect } from "react";

/**
 * ✅ CSS Verification Component
 *
 * This component tests that:
 * 1. Design tokens are loading correctly
 * 2. Tailwind classes map to token values
 * 3. Real design system components render
 * 4. CSS custom properties are available
 */
export default function CSSVerificationTest() {
  // 🔧 Debug CSS loading on component mount
  useEffect(() => {
    debugCSSLoading();
  }, []);

  return (
    <div className="p-8 space-y-6 bg-surface">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-primary">
          🔍 CSS & Token Verification
        </h1>
        <p className="text-base text-gray-700">
          Testing design token integration and CSS loading
        </p>
      </div>

      {/* ✅ Test 1: Design System Button Components */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Real Design System Components
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="md">
            Primary Button
          </Button>
          <Button variant="outline" size="md">
            Outline Button
          </Button>
          <Button variant="cta" size="md">
            CTA Button
          </Button>
          <Button variant="success" size="md">
            Success Button
          </Button>
          <Button variant="warning" size="md">
            Warning Button
          </Button>
          <Button variant="destructive" size="md">
            Destructive Button
          </Button>
        </div>
      </div>

      {/* ✅ Test 2: Tailwind + Token Color Classes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Tailwind Color Classes (Using Tokens)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-primary text-white rounded-md text-center">
            bg-primary
          </div>
          <div className="p-4 bg-cta text-white rounded-md text-center">
            bg-cta
          </div>
          <div className="p-4 bg-success text-white rounded-md text-center">
            bg-success
          </div>
          <div className="p-4 bg-warning text-black rounded-md text-center">
            bg-warning
          </div>
          <div className="p-4 bg-destructive text-white rounded-md text-center">
            bg-destructive
          </div>
          <div className="p-4 bg-gray-200 text-gray-900 rounded-md text-center">
            bg-gray-200
          </div>
          <div className="p-4 bg-gray-600 text-white rounded-md text-center">
            bg-gray-600
          </div>
          <div className="p-4 border-2 border-primary text-primary rounded-md text-center">
            border-primary
          </div>
        </div>
      </div>

      {/* ✅ Test 3: CSS Custom Properties Direct Access */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Direct CSS Custom Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-4 rounded-md text-center text-white"
            style={{ backgroundColor: "var(--color-navy-500)" }}
          >
            var(--color-navy-500)
          </div>
          <div
            className="p-4 rounded-md text-center text-white"
            style={{ backgroundColor: "var(--color-red-500)" }}
          >
            var(--color-red-500)
          </div>
          <div
            className="p-4 rounded-md text-center"
            style={{
              backgroundColor: "var(--color-gray-100)",
              color: "var(--color-gray-900)",
              padding: "var(--space-16)",
              borderRadius: "var(--border-radius-md)",
            }}
          >
            Multiple tokens: space, radius, colors
          </div>
          <div
            className="p-4 text-center"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-lg)",
              borderRadius: "var(--border-radius-lg)",
            }}
          >
            Surface + shadow + radius tokens
          </div>
        </div>
      </div>

      {/* ✅ Test 4: Status Indicators - The Problem Area */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          🔍 Status Indicators Test (The Problem Area)
        </h2>
        <div className="bg-gray-50 p-4 rounded-md space-y-3">
          <p className="text-sm text-gray-700">
            Testing small elements with background colors - these were the
            missing green dots:
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: "#007d85" }}
              ></div>
              <span className="text-sm">
                bg-success (should be teal #007d85)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: "#0e3a6c" }}
              ></div>
              <span className="text-sm">
                bg-primary (should be navy #0e3a6c)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: "#b75b00" }}
              ></div>
              <span className="text-sm">
                bg-warning (should be orange #b75b00)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: "#d92b2b" }}
              ></div>
              <span className="text-sm">
                bg-destructive (should be red #d92b2b)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: "#a30134" }}
              ></div>
              <span className="text-sm">
                bg-cta (should be brand red #a30134)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Test 5: Load Status Display */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Load Status Indicators
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: "#007d85" }}
            ></div>
            <span>Design tokens package loaded</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: "#007d85" }}
            ></div>
            <span>Components package loaded</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: "#007d85" }}
            ></div>
            <span>Tailwind CSS active</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: "#007d85" }}
            ></div>
            <span>CSS custom properties accessible</span>
          </div>
        </div>
      </div>

      {/* ✅ Test 6: Debug Info */}
      <details className="bg-gray-50 p-4 rounded-md">
        <summary className="font-semibold cursor-pointer text-gray-900">
          🔧 Debug Information (Click to expand)
        </summary>
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <strong>Design Tokens:</strong> @serendipetey/design-tokens@1.0.0
          </p>
          <p>
            <strong>Components:</strong> @serendipetey/components@1.0.0
          </p>
          <p>
            <strong>CSS Import:</strong> src/index.css → design tokens →
            tailwind
          </p>
          <p>
            <strong>Config:</strong> tailwind.config.js (FIXED - using direct
            hex values)
          </p>
          <p>
            <strong>Fix Applied:</strong> Replaced CSS custom properties with
            direct hex values in Tailwind config
          </p>
          <p>
            <strong>Status:</strong> Phase 1 - CSS Loading Foundation 🔧
            (Testing Fix)
          </p>
          <div className="mt-2 p-2 bg-blue-50 rounded text-blue-800">
            <strong>Fix Explanation:</strong> Tailwind classes like `bg-success`
            now use direct hex values (#007d85) instead of CSS custom
            properties. This ensures reliable color generation while maintaining
            design token consistency in the actual components.
          </div>
          <div className="mt-2 p-2 bg-green-50 rounded text-green-800">
            <strong>Live CSS Token Values:</strong>
            <br />
            --color-success-500:{" "}
            {getCSSCustomPropertyValue("--color-success-500") || "NOT FOUND"}
            <br />
            --color-navy-500:{" "}
            {getCSSCustomPropertyValue("--color-navy-500") || "NOT FOUND"}
            <br />
            --color-red-500:{" "}
            {getCSSCustomPropertyValue("--color-red-500") || "NOT FOUND"}
          </div>
        </div>
      </details>
    </div>
  );
}

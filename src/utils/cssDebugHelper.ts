// src/utils/cssDebugHelper.ts

/**
 * CSS Debug Helper
 *
 * Utility functions to debug CSS custom properties and Tailwind classes
 * in the portal prototype during development
 */

/**
 * Get the computed value of a CSS custom property
 */
export function getCSSCustomPropertyValue(propertyName: string): string {
  if (typeof window === "undefined") return "";

  const computedValue = getComputedStyle(document.documentElement)
    .getPropertyValue(propertyName)
    .trim();

  return computedValue;
}

/**
 * Check if a CSS custom property is defined
 */
export function isCSSCustomPropertyDefined(propertyName: string): boolean {
  const value = getCSSCustomPropertyValue(propertyName);
  return value !== "";
}

/**
 * Get all available CSS custom properties that match a pattern
 */
export function getMatchingCSSProperties(
  pattern: string
): Record<string, string> {
  if (typeof window === "undefined") return {};

  const properties: Record<string, string> = {};
  const styles = getComputedStyle(document.documentElement);

  // Note: This is a simplified version - in production you'd need to iterate
  // through all available properties which is more complex in browsers
  const commonTokens = [
    "--color-success-500",
    "--color-primary-500",
    "--color-navy-500",
    "--color-red-500",
    "--color-warning-500",
    "--color-destructive-500",
    "--color-gray-500",
    "--space-16",
    "--border-radius-md",
    "--shadow-md",
  ];

  commonTokens.forEach((token) => {
    if (token.includes(pattern)) {
      const value = styles.getPropertyValue(token).trim();
      if (value) {
        properties[token] = value;
      }
    }
  });

  return properties;
}

/**
 * Debug info for CSS loading issues
 */
export function debugCSSLoading() {
  console.group("🔍 CSS Debug Information");

  // Check key design tokens
  const keyTokens = [
    "--color-success-500",
    "--color-navy-500",
    "--color-red-500",
    "--space-16",
  ];

  keyTokens.forEach((token) => {
    const value = getCSSCustomPropertyValue(token);
    console.log(`${token}: ${value || "NOT FOUND"}`);
  });

  // Check if design token CSS is loaded
  const hasTokens = isCSSCustomPropertyDefined("--color-success-500");
  console.log(`Design tokens loaded: ${hasTokens ? "✅ YES" : "❌ NO"}`);

  console.groupEnd();
}

/**
 * Test Tailwind class generation (useful for debugging)
 */
export function testTailwindClass(className: string): string {
  if (typeof window === "undefined") return "";

  // Create a temporary element to test the class
  const testElement = document.createElement("div");
  testElement.className = className;
  testElement.style.position = "absolute";
  testElement.style.left = "-9999px";

  document.body.appendChild(testElement);

  const computedStyle = getComputedStyle(testElement);
  const backgroundColor = computedStyle.backgroundColor;
  const color = computedStyle.color;

  document.body.removeChild(testElement);

  return backgroundColor || color || "No color applied";
}

// Export all functions for easy debugging in browser console
if (typeof window !== "undefined") {
  (window as any).cssDebug = {
    getCSSCustomPropertyValue,
    isCSSCustomPropertyDefined,
    getMatchingCSSProperties,
    debugCSSLoading,
    testTailwindClass,
  };
}

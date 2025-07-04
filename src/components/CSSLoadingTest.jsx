// src/components/CSSLoadingTest.jsx

import { useState } from "react";

export default function CSSLoadingTest() {
  const [testResults, setTestResults] = useState("");

  const runTokenTest = () => {
    const testTokens = [
      "--color-navy-500",
      "--color-white",
      "--color-primary",
      "--color-text-inverse",
      "--button-primary-bg",
      "--button-primary-text",
    ];

    let results = [];
    let allLoaded = true;

    testTokens.forEach((token) => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(token)
        .trim();

      if (value) {
        results.push(`✅ ${token}: ${value}`);
      } else {
        results.push(`❌ ${token}: NOT FOUND`);
        allLoaded = false;
      }
    });

    if (allLoaded) {
      results.push("🎉 SUCCESS: All design tokens are loaded correctly!");
    } else {
      results.push(
        "⚠️ ISSUE: Some design tokens are missing. Check CSS import path."
      );
    }

    setTestResults(results.join("\n"));
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>🔍 CSS Loading Diagnostic Test</h1>
      <p>
        <strong>Goal:</strong> Verify if design token CSS custom properties are
        loaded in the prototype browser.
      </p>

      <div
        style={{
          background: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          padding: "1.5rem",
          margin: "1rem 0",
        }}
      >
        <h2>🎯 Visual Button Tests</h2>
        <p>
          If CSS is loaded correctly, these buttons should be styled. If not,
          they'll be gray.
        </p>

        <div style={{ margin: "1rem 0" }}>
          <button
            style={{
              background: "var(--button-primary-bg, #ccc)",
              color: "var(--button-primary-text, #000)",
              border: "1px solid var(--button-primary-border, transparent)",
              padding: "0.75rem 1.5rem",
              margin: "0.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Primary Button Test
          </button>

          <button
            style={{
              background: "var(--button-cta-bg, #ccc)",
              color: "var(--button-cta-text, #000)",
              border: "1px solid var(--button-cta-border, transparent)",
              padding: "0.75rem 1.5rem",
              margin: "0.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            CTA Button Test
          </button>
        </div>

        <div
          style={{
            background: "white",
            border: "1px solid #e5e7eb",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          <strong>Expected Results:</strong>
          <ul>
            <li>Primary Button: Navy background (#0e3a6c), white text</li>
            <li>CTA Button: Red background (#a30134), white text</li>
            <li>If gray: CSS tokens not loaded</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          background: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          padding: "1.5rem",
          margin: "1rem 0",
        }}
      >
        <h2>🔧 JavaScript Token Inspection</h2>
        <p>
          Click the button below to check if CSS custom properties are
          accessible:
        </p>

        <button
          onClick={runTokenTest}
          style={{
            background: "#0066cc",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run Token Test
        </button>

        {testResults && (
          <pre
            style={{
              background: "#f1f5f9",
              padding: "1rem",
              borderRadius: "4px",
              marginTop: "1rem",
              whiteSpace: "pre-wrap",
              fontSize: "0.875rem",
            }}
          >
            {testResults}
          </pre>
        )}
      </div>

      <div
        style={{
          background: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          padding: "1.5rem",
          margin: "1rem 0",
        }}
      >
        <h2>📝 Manual Browser Check</h2>
        <ol>
          <li>Open browser Developer Tools (F12)</li>
          <li>Go to Console tab</li>
          <li>Paste this command and press Enter:</li>
        </ol>
        <pre
          style={{
            background: "#f1f5f9",
            padding: "1rem",
            borderRadius: "4px",
            fontSize: "0.875rem",
          }}
        >
          getComputedStyle(document.documentElement).getPropertyValue('--color-navy-500')
        </pre>
        <p>
          <strong>Expected result:</strong> <code>"#0e3a6c"</code>
        </p>
        <p>
          <strong>If empty string:</strong> CSS tokens not loaded
        </p>
      </div>
    </div>
  );
}

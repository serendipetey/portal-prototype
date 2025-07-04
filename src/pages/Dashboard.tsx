// portal-prototype/src/pages/Dashboard.tsx

import { cn } from "@/utils/cn";
import ButtonValidation from "../components/ButtonValidation";
import CSSTokenDiagnostic from "../components/CSSTokenDiagnostic";
import ButtonComparisonTest from "../components/ButtonComparisonTest";

// Temporary placeholder components (will be replaced in later tasks)
const PlaceholderCard = ({ children, className, ...props }: any) => (
  <div
    className={cn(
      "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const StatCard = ({
  title,
  value,
  icon,
  change,
}: {
  title: string;
  value: string;
  icon: string;
  change?: string;
}) => (
  <PlaceholderCard>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && <p className="text-sm text-success">{change}</p>}
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  </PlaceholderCard>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 🔬 Button Architecture Fix Test - Priority 1 */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-2">
          🔬 Button Architecture Fix Test
        </h3>
        <p className="text-purple-700 text-sm mb-4">
          <strong>SOLUTION TEST:</strong> Comparing old vs fixed button
          implementation. Fixed buttons should have perfect Storybook styling
          with working hover states.
        </p>
        <ButtonComparisonTest />
      </div>

      {/* 🔍 CSS Diagnostic - Already confirmed properties are loaded */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-2">
          🔍 CSS Token Pipeline Diagnostic
        </h3>
        <p className="text-red-700 text-sm mb-4">
          <strong>PRIORITY:</strong> Diagnosing the architectural disconnect.
          This will show exactly which CSS properties are missing.
        </p>
        <CSSTokenDiagnostic />
      </div>

      {/* 🎯 Button Validation Test */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          🎯 Button Design System Validation
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          Testing buttons to match Storybook design exactly. Check typography,
          colors, hover states, and sizing.
        </p>
        <ButtonValidation />
      </div>

      {/* Original dashboard content */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your portal.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,234"
          icon="👥"
          change="+12% from last month"
        />
        <StatCard
          title="Revenue"
          value="$45,678"
          icon="💰"
          change="+8% from last month"
        />
        <StatCard
          title="Active Projects"
          value="87"
          icon="📊"
          change="+15% from last month"
        />
        <StatCard
          title="Completion Rate"
          value="94%"
          icon="✅"
          change="+3% from last month"
        />
      </div>

      {/* Recent Activity */}
      <PlaceholderCard>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[
            "New user registration from Jane Smith",
            "Project Alpha completed successfully",
            "Monthly report generated",
            "System backup completed",
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">{activity}</span>
            </div>
          ))}
        </div>
      </PlaceholderCard>
    </div>
  );
}

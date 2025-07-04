// src/pages/Dashboard.tsx

import { cn } from "@/utils/cn";
import FinalButtonTest from "@/components/FinalButtonTest";

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
      {/* 🎯 TASK 3: Button Test (focused testing) */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">
          🎯 Task 3: Primary Button Test
        </h3>
        <p className="text-yellow-700 text-sm mb-4">
          Testing Primary button with fixed design token mappings. Button should
          now match storybook design exactly.
        </p>
        <FinalButtonTest />
      </div>

      {/* Original dashboard content */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your portal.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Applications"
          value="247"
          icon="📄"
          change="+12% from last month"
        />
        <StatCard
          title="Pending Reviews"
          value="18"
          icon="⏳"
          change="+3 from yesterday"
        />
        <StatCard
          title="Approved This Month"
          value="89"
          icon="✅"
          change="+23% from last month"
        />
        <StatCard
          title="Success Rate"
          value="94.2%"
          icon="📈"
          change="+2.1% from last month"
        />
      </div>

      {/* Content sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent activity */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              {
                action: "Application submitted",
                user: "Sarah Johnson",
                time: "2 hours ago",
              },
              {
                action: "Document approved",
                user: "Mike Chen",
                time: "4 hours ago",
              },
              {
                action: "Review completed",
                user: "Emily Davis",
                time: "6 hours ago",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.user}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </PlaceholderCard>

        {/* Quick actions */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">
                📝 Create New Application
              </div>
              <div className="text-sm text-gray-500">
                Start a new application process
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">👥 Manage Users</div>
              <div className="text-sm text-gray-500">
                Add or remove user access
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">📊 View Reports</div>
              <div className="text-sm text-gray-500">
                Generate compliance reports
              </div>
            </button>
          </div>
        </PlaceholderCard>
      </div>
    </div>
  );
}

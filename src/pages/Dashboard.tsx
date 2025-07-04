// src/pages/Dashboard.tsx

import { cn } from "@/utils/cn";
import ButtonTest from "../components/ButtonTest"; // Use the enhanced ButtonTest

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
      {/* 🎯 Button Typography Test */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">
          🎯 Button Typography Test
        </h3>
        <p className="text-yellow-700 text-sm mb-4">
          Testing button with Poppins typography and design token integration.
          Buttons should match storybook design exactly.
        </p>
        <ButtonTest />
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
                action: "Review completed",
                user: "Mike Chen",
                time: "4 hours ago",
              },
              {
                action: "Document uploaded",
                user: "Emma Davis",
                time: "6 hours ago",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {item.user[0]}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {item.action}
                  </p>
                  <p className="text-sm text-gray-500">{item.user}</p>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500">
                  {item.time}
                </div>
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
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-medium text-gray-900">New Application</p>
                  <p className="text-sm text-gray-500">
                    Start a new application process
                  </p>
                </div>
              </div>
            </button>

            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-medium text-gray-900">View Reports</p>
                  <p className="text-sm text-gray-500">
                    Access detailed analytics
                  </p>
                </div>
              </div>
            </button>

            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <p className="font-medium text-gray-900">Settings</p>
                  <p className="text-sm text-gray-500">
                    Manage your preferences
                  </p>
                </div>
              </div>
            </button>
          </div>
        </PlaceholderCard>
      </div>
    </div>
  );
}

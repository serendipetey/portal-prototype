import { cn } from "@/utils/cn";
import CSSVerificationTest from "@/components/CSSVerificationTest";

// Temporary placeholder components
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
      {/* 🔥 PHASE 1 TEST: CSS Verification (temporary) */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          🔍 Phase 1: CSS Loading Test
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          This verification panel will be removed once CSS loading is confirmed
          working.
        </p>
        <CSSVerificationTest />
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
                user: "Emma Wilson",
                time: "6 hours ago",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
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
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">📝</span>
                <div>
                  <p className="font-medium text-gray-900">New Application</p>
                  <p className="text-sm text-gray-600">
                    Start a new application process
                  </p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">📊</span>
                <div>
                  <p className="font-medium text-gray-900">View Reports</p>
                  <p className="text-sm text-gray-600">
                    Access detailed analytics
                  </p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">⚙️</span>
                <div>
                  <p className="font-medium text-gray-900">Manage Settings</p>
                  <p className="text-sm text-gray-600">
                    Configure your preferences
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

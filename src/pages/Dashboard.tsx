import { cn } from "@/utils/cn";

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
      {/* Page header */}
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
              {
                action: "Application updated",
                user: "David Brown",
                time: "1 day ago",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.action}
                  </p>
                  <p className="text-sm text-gray-500">{item.user}</p>
                </div>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </PlaceholderCard>

        {/* Quick actions */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "New Application", icon: "📝" },
              { label: "Review Queue", icon: "👀" },
              { label: "Generate Report", icon: "📊" },
              { label: "Settings", icon: "⚙️" },
            ].map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl mb-2">{action.icon}</span>
                <span className="text-sm font-medium text-gray-700">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </PlaceholderCard>
      </div>

      {/* Charts placeholder */}
      <PlaceholderCard>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Application Trends
        </h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <span className="text-6xl">📈</span>
            <p className="text-gray-500 mt-2">Chart component will go here</p>
            <p className="text-sm text-gray-400">
              Integration with design system components
            </p>
          </div>
        </div>
      </PlaceholderCard>
    </div>
  );
}

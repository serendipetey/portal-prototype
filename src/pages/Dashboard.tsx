// portal-prototype/src/pages/Dashboard.tsx
import { BarChart3, Users, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@serendipetey/components";

const StatCard = ({ icon: Icon, title, value, change }: any) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <p className="text-sm text-green-600 mt-1">
            <TrendingUp className="inline w-4 h-4 mr-1" />
            {change}
          </p>
        )}
      </div>
      <div className="p-3 bg-blue-50 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome back, John
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your portal today.
          </p>
        </div>
        <Button variant="primary">Create New</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Users}
          title="Total Users"
          value="2,543"
          change="+12% from last month"
        />
        <StatCard
          icon={DollarSign}
          title="Revenue"
          value="$45,231"
          change="+8% from last month"
        />
        <StatCard
          icon={BarChart3}
          title="Active Projects"
          value="12"
          change="+3 new this week"
        />
        <StatCard
          icon={TrendingUp}
          title="Growth Rate"
          value="23.5%"
          change="+2.1% from last quarter"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  New user registered
                </p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Payment received
                </p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Report generated
                </p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Activity
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-20 flex-col">
              <Users className="w-5 h-5 mb-2" />
              <span className="text-sm">Add User</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <BarChart3 className="w-5 h-5 mb-2" />
              <span className="text-sm">View Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <DollarSign className="w-5 h-5 mb-2" />
              <span className="text-sm">Billing</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <TrendingUp className="w-5 h-5 mb-2" />
              <span className="text-sm">Analytics</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

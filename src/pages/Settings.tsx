import { cn } from "@/utils/cn";

// 🔥 Import real design system components
import { Button } from "@serendipetey/components";

// 🔍 Temporary debug component

// Temporary placeholder card (will be replaced in Task 2)
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

const SettingToggle = ({
  label,
  description,
  enabled = false,
}: {
  label: string;
  description: string;
  enabled?: boolean;
}) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
    <div className="flex-1">
      <p className="font-medium text-gray-900">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <button
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        enabled ? "bg-primary" : "bg-gray-200"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 rounded-full bg-white transition-transform",
          enabled ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  </div>
);

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* 🔍 TEMPORARY: Debug test for Button component */}

      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your application preferences and system settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Notification Settings */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h3>
          <div className="space-y-1">
            <SettingToggle
              label="Email Notifications"
              description="Receive email updates for important events"
              enabled={true}
            />
            <SettingToggle
              label="Push Notifications"
              description="Get browser notifications for real-time updates"
              enabled={false}
            />
            <SettingToggle
              label="Application Updates"
              description="Notifications when applications are reviewed"
              enabled={true}
            />
            <SettingToggle
              label="Weekly Reports"
              description="Receive weekly summary reports via email"
              enabled={true}
            />
          </div>
        </PlaceholderCard>

        {/* Display Settings */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Display</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timezone
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+1 (Central European)</option>
              </select>
            </div>
          </div>
        </PlaceholderCard>

        {/* Security Settings */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
          <div className="space-y-1">
            <SettingToggle
              label="Two-Factor Authentication"
              description="Add an extra layer of security to your account"
              enabled={false}
            />
            <SettingToggle
              label="Session Timeout"
              description="Automatically log out after inactivity"
              enabled={true}
            />
            <SettingToggle
              label="Login Notifications"
              description="Get notified when someone logs into your account"
              enabled={true}
            />
          </div>
        </PlaceholderCard>

        {/* Account Management */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Account Management
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <span className="text-3xl mb-2 block">📊</span>
              <h4 className="font-medium text-gray-900">Export Data</h4>
              <p className="text-sm text-gray-500 mb-3">
                Download your account data
              </p>
              <Button variant="outline" className="text-sm">
                Export
              </Button>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <span className="text-3xl mb-2 block">🔄</span>
              <h4 className="font-medium text-gray-900">Backup Settings</h4>
              <p className="text-sm text-gray-500 mb-3">
                Create a backup of your settings
              </p>
              <Button variant="outline" className="text-sm">
                Backup
              </Button>
            </div>

            <div className="text-center p-4 border border-red-200 rounded-lg bg-red-50">
              <span className="text-3xl mb-2 block">⚠️</span>
              <h4 className="font-medium text-red-900">Delete Account</h4>
              <p className="text-sm text-red-700 mb-3">
                Permanently delete your account
              </p>
              <Button variant="destructive" className="text-sm">
                Delete
              </Button>
            </div>
          </div>
        </PlaceholderCard>
      </div>

      {/* Save button */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save All Changes</Button>
      </div>
    </div>
  );
}

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

const PlaceholderButton = ({
  children,
  variant = "primary",
  className,
  ...props
}: any) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
      variant === "primary" && "bg-primary text-white hover:bg-primary/90",
      variant === "outline" &&
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
      variant === "destructive" &&
        "bg-destructive text-white hover:bg-destructive/90",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </button>
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
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timezone
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option>Pacific Time (PT)</option>
                <option>Mountain Time (MT)</option>
                <option>Central Time (CT)</option>
                <option>Eastern Time (ET)</option>
              </select>
            </div>
          </div>
        </PlaceholderCard>

        {/* Privacy Settings */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h3>
          <div className="space-y-1">
            <SettingToggle
              label="Profile Visibility"
              description="Make your profile visible to other users"
              enabled={true}
            />
            <SettingToggle
              label="Activity Status"
              description="Show when you're online or active"
              enabled={false}
            />
            <SettingToggle
              label="Data Analytics"
              description="Help improve the platform with usage analytics"
              enabled={true}
            />
          </div>
        </PlaceholderCard>

        {/* Security Settings */}
        <PlaceholderCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Session Timeout</p>
                <p className="text-sm text-gray-500">
                  Automatically log out after inactivity
                </p>
              </div>
              <select className="rounded-md border border-gray-300 px-3 py-1 text-sm">
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>4 hours</option>
                <option>Never</option>
              </select>
            </div>

            <SettingToggle
              label="Login Alerts"
              description="Get notified of new login attempts"
              enabled={true}
            />

            <SettingToggle
              label="Require 2FA"
              description="Require two-factor authentication for all logins"
              enabled={false}
            />
          </div>
        </PlaceholderCard>

        {/* System Settings */}
        <PlaceholderCard className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <span className="text-3xl mb-2 block">📊</span>
              <h4 className="font-medium text-gray-900">Export Data</h4>
              <p className="text-sm text-gray-500 mb-3">
                Download your account data
              </p>
              <PlaceholderButton variant="outline" className="text-sm">
                Export
              </PlaceholderButton>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <span className="text-3xl mb-2 block">🔄</span>
              <h4 className="font-medium text-gray-900">Backup Settings</h4>
              <p className="text-sm text-gray-500 mb-3">
                Create a backup of your settings
              </p>
              <PlaceholderButton variant="outline" className="text-sm">
                Backup
              </PlaceholderButton>
            </div>

            <div className="text-center p-4 border border-red-200 rounded-lg bg-red-50">
              <span className="text-3xl mb-2 block">⚠️</span>
              <h4 className="font-medium text-red-900">Delete Account</h4>
              <p className="text-sm text-red-700 mb-3">
                Permanently delete your account
              </p>
              <PlaceholderButton variant="destructive" className="text-sm">
                Delete
              </PlaceholderButton>
            </div>
          </div>
        </PlaceholderCard>
      </div>

      {/* Save button */}
      <div className="flex justify-end space-x-3">
        <PlaceholderButton variant="outline">
          Reset to Defaults
        </PlaceholderButton>
        <PlaceholderButton>Save All Changes</PlaceholderButton>
      </div>
    </div>
  );
}

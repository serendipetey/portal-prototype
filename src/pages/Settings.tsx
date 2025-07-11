// portal-prototype/src/pages/Settings.tsx
import { Button, Input } from "@serendipetey/components";
import { Bell, Shield, Palette, Globe } from "lucide-react";

const Card = ({ children, className = "" }: any) => (
  <div
    className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const SettingItem = ({ icon: Icon, title, description, action }: any) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-white rounded-lg">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <div>{action}</div>
  </div>
);

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600">
          Manage your application preferences and configurations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            <SettingItem
              icon={Bell}
              title="Email Notifications"
              description="Receive notifications via email"
              action={
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              }
            />
            <SettingItem
              icon={Bell}
              title="Push Notifications"
              description="Receive push notifications in browser"
              action={
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              }
            />
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Appearance
          </h3>
          <div className="space-y-4">
            <SettingItem
              icon={Palette}
              title="Theme"
              description="Choose your preferred theme"
              action={
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              }
            />
            <SettingItem
              icon={Globe}
              title="Language"
              description="Select your preferred language"
              action={
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              }
            />
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Privacy & Security
          </h3>
          <div className="space-y-4">
            <SettingItem
              icon={Shield}
              title="Data Export"
              description="Download your data"
              action={
                <Button variant="outline" size="sm">
                  Export
                </Button>
              }
            />
            <SettingItem
              icon={Shield}
              title="Delete Account"
              description="Permanently delete your account"
              action={
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              }
            />
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Organization
          </h3>
          <div className="space-y-4">
            <Input
              label="Organization Name"
              defaultValue="Portal Pro"
              placeholder="Enter organization name"
            />
            <Input
              label="Organization ID"
              defaultValue="portal-pro-1"
              placeholder="Enter organization ID"
              hintText="This cannot be changed"
              disabled
            />
            <div className="flex justify-end space-x-3 mt-4">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

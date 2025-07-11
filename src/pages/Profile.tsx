// portal-prototype/src/pages/Profile.tsx
import { Button, Input } from "@serendipetey/components";

const Card = ({ children, className = "" }: any) => (
  <div
    className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
        <p className="text-gray-600">
          Manage your personal information and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              John Doe
            </h3>
            <p className="text-gray-500">Administrator</p>
            <p className="text-sm text-gray-400 mt-1">Portal Pro</p>
            <Button variant="outline" className="mt-4">
              Change Photo
            </Button>
          </div>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="First Name"
                labelState="required"
                defaultValue="John"
                placeholder="Enter your first name"
              />
              <Input
                label="Last Name"
                labelState="required"
                defaultValue="Doe"
                placeholder="Enter your last name"
              />
              <Input
                label="Email Address"
                labelState="required"
                type="email"
                defaultValue="john.doe@portalprpto.com"
                placeholder="Enter your email"
                hintText="We'll never share your email address"
              />
              <Input
                label="Phone Number"
                labelState="optional"
                type="tel"
                defaultValue="+1 (555) 123-4567"
                placeholder="Enter your phone number"
              />
              <div className="sm:col-span-2">
                <Input
                  label="Job Title"
                  labelState="optional"
                  defaultValue="Senior Administrator"
                  placeholder="Enter your job title"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Account Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Password</h4>
                  <p className="text-sm text-gray-500">
                    Last changed 3 months ago
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-sm text-gray-500">Not enabled</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable 2FA
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

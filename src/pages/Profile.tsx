import { cn } from "@/utils/cn";

// 🔥 Import real design system components
import { Button, Input } from "@serendipetey/components";

// Temporary placeholder card (we can replace this later with a Card component if you have one)
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

export default function Profile() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600">
          Manage your personal information and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile photo and basic info */}
        <PlaceholderCard>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              John Doe
            </h3>
            <p className="text-gray-500">Administrator</p>
            <p className="text-sm text-gray-400 mt-1">Portal Prototype</p>

            <Button variant="outline" className="mt-4">
              Change Photo
            </Button>
          </div>
        </PlaceholderCard>

        {/* Personal information form */}
        <div className="lg:col-span-2 space-y-6">
          <PlaceholderCard>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* 🔥 REPLACE: Use real Input components */}
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
                defaultValue="john.doe@prototype.com"
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
          </PlaceholderCard>

          <PlaceholderCard>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Company Name"
                defaultValue="Portal Prototype Inc."
                disabled
                hintText="This field is managed by your administrator"
              />
              <Input
                label="Company ID"
                defaultValue="PROTO-001"
                disabled
                hintText="Unique company identifier"
              />
              <Input
                label="Department"
                defaultValue="Information Technology"
                placeholder="Enter your department"
              />
              <Input
                label="Employee ID"
                defaultValue="EMP-12345"
                disabled
                hintText="Your unique employee identifier"
              />
            </div>
          </PlaceholderCard>

          <PlaceholderCard>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Security Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Password</p>
                  <p className="text-sm text-gray-500">
                    Last changed 3 months ago
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">
                    Two-Factor Authentication
                  </p>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enable 2FA
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Login Sessions</p>
                  <p className="text-sm text-gray-500">
                    Manage your active sessions
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View Sessions
                </Button>
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
    </div>
  );
}

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

const PlaceholderInput = ({ label, value, className, ...props }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      className={cn(
        "w-full rounded-md border border-gray-300 px-3 py-2 text-sm",
        "focus:border-primary focus:ring-2 focus:ring-primary/20",
        "disabled:bg-gray-50 disabled:text-gray-500",
        className
      )}
      value={value}
      {...props}
    />
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
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </button>
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
            <p className="text-sm text-gray-400 mt-1">Acme Corporation</p>

            <PlaceholderButton className="mt-4">Change Photo</PlaceholderButton>
          </div>
        </PlaceholderCard>

        {/* Personal information form */}
        <div className="lg:col-span-2 space-y-6">
          <PlaceholderCard>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <PlaceholderInput
                label="First Name"
                value="John"
                placeholder="Enter your first name"
              />
              <PlaceholderInput
                label="Last Name"
                value="Doe"
                placeholder="Enter your last name"
              />
              <PlaceholderInput
                label="Email Address"
                type="email"
                value="john.doe@acme.com"
                placeholder="Enter your email"
              />
              <PlaceholderInput
                label="Phone Number"
                value="+1 (555) 123-4567"
                placeholder="Enter your phone number"
              />
              <div className="sm:col-span-2">
                <PlaceholderInput
                  label="Job Title"
                  value="Senior Administrator"
                  placeholder="Enter your job title"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <PlaceholderButton variant="outline">Cancel</PlaceholderButton>
              <PlaceholderButton>Save Changes</PlaceholderButton>
            </div>
          </PlaceholderCard>

          <PlaceholderCard>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <PlaceholderInput
                label="Company Name"
                value="Acme Corporation"
                disabled
              />
              <PlaceholderInput label="Company ID" value="ACME-001" disabled />
              <PlaceholderInput
                label="Department"
                value="Information Technology"
                placeholder="Enter your department"
              />
              <PlaceholderInput
                label="Employee ID"
                value="EMP-12345"
                disabled
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
                <PlaceholderButton variant="outline" className="text-sm">
                  Change Password
                </PlaceholderButton>
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
                <PlaceholderButton variant="outline" className="text-sm">
                  Enable 2FA
                </PlaceholderButton>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Login Sessions</p>
                  <p className="text-sm text-gray-500">
                    Manage your active sessions
                  </p>
                </div>
                <PlaceholderButton variant="outline" className="text-sm">
                  View Sessions
                </PlaceholderButton>
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
    </div>
  );
}

import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

// Temporary placeholder components until we install the design system
const PlaceholderButton = ({ children, className, ...props }: any) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
      "bg-primary text-white hover:bg-primary/90",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

const PlaceholderSidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Profile", href: "/profile", icon: "👤" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary">Portal Prototype</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            location.pathname === item.href ||
            (item.href === "/dashboard" && location.pathname === "/");

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              John Doe
            </p>
            <p className="text-xs text-gray-500 truncate">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaceholderHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Prototype Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          <PlaceholderButton size="sm">New Action</PlaceholderButton>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            🔔
          </button>
        </div>
      </div>
    </header>
  );
};

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <PlaceholderSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <PlaceholderHeader />

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

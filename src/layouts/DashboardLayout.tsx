// src/layouts/DashboardLayout.tsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";

// 🔥 Import only confirmed working components
import { Button } from "@serendipetey/components";

// Create a simple, working sidebar using design tokens
const SimpleSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Profile", href: "/profile", icon: "👤" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo/Brand - Using design tokens */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <button
          onClick={() => handleNavigation("/dashboard")}
          className="text-xl font-bold text-primary hover:text-primary/90 transition-colors"
        >
          Portal Prototype
        </button>
      </div>

      {/* User Profile Section - Using design tokens */}
      <div className="border-b border-gray-200 p-4 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Portal Prototype
            </p>
            <p className="text-xs text-gray-500 truncate">John Doe</p>
            <p className="text-xs text-gray-400 truncate">Administrator</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-3 w-full justify-start text-xs"
          onClick={() => console.log("Switch entity")}
        >
          ↗️ Switch Entity
        </Button>
      </div>

      {/* Navigation - Enhanced with design tokens */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {/* Main Navigation */}
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href === "/dashboard" && location.pathname === "/");

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "group flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            );
          })}
        </div>

        {/* User Management Section */}
        <div className="pt-4">
          <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            User Management
          </h3>
          <div className="space-y-1">
            <button
              onClick={() => handleNavigation("/profile")}
              className={cn(
                "group flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                location.pathname === "/profile"
                  ? "bg-gray-100 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <span className="mr-3">👤</span>
              Profile
            </button>
            <button
              onClick={() => handleNavigation("/settings")}
              className={cn(
                "group flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                location.pathname === "/settings"
                  ? "bg-gray-100 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <span className="mr-3">⚙️</span>
              Settings
            </button>
          </div>
        </div>

        {/* Reports Section */}
        <div className="pt-4">
          <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Reports
          </h3>
          <div className="space-y-1">
            <button
              onClick={() => handleNavigation("/reports/analytics")}
              className="group flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <span className="mr-3">📊</span>
              Analytics
            </button>
            <button
              onClick={() => handleNavigation("/reports/export")}
              className="group flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <span className="mr-3">📄</span>
              Export Data
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Actions - Using design tokens */}
      <div className="border-t border-gray-200 p-3 space-y-1">
        <button
          onClick={() => handleNavigation("/notifications")}
          className="group flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <span className="mr-3">🔔</span>
          Notifications
          <span className="ml-auto bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            5
          </span>
        </button>
        <button
          onClick={() => console.log("Sign out")}
          className="group flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <span className="mr-3">↗️</span>
          Sign Out
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Prototype Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          {/* Real Button components - confirmed working */}
          <Button variant="primary" size="sm">
            New Action
          </Button>

          <Button variant="outline" size="sm">
            Secondary
          </Button>

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
      {/* 🔥 Simple, Working Sidebar */}
      <SimpleSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

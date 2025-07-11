// portal-prototype/src/layouts/DashboardLayout.tsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BarChart3, User, Settings, Bell, LogOut } from "lucide-react";
import {
  Button,
  SidebarMenu,
  SidebarProfile,
  SidebarBusinessLogo,
  SidebarMenuItem,
  type SidebarProfileData,
} from "@serendipetey/components";

const user: SidebarProfileData = {
  contact: {
    name: "John Doe",
    role: "Administrator",
  },
  entity: {
    name: "Portal Pro",
    id: "portal-pro-1",
  },
};

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  const handleSwitchEntity = () => {
    console.log("Switch entity (future feature)");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarMenu size="md">
        <SidebarBusinessLogo
          businessName="Portal Pro"
          logoUrl="https://via.placeholder.com/140x45/0e3a6c/ffffff?text=Portal+Pro"
          width={140}
          height={45}
          onClick={handleLogoClick}
        />

        <SidebarProfile user={user} onSwitchEntity={handleSwitchEntity} />

        <div className="flex-1 py-4 px-2 space-y-1">
          <SidebarMenuItem
            icon={BarChart3}
            active={isActive("/") || isActive("/dashboard")}
            onNavigate={handleNavigation}
            href="/dashboard"
          >
            Dashboard
          </SidebarMenuItem>

          <SidebarMenuItem
            icon={User}
            active={isActive("/profile")}
            onNavigate={handleNavigation}
            href="/profile"
          >
            Profile
          </SidebarMenuItem>

          <SidebarMenuItem
            icon={Settings}
            active={isActive("/settings")}
            onNavigate={handleNavigation}
            href="/settings"
          >
            Settings
          </SidebarMenuItem>
        </div>

        <div className="border-t border-[var(--color-border)] p-3 space-y-1">
          <SidebarMenuItem
            icon={Bell}
            size="sm"
            active={isActive("/notifications")}
            onNavigate={handleNavigation}
            href="/notifications"
            badge="3"
          >
            Notifications
          </SidebarMenuItem>

          <SidebarMenuItem
            icon={LogOut}
            size="sm"
            onClick={() => console.log("Sign out")}
          >
            Sign Out
          </SidebarMenuItem>
        </div>
      </SidebarMenu>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">
              Portal Pro Dashboard
            </h1>
            <div className="flex items-center space-x-3">
              <Button variant="primary" size="sm">
                New Action
              </Button>
              <Button variant="outline" size="sm">
                Settings
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

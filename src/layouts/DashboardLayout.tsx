// src/layouts/DashboardLayout.tsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  DollarSign,
  FileText,
  Shield,
  Bell,
  LogOut,
} from "lucide-react";

// 🎯 Import real design system components with proper types
import {
  Button,
  SidebarMenu,
  SidebarProfile,
  SidebarBusinessLogo,
  SidebarMenuItem,
  SidebarMenuSection,
  SidebarMenuSectionRoot,
  useNavigationState,
  type SidebarProfileData,
  type NavigationConfig,
} from "@serendipetey/components";

// 📋 Portal Pro Navigation Configuration (matching storybook exactly)
const navigationConfig: NavigationConfig = {
  standalone: [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
      icon: BarChart3,
    },
  ],
  sections: [
    {
      id: "funding",
      title: "Funding",
      icon: DollarSign,
      items: [
        {
          id: "apply-funding",
          label: "Apply for Funding",
          href: "/funding/apply",
        },
        {
          id: "submit-returns",
          label: "Submit Returns",
          href: "/funding/returns",
          badge: "3", // Badge notification like in storybook
        },
        {
          id: "view-applications",
          label: "View Applications",
          href: "/funding/applications",
        },
        {
          id: "funding-calculator",
          label: "Funding Calculator",
          href: "/funding/calculator",
        },
      ],
    },
    {
      id: "compliance",
      title: "Compliance",
      icon: Shield,
      items: [
        {
          id: "compliance-overview",
          label: "Overview",
          href: "/compliance",
        },
        {
          id: "audit-reports",
          label: "Audit Reports",
          href: "/compliance/audits",
        },
        {
          id: "policy-management",
          label: "Policy Management",
          href: "/compliance/policies",
        },
      ],
    },
    {
      id: "reports",
      title: "Reports",
      icon: FileText,
      items: [
        {
          id: "financial-reports",
          label: "Financial Reports",
          href: "/reports/financial",
        },
        {
          id: "analytics",
          label: "Analytics",
          href: "/reports/analytics",
        },
        {
          id: "export-data",
          label: "Export Data",
          href: "/reports/export",
        },
      ],
    },
  ],
};
// 👤 User data structure (matching actual SidebarProfile component)
const adminUser: SidebarProfileData = {
  contact: {
    name: "Jane Doe",
    role: "Administrator",
  },
  entity: {
    name: "Acme Corp",
    id: "acme-corp-1",
  },
};

// 🎯 Real Sidebar Component (matching Portal Pro storybook design exactly)
const PortalProSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Smart navigation state management (like storybook)
  const { activeItemId, expandedSections, toggleSection, isSectionExpanded } =
    useNavigationState(navigationConfig, location.pathname);

  const handleNavigation = (href: string) => {
    console.log("Navigate to:", href);
    navigate(href);
  };

  const handleLogoClick = () => {
    console.log("Navigate to dashboard");
    navigate("/dashboard");
  };

  const handleSwitchEntity = () => {
    console.log("Switch entity clicked");
    // Future: Implement entity switching logic
  };

  return (
    <SidebarMenu size="md">
      {/* 🏢 Business Logo (with professional styling like storybook) */}
      <SidebarBusinessLogo
        businessName="Portal Pro"
        logoUrl="https://via.placeholder.com/140x45/0e3a6c/ffffff?text=Portal+Pro"
        width={140}
        height={45}
        onClick={handleLogoClick}
      />

      {/* 👤 User Profile */}
      <SidebarProfile user={adminUser} onSwitchEntity={handleSwitchEntity} />

      {/* 🧭 Navigation (exactly like storybook) */}
      <div className="flex-1 py-4">
        {/* Standalone Items */}
        <div className="px-2 mb-4 space-y-1">
          {navigationConfig.standalone?.map((item) => (
            <SidebarMenuItem
              key={item.id}
              icon={item.icon}
              active={activeItemId === item.id}
              onNavigate={handleNavigation}
              href={item.href}
            >
              {item.label}
            </SidebarMenuItem>
          ))}
        </div>

        {/* Collapsible Sections (like storybook) */}
        <SidebarMenuSectionRoot type="multiple" value={expandedSections}>
          {navigationConfig.sections.map((section) => (
            <SidebarMenuSection
              key={section.id}
              title={section.title}
              icon={section.icon}
              value={section.id}
              expanded={isSectionExpanded(section.id)}
              onToggle={() => toggleSection(section.id)}
            >
              <div className="space-y-1 px-2">
                {section.items.map((item) => (
                  <SidebarMenuItem
                    key={item.id}
                    size="sm"
                    active={activeItemId === item.id}
                    onNavigate={handleNavigation}
                    href={item.href}
                    badge={item.badge}
                  >
                    {item.label}
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenuSection>
          ))}
        </SidebarMenuSectionRoot>
      </div>

      {/* 🔔 Bottom Actions */}
      <div className="border-t border-[var(--color-border)] p-3 space-y-1">
        <SidebarMenuItem
          icon={Bell}
          size="sm"
          active={location.pathname === "/notifications"}
          onNavigate={handleNavigation}
          href="/notifications"
          badge="5"
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
  );
};

// 📱 Header Component (enhanced for consistency)
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Prototype Dashboard
        </h2>
        <div className="flex items-center space-x-4">
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

// 🏗️ Main Layout Component
export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 🎯 Portal Pro Sidebar (using actual design system components) */}
      <PortalProSidebar />

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

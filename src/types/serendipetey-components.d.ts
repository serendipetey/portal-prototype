// src/types/serendipetey-components.d.ts
// Updated TypeScript declarations matching actual component APIs

declare module "@serendipetey/components" {
  import React from "react";

  // Base component props interface
  interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
  }

  // Button component types
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
      | "primary"
      | "secondary"
      | "outline"
      | "ghost"
      | "destructive"
      | "success"
      | "warning"
      | "cta";
    size?: "sm" | "md" | "lg" | "xl";
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    asChild?: boolean;
  }

  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;

  // Input component types
  export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelState?: "required" | "optional";
    hintText?: string | boolean;
    error?: string;
    success?: string;
    variant?: "default" | "error" | "success" | "warning";
    size?: "sm" | "md" | "lg" | "xl";
  }

  export const Input: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >;

  // Sidebar navigation components
  export interface SidebarMenuProps extends BaseComponentProps {
    size?: "sm" | "md" | "lg";
    collapsed?: boolean;
    mobile?: "overlay" | "push";
    mobileOpen?: boolean;
    onMobileToggle?: (open: boolean) => void;
  }

  export const SidebarMenu: React.FC<SidebarMenuProps>;

  // SidebarProfile types
  export interface SidebarProfileData {
    contact: {
      name: string;
      role: string;
    };
    entity: {
      name: string;
      id: string;
    };
  }

  export interface SidebarProfileProps extends BaseComponentProps {
    user: SidebarProfileData;
    onSwitchEntity?: () => void;
  }

  export const SidebarProfile: React.FC<SidebarProfileProps>;

  // SidebarBusinessLogo types
  export interface SidebarBusinessLogoProps extends BaseComponentProps {
    businessName: string;
    logoUrl?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
  }

  export const SidebarBusinessLogo: React.FC<SidebarBusinessLogoProps>;

  // SidebarMenuItem types
  export interface SidebarMenuItemProps extends BaseComponentProps {
    icon?: React.ComponentType<any>;
    active?: boolean;
    size?: "sm" | "md" | "lg";
    href?: string;
    badge?: string | number;
    onNavigate?: (href: string) => void;
    onClick?: () => void;
  }

  export const SidebarMenuItem: React.FC<SidebarMenuItemProps>;

  // SidebarMenuSection types (accordion sections)
  export interface SidebarMenuSectionProps extends BaseComponentProps {
    title: string;
    icon?: React.ComponentType<any>;
    value?: string;
    expanded?: boolean;
    onToggle?: (expanded: boolean) => void;
    badge?: string | number;
  }

  export interface SidebarMenuSectionRootProps extends BaseComponentProps {
    type?: "single" | "multiple";
    collapsible?: boolean;
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
  }

  export const SidebarMenuSection: React.FC<SidebarMenuSectionProps>;
  export const SidebarMenuSectionRoot: React.FC<SidebarMenuSectionRootProps>;

  // Navigation state management
  export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    icon?: React.ComponentType<any>;
    badge?: string | number;
  }

  export interface NavigationSection {
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    items: NavigationItem[];
  }

  export interface NavigationConfig {
    standalone?: NavigationItem[];
    sections: NavigationSection[];
  }

  export function useNavigationState(
    config: NavigationConfig,
    currentPath: string
  ): {
    activeItemId: string | null;
    expandedSections: string[];
    toggleSection: (sectionId: string) => void;
    isSectionExpanded: (sectionId: string) => boolean;
  };

  // Utility functions
  export function cn(...inputs: any[]): string;

  // Export all other components as generic React components for now
  export const Select: React.FC<any>;
  export const Table: React.FC<any>;
  export const Pagination: React.FC<any>;
  export const DataTable: React.FC<any>;
  export const ColumnSortControls: React.FC<any>;
}

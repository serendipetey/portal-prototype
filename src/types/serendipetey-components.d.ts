// This file provides TypeScript declarations for the @serendipetey/components package
// Place this file at: src/types/serendipetey-components.d.ts

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
    collapsed?: boolean;
    onToggle?: () => void;
  }

  export const SidebarMenu: React.FC<SidebarMenuProps>;

  export interface SidebarProfileProps extends BaseComponentProps {
    // Add specific props as needed
  }

  export const SidebarProfile: React.FC<SidebarProfileProps>;
  export const SidebarMenuItem: React.FC<BaseComponentProps>;
  export const SidebarMenuSection: React.FC<BaseComponentProps>;
  export const SidebarBusinessLogo: React.FC<BaseComponentProps>;

  // Utility functions
  export function cn(...inputs: any[]): string;

  // Export all other components as generic React components for now
  // This allows imports to work while providing basic type safety
  export const Select: React.FC<any>;
  export const Table: React.FC<any>;
  export const Pagination: React.FC<any>;
  export const DataTable: React.FC<any>;
  export const ColumnSortControls: React.FC<any>;
}

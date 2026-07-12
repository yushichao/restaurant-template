import type { ThemeConfig } from "@/config/theme";
import type { CSSProperties } from "react";

export function getThemeCssVars(theme: ThemeConfig): CSSProperties {
  return {
    "--color-primary": theme.colors.primary,
    "--color-primary-foreground": theme.colors.primaryForeground,
    "--color-secondary": theme.colors.secondary,
    "--color-secondary-foreground": theme.colors.secondaryForeground,
    "--color-accent": theme.colors.accent,
    "--color-accent-foreground": theme.colors.accentForeground,
    "--color-muted": theme.colors.muted,
    "--color-muted-foreground": theme.colors.mutedForeground,
    "--color-border": theme.colors.border,
    "--radius-sm": theme.borderRadius.sm,
    "--radius-md": theme.borderRadius.md,
    "--radius-lg": theme.borderRadius.lg,
  } as CSSProperties;
}

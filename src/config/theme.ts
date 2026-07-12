export type ThemeConfig = {
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
};

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "#8B3A3A",
    primaryForeground: "#FFFFFF",
    secondary: "#F5E6D3",
    secondaryForeground: "#3D2B1F",
    accent: "#C9A84C",
    accentForeground: "#1A1A1A",
    muted: "#F7F3EE",
    mutedForeground: "#6B5E54",
    border: "#E8DDD0",
  },
  fonts: {
    heading: "var(--font-family-heading)",
    body: "var(--font-family-body)",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "9999px",
  },
};

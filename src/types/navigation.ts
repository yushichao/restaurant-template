export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavigationConfig = {
  main: NavItem[];
  footer: NavItem[];
};

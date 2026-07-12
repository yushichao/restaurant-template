export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type OpeningPeriod = {
  open: string;
  close: string;
};

export type OpeningHours = {
  days: DayOfWeek[];
  periods: OpeningPeriod[];
  closed?: boolean;
};

export type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
  yelp?: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  cuisine: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  coordinates: GeoCoordinates;
  openingHours: OpeningHours[];
  social: SocialLinks;
};

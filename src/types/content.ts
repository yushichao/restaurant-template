export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating?: number;
};

export type FeatureFlags = {
  testimonials: boolean;
  gallery: boolean;
  featuredMenu: boolean;
  locationMap: boolean;
};

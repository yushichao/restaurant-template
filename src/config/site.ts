import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MANYU創作四川料理",
  tagline: "本格四川料理を、心ゆくまで",
  description:
    "Experience the art of Japanese dining at Sakura Bistro. Fresh ingredients, traditional techniques, and a warm atmosphere in the heart of the city.",
  url: "https://sakurabistro.example.com",
  cuisine: "Japanese",
  priceRange: "$$",
  address: {
    street: "川崎区砂子２丁目４-14GEMS川崎 8階",
    city: "川崎市",
    region: "神奈川県",
    postalCode: "210-0006",
    country: "JP",
  },
  phone: "044-280-7600",
  email: "hello@sakurabistro.example.com",
  coordinates: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  openingHours: [
    {
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      periods: [
        { open: "11:00", close: "14:30" },
        { open: "17:00", close: "22:30" },
      ],
    },
    {
      days: ["saturday", "sunday"],
      periods: [
        { open: "11:00", close: "15:00" },
        { open: "17:00", close: "23:00" },
      ],
    },
  ],
  social: {
    instagram: "https://www.instagram.com/manyutokyo/",
    facebook: "https://facebook.com/sakurabistro",
    yelp: "https://yelp.com/biz/sakurabistro",
  },
};

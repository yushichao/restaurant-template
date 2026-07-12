export type DietaryTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "spicy"
  | "popular"
  | "chef-special";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags?: DietaryTag[];
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
};

export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  tags: string[];
  brand: string;
  discountPercentage: number;
  images: string[];
  product_type: string;
  thumbnail: string;
  availabilityStatus: string;
  qty: number;
};

export type ProductImage = {
  src: string;
};

export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type CategoryObject = Record<string, Category>;

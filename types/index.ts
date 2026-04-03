export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  benefits: string;
  extractionMethod: string;
  stock: number;
  category: string;
  createdAt?: Date;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  items: CartItem[];
  totalPrice: number;
  status: string;
  createdAt?: Date;
}

export interface BlogPost {
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  published: boolean;
  publishedAt?: Date;
}

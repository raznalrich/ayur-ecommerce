export interface Product {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    currency: 'INR';
    images: string[];
    category: string;
    badge?: string;   // e.g. "New", "Hot"
    isActive: boolean;
}
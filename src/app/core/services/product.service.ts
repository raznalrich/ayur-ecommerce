import { Injectable, signal, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { SupabaseService } from './supabase.service';

interface DbProduct {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  price: number;
  currency: 'INR';
  images: string[];
  category: string;
  badge: string | null;
  is_active: boolean;
}

function toProduct(row: DbProduct): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    shortDescription: row.short_description,
    description: row.description,
    price: row.price,
    currency: row.currency || 'INR',
    images: row.images || [],
    category: row.category,
    badge: row.badge ?? undefined,
    isActive: row.is_active,
  };
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private supabase = inject(SupabaseService);
  private _products = signal<Product[]>([]);
  readonly isLoading = signal(true);
  readonly products = this._products.asReadonly();

  constructor() {
    this.load();
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    const { data, error } = await this.supabase.client
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    if (!error && data) {
      this._products.set((data as DbProduct[]).map(toProduct));
    }
    this.isLoading.set(false);
  }

  getProducts(): Product[] {
    return this._products();
  }

  getBySlug(slug: string): Product | undefined {
    return this._products().find(p => p.slug === slug);
  }

  async getBySlugAsync(slug: string): Promise<Product | undefined> {
    const cached = this._products().find(p => p.slug === slug);
    if (cached) return cached;
    const { data, error } = await this.supabase.client
      .from('products')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    return (!error && data) ? toProduct(data as DbProduct) : undefined;
  }

  getByCategory(category: string): Product[] {
    return this._products().filter(p => p.category === category);
  }
}
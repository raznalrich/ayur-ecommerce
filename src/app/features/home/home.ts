import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private productService = inject(ProductService);

  featuredProducts = computed(() => this.productService.products().slice(0, 4));
  isLoading = this.productService.isLoading;

brandScroll = [
  { name: 'Toyota',        logo: '●', color: '#0B5FFF' },
  { name: 'BMW',           logo: '●', color: '#0B5FFF' },
  { name: 'Mercedes-Benz', logo: '●', color: '#0B5FFF' },
  { name: 'Audi',          logo: '●', color: '#0B5FFF' },
  { name: 'Honda',         logo: '●', color: '#0B5FFF' },
  { name: 'Hyundai',       logo: '●', color: '#0B5FFF' },
  { name: 'Kia',           logo: '●', color: '#0B5FFF' },
  { name: 'Ford',          logo: '●', color: '#0B5FFF' },
  { name: 'Volkswagen',    logo: '●', color: '#0B5FFF' },
  { name: 'Tesla',         logo: '●', color: '#0B5FFF' },
  { name: 'Mahindra',      logo: '●', color: '#0B5FFF' },
  { name: 'Tata Motors',   logo: '●', color: '#0B5FFF' },
];

  categories = [
    { label: 'Floor Mats',         img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&h=300&auto=format&fit=crop' },
    { label: 'Seat Covers', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=300&auto=format&fit=crop' },
    { label: 'Audio Systems',        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&auto=format&fit=crop' },
    { label: 'Dashboard Accessories',        img: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=300&h=300&auto=format&fit=crop' },
    { label: 'Car Care Products',    img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=300&h=300&auto=format&fit=crop' },
    { label: 'Lighting & LEDs',  img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=300&auto=format&fit=crop' },
    { label: 'Phone Holders',     img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&auto=format&fit=crop' },
    { label: 'Exterior Styling',   img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&auto=format&fit=crop' },
  ];

  stats = [
    { value: '500+',  label: 'Products' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '300+', label: 'Car Models Supported' },
    { value: '15+', label: 'Years Experience' },
  ];

  services = [
    { icon: '🚗', title: 'Interior Accessories',  desc: 'Premium seat covers, floor mats, and dashboard accessories to upgrade your car interior.' },
    { icon: '💡', title: 'Electronics & Tech',  desc: 'Latest car electronics including audio systems, dash cams, and smart accessories.' },
    { icon: '🚚', title: 'Fast Delivery',   desc: 'Quick and reliable shipping with careful packaging to ensure products arrive safely.' },
    { icon: '✨', title: 'Exterior Styling',        desc: 'Body kits, spoilers, chrome accessories, and LED lights to make your car stand out.' },
  ];

  reasons = [
    { icon: '⭐', title: 'Premium Quality',       desc: 'All products are made from high-quality materials built to last.' },
    { icon: '✅', title: 'Perfect Fit', desc: 'Universal and custom-fit options available for all major car models.' },
    { icon: '💰', title: 'Best Prices',       desc: 'Competitive pricing with regular discounts and special offers.' },
    { icon: '🛑', title: 'Easy Returns',        desc: '30-day hassle-free return policy. Your satisfaction is guaranteed.' },
  ];

}

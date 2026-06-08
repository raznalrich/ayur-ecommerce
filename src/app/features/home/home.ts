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

  categories = [
    { label: 'Immunity',         img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&auto=format&fit=crop' },
    { label: 'Digestive Health', img: 'https://images.unsplash.com/photo-1611800065908-233b597db552?w=300&h=300&auto=format&fit=crop' },
    { label: 'Skin Care',        img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&auto=format&fit=crop' },
    { label: 'Hair Care',        img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=300&auto=format&fit=crop' },
    { label: 'Stress Relief',    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&auto=format&fit=crop' },
    { label: 'Detox & Cleanse',  img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&auto=format&fit=crop' },
    { label: 'Joint Health',     img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&auto=format&fit=crop' },
    { label: 'Women Wellness',   img: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=300&h=300&auto=format&fit=crop' },
  ];

  stats = [
    { value: '80+',  label: 'Consultations' },
    { value: '120+', label: 'Treatments' },
    { value: '140+', label: 'Products' },
    { value: '100+', label: 'Coaching Clients' },
  ];

  services = [
    { icon: '🌱', title: 'Herbal Supplements',  desc: 'Science-backed herbal supplements crafted from potent Ayurvedic roots and leaves.' },
    { icon: '💆', title: 'Wellness Therapies',  desc: 'Holistic body and mind therapies guided by certified Ayurvedic practitioners.' },
    { icon: '🚚', title: 'Doorstep Delivery',   desc: 'Safe, eco-friendly packaging delivered pan-India in 5–7 business days.' },
    { icon: '🌸', title: 'Organic Herbs',        desc: 'Freshly sourced certified-organic herbs with full traceability to their origin.' },
  ];

  reasons = [
    { icon: '🌿', title: '100% Organic',       desc: 'Every ingredient is certified organic. No pesticides, no chemicals.' },
    { icon: '👨‍⚕️', title: 'Certified Doctors', desc: 'Formulas developed and reviewed by BAMS-certified Ayurvedic physicians.' },
    { icon: '💊', title: 'Medicine Free',       desc: 'Natural healing without dependence on synthetic pharmaceutical drugs.' },
    { icon: '🛡️', title: 'Problem Care',        desc: 'Targeted formulations addressing specific health concerns at the root.' },
  ];

}

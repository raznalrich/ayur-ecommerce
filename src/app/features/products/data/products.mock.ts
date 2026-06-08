import { Product } from '../../../core/models/product.model';

export const PRODUCTS: Product[] = [
    {
        id: '1',
        slug: 'ashwagandha-root-powder',
        name: 'Ashwagandha Root Powder',
        shortDescription: 'Reduce stress & boost immunity with pure Ashwagandha.',
        description: 'Premium quality Ashwagandha (Withania somnifera) root powder. Adaptogenic herb known to reduce cortisol, enhance energy, and strengthen immunity. 100% natural, no additives or fillers. Sourced from certified organic farms. 200g pack.',
        price: 349,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop'],
        category: 'Immunity',
        badge: 'Best Seller',
        isActive: true
    },
    {
        id: '2',
        slug: 'triphala-churna',
        name: 'Triphala Churna',
        shortDescription: 'Classic Ayurvedic digestive blend of three sacred fruits.',
        description: 'The legendary Triphala blend — Amalaki, Bibhitaki & Haritaki — for holistic gut health. Supports digestion, detoxification, and bowel regularity. Free from artificial colours and preservatives. 250g pack.',
        price: 249,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1611800065908-233b597db552?w=600&auto=format&fit=crop'],
        category: 'Digestive Health',
        badge: 'Popular',
        isActive: true
    },
    {
        id: '3',
        slug: 'neem-tulsi-face-pack',
        name: 'Neem Tulsi Face Pack',
        shortDescription: 'Deep-cleansing herbal face pack for clear, glowing skin.',
        description: 'A powerful blend of Neem and Tulsi extracts that draws out impurities, controls oil, and prevents breakouts. Suitable for all skin types. Free from parabens and synthetic dyes. 100g pack.',
        price: 199,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&auto=format&fit=crop'],
        category: 'Skin Care',
        badge: 'New',
        isActive: true
    },
    {
        id: '4',
        slug: 'turmeric-brightening-soap',
        name: 'Turmeric Brightening Soap',
        shortDescription: 'Handcrafted turmeric soap for radiant, even-toned skin.',
        description: 'Cold-pressed soap bar enriched with organic turmeric and sandalwood. Brightens complexion, reduces dark spots, and provides gentle moisturisation. Free from SLS and artificial fragrances. 100g bar.',
        price: 129,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&auto=format&fit=crop'],
        category: 'Skin Care',
        isActive: true
    },
    {
        id: '5',
        slug: 'brahmi-hair-oil',
        name: 'Brahmi Hair Growth Oil',
        shortDescription: 'Scalp-nourishing herbal oil for strong, lustrous hair.',
        description: 'A traditional blend of Brahmi, Bhringraj, and Amla in a cold-pressed sesame base. Stimulates hair follicles, reduces dandruff, and prevents premature greying. Suitable for all hair types. 200ml bottle.',
        price: 299,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&auto=format&fit=crop'],
        category: 'Hair Care',
        badge: 'Hot',
        isActive: true
    },
    {
        id: '6',
        slug: 'amla-gold-juice',
        name: 'Amla Gold Juice',
        shortDescription: 'Cold-pressed Indian Gooseberry juice — your daily vitamin C.',
        description: 'Pure, cold-pressed Amla (Indian Gooseberry) juice with no added sugar or preservatives. Rich in vitamin C, antioxidants, and tannins. Supports immunity, digestion, and skin health. 500ml bottle.',
        price: 229,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&auto=format&fit=crop'],
        category: 'Immunity',
        badge: 'New',
        isActive: true
    },
    {
        id: '7',
        slug: 'chyawanprash-classic',
        name: 'Chyawanprash Classic',
        shortDescription: 'Time-tested Ayurvedic jam for strength and vitality.',
        description: 'Made from 40+ herbs with Amla as the base, this traditional Chyawanprash formula boosts immunity, improves respiratory health, and enhances overall vitality. No synthetic additives. 500g pack.',
        price: 449,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop'],
        category: 'Immunity',
        isActive: true
    },
    {
        id: '8',
        slug: 'giloy-immunity-tablets',
        name: 'Giloy Immunity Tablets',
        shortDescription: 'Standardised Giloy extract tablets for everyday immunity.',
        description: 'Each tablet delivers a standardised extract of Giloy (Tinospora cordifolia), the Ayurvedic "root of immortality". Supports immune function, reduces fever, and has anti-inflammatory properties. 60 tablets per bottle.',
        price: 279,
        currency: 'INR',
        images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop'],
        category: 'Immunity',
        badge: 'Best Seller',
        isActive: true
    }
];
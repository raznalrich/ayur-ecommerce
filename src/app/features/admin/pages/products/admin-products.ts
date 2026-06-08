import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminProductService } from '../../services/admin-product.service';
import { Product } from '../../../../core/models/product.model';

type Mode = 'list' | 'add' | 'edit';

const blankProduct = (): Product => ({
    id: '', slug: '', name: '', shortDescription: '', description: '',
    price: 0, currency: 'INR', images: [''], category: '', badge: '', isActive: true
});

@Component({
    selector: 'app-admin-products',
    imports: [FormsModule],
    templateUrl: './admin-products.html',
    styleUrl: './admin-products.scss'
})
export class AdminProducts {
    mode = signal<Mode>('list');
    form = signal<Product>(blankProduct());
    search = signal('');
    isSaving = signal(false);
    imageUploading = signal(false);

    filtered = computed(() => {
        const q = this.search().toLowerCase();
        return this.productSvc.products().filter(p =>
            !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
        );
    });

    constructor(public productSvc: AdminProductService) {}

    openAdd() {
        this.form.set(blankProduct());
        this.mode.set('add');
    }

    openEdit(p: Product) {
        this.form.set({ ...p, images: [...p.images] });
        this.mode.set('edit');
    }

    cancel() { this.mode.set('list'); }

    slugify(name: string) {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    async save() {
        const f = { ...this.form() };
        if (!f.name.trim() || !f.category || f.price <= 0) return;
        this.isSaving.set(true);
        try {
            if (this.mode() === 'add') {
                f.id = '';  // DB assigns uuid
                f.slug = this.slugify(f.name);
                await this.productSvc.addProduct(f);
            } else {
                await this.productSvc.updateProduct(f);
            }
            this.mode.set('list');
        } catch (e) {
            alert('Save failed: ' + (e as Error).message);
        } finally {
            this.isSaving.set(false);
        }
    }

    async delete(id: string) {
        if (confirm('Delete this product?')) {
            await this.productSvc.deleteProduct(id);
        }
    }

    async onFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        this.imageUploading.set(true);
        const url = await this.productSvc.uploadImage(file);
        if (url) {
            this.form.update(f => ({ ...f, images: [url] }));
        } else {
            alert('Image upload failed. Check that the \'product-images\' bucket exists and is public in Supabase.');
        }
        this.imageUploading.set(false);
    }
}

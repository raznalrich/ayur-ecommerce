import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AdminOrderService } from '../../features/admin/services/admin-order.service';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
    private readonly phone = '+917593016782';

    constructor(private orderSvc: AdminOrderService) {}

    createBuyLink(product: Product): string {
        const productUrl = window.location.origin + '/products/' + product.slug;
        const msg = `Hi! I want to buy this Car accessory product:\n\n` +
            `*` + product.name + `*\n` +
            `Price: Rs.` + product.price.toLocaleString('en-IN') + `\n\nProduct Link: ` + productUrl;
        return `https://wa.me/` + this.phone + `?text=` + encodeURIComponent(msg);
    }

    openWhatsapp(product: Product): void {
        this.orderSvc.logWhatsappOrder(product.id, product.name, product.price);
        window.open(this.createBuyLink(product), '_blank', 'noopener,noreferrer');
    }
}

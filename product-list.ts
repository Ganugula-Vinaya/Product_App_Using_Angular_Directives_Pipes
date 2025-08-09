import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { PriceFormatPipe } from '../../pipes/price-format-pipe';
import { Highlight } from '../../directives/highlight';
import { NgIf, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [PriceFormatPipe, Highlight, NgClass, NgIf, NgFor],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList {
  products: Product[] = [
    { id: 1, name: 'Wireless Mouse', price: 799, inStock: true, description: 'Ergonomic wireless mouse' },
    { id: 2, name: 'Mechanical Keyboard', price: 2499, inStock: true, description: 'RGB backlit keyboard' },
    { id: 3, name: 'Webcam 1080p', price: 1299, inStock: false, description: 'Full HD webcam' },
    { id: 4, name: 'USB-C Hub', price: 1999, inStock: true, description: '6-in-1 USB-C hub' },
    { id: 5, name: 'Laptop Stand', price: 999, inStock: false, description: 'Aluminium laptop stand' }
  ];
}


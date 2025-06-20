import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.models';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private categoryService = inject(CategoryService)
  private cartService = inject(CartService)
  private productService = inject(ProductService)
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(){
      this.getProducts()
  }

  addToCart(product: Product) {
      this.cartService.addToCart(product);
  }

  getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (category) => {
        this.categories.set(category);
      },
      error: () => {

      }
    })
  }
}

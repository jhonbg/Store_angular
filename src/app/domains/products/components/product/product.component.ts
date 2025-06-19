import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe'
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCard = new EventEmitter();

  addToCardHandler() {
    this.addToCard.emit(this.product);
  }
}

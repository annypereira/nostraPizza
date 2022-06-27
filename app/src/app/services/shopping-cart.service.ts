import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cart: ShoppingCart[] = [];

  addToCart(pizza: ShoppingCart) {
    this.cart.push(pizza);
  }

  deleteFromCart(id: number) {
    this.cart = this.cart.filter((product) => product.id !== id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PizzaInterface } from '../models/pizza.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private httpClient: HttpClient) {}

  getPizzas() {
    return this.httpClient.get('http://localhost:3000/pizzas');
  }

  createPizza(newPizza: PizzaInterface) {
    return this.httpClient.post('http://localhost:3000/pizzas', newPizza);
  }

  deletePizza(pizzaId: number) {
    return this.httpClient.delete(`http://localhost:3000/pizzas/${pizzaId}`);
  }

  updatePizza(pizzaId: number, updatedPizza: PizzaInterface) {
    return this.httpClient.delete(`http://localhost:3000/pizzas/${pizzaId}`);
  }
}

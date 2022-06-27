import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PizzaInterface } from '../models/pizza.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private httpClient: HttpClient) {}

  // En este objeto almacenamos la informacion de cada pizza y ademas cuando esté vacio sabremos si la pizza existe o no
  public pizzaData = {
    tittle: '',
    ingredients: '',
    cover: '',
    size: '',
    price: '',
  };

  // Funcion para setear la informacion de la pizza
  public clearPizza() {
    this.pizzaData = {
      tittle: '',
      ingredients: '',
      cover: '',
      size: '',
      price: '',
    };
  }

  // Funcion para setear con una pizza X la pizzaData
  public editItem(item: any) {
    this.pizzaData = item;
  }

  getPizzas() {
    return this.httpClient.get('http://localhost:3000/pizzas');
  }

  //   createPizza(newPizza: PizzaInterface) {
  //     return this.httpClient.post('http://localhost:3000/pizzas', newPizza);
  //   }

  //   deletePizza(pizzaId: number) {
  //     return this.httpClient.delete(`http://localhost:3000/pizzas/${pizzaId}`);
  //   }

  //   updatePizza(pizzaId: number, updatedPizza: any) {
  //     return this.httpClient.delete(`http://localhost:3000/pizzas/${pizzaId}`, updatedPizza);
  //   }
}

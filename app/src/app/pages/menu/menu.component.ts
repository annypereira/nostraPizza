import { PizzaService } from './../../services/pizza.service';
import { PizzaInterface } from './../../models/pizza.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public pizzaList: PizzaInterface[] = [];

  constructor(
    private pizzaService: PizzaService,
    public shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((data: any) => {
      this.pizzaList = data;
    });
  }

  public catchPizza(pizza: any) {
    this.pizzaService.editItem(pizza);
    this.router.navigate(['/menu']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public productCart: any;

  constructor(public shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {}
}

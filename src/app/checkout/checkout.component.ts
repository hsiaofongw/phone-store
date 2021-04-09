import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  queryTotalQuantityInCart(): number {
    return this.shoppingCartService.statsNumberOfItemsInCart();
  }

}

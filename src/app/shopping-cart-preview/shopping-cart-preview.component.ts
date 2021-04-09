import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart.service';

@Component({
  selector: 'app-shopping-cart-preview',
  templateUrl: './shopping-cart-preview.component.html',
  styleUrls: ['./shopping-cart-preview.component.scss']
})
export class ShoppingCartPreviewComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  /**
   * 统计购物车中总共有多少件商品
   */
  getNoItems(): number {
    return this.shoppingCartService.statsNumberOfItemsInCart();
  }

  /**
   * 统计购物车中的商品的总价值
   */
  getTotalPrice(): number {
    return this.shoppingCartService.calculatePriceTotal();
  }

}

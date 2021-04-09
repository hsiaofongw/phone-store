import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Phone } from '../phone';
import { phones } from '../phones-data';
import { ShoppingCartService } from '../shoppingcart.service';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})
export class PhoneListComponent implements OnInit {

  phones: Phone[] = [];

  constructor(
    private inventoryService: InventoryService,
    private shoppingCartService: ShoppingCartService
  ) { 
  }

  /**
   * 统计购物车中总共有多少件商品
   */
  getNoItems(): number {
    return this.shoppingCartService.statsNumberOfItemsInCart();
  }

  ngOnInit(): void {

    // 从文件中读入商品列表
    this.phones = phones;

    for (const phone of phones) {
      this.inventoryService.putIn(phone.id, phone.inStockQuantity);
    }
  }

}

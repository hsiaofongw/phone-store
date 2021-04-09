import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Phone } from '../phone';
import { ShoppingCartService } from '../shoppingcart.service';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.scss']
})
export class PhonedetailComponent implements OnInit {

  @Input()
  phone?: Phone;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private inventoryService: InventoryService
  ) { 

  }

  ngOnInit(): void {
  }

  /**
   * 将一部手机加入购物车
   * @param phone 手机
   */
  addItem(phone: Phone): void {

    const quantityInCart = this.shoppingCartService.queryQuantityInCart(phone.id);
    const quantityInInventory = this.inventoryService.queryQuantity(phone.id);

    if (quantityInCart < quantityInInventory) {
      this.shoppingCartService.addItem(phone, 1);
    }
  }

  /**
   * 将一部手机移出购物车
   */
  removeOneItem(phone: Phone): void {
    const quantityInCart = this.shoppingCartService.queryQuantityInCart(phone.id);

    if (quantityInCart > 0) {
      this.shoppingCartService.removeOneItem(phone.id);
    }
  }

  /**
   * 查询一部手机在购物车中的数量
   * @param phone 手机
   */
  queryQuantityInCart(phone: Phone): number {
    return this.shoppingCartService.queryQuantityInCart(phone.id);
  }

  /**
   * 查询一部手机在仓库中的数量
   * @param phone 手机
   */
  queryQuantityInInventory(phone: Phone): number {
    return this.inventoryService.queryQuantity(phone.id);
  }

}

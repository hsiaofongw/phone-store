import { Injectable } from '@angular/core';
import { Good } from './good';

// 记录每种商品的库存数量
// 键是商品的唯一编号，值是商品在库存中的数量
interface InventoryState {
  [key: number]: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private state: InventoryState = {}

  constructor() { }

  /**
   * 商品入库
   * @param itemId 商品唯一编号
   * @param quantity 要入库的数量
   */
  putIn(itemId: number, quantity: number) {
    let currentQuantity = this.state[itemId] || 0;
    currentQuantity += quantity;
    this.state[itemId] = currentQuantity;
  }

  /**
   * 商品出库
   * @param itemId 商品的唯一编号
   * @param quantity 要出库的数量
   */
  pushOut(itemId: number, quantity: number) {
    if (itemId in this.state) {
      let currentQuantity = this.state[itemId];
      currentQuantity -= quantity;
      currentQuantity = currentQuantity < 0 ? 0 : currentQuantity;
      this.state[itemId] = currentQuantity;
    }
  }

  /**
   * 查看商品在库存中的数量
   * @param itemId 商品的唯一编号
   */
  queryQuantity(itemId: number) {
    if (itemId in this.state) {
      return this.state[itemId];
    }
    else {
      return 0;
    }
  }
}

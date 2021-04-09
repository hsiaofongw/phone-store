import { Injectable } from '@angular/core';
import { Good } from './good';
import { IShoppingCart } from './shoppingcartstate';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private state: IShoppingCart = {};

  constructor() { }

  // 将一件商品添加至购物车
  addItem(item: Good, quantity: number = 1): void {
    if (item.id in this.state) {
      this.state[item.id].quantity += 1;
    }
    else {
      this.state[item.id] = {
        good: item,
        quantity: quantity
      };
    }
  }

  // 将购物车中的一件商品减少一件
  removeOneItem(itemId: number): void {
    if (itemId in this.state) {
      this.state[itemId].quantity -= 1;
      
      if (this.state[itemId].quantity === 0) {
        delete this.state[itemId];
      }
    }
  }

  /**
   * 将一种商品的全部数量都移出购物车
   * @param itemId 商品的唯一编号
   */
  removeItem(itemId: number): void {
    if (itemId in this.state) {
      delete this.state[itemId];
    }
  }

  /**
   * 计算购物车中的商品的总价值
   */
  calculatePriceTotal(): number {
    let result = 0;
    for (const itemId in this.state) {
      result += this.state[itemId].good.price * this.state[itemId].quantity;
    }

    return result;
  }

  /**
   * 统计购物车中总共有多少件商品
   */
  statsNumberOfItemsInCart(): number {
    let nItemsInTheCart: number = 0;
    for (const itemId in this.state) {
      nItemsInTheCart += this.state[itemId].quantity;
    }

    return nItemsInTheCart;
  }

  /**
   * 结账
   */
  checkout(): void {

    // 清空购物车
    this.state = {};
  }

  /**
   * 查询一种商品在购物车中的数量
   * @param itemId 商品的唯一编号
   */
  queryQuantityInCart(itemId: number): number {
    if (itemId in this.state) {
      return this.state[itemId].quantity;
    }
    else {
      return 0;
    }
  }
}

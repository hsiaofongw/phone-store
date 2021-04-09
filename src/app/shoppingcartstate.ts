import { Good } from "./good";

export interface ShoppingCartRecord {

    // 商品
    good: Good;

    // 件数
    quantity: number;
}

export interface IShoppingCart {

    // 键是商品 id 也就是商品的唯一编号
    // 值是一个购物车记录
    [key: number]: ShoppingCartRecord;
}
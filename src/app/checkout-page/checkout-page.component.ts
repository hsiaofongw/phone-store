import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart.service';
import { PaymentMethod } from './paymentMethod';
import { availablePaymentMethods } from './available-payment-methods';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  paymentMethods: PaymentMethod[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.paymentMethods = availablePaymentMethods;
  }

  /**
   * 计算购物车中商品的总价格
   */
  getTotalAmount(): number {
    return this.shoppingCartService.calculatePriceTotal();
  }

  onPayButtonClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    window.alert(`已使用支付方式支付成功，正在帮您跳转到首页……`);
    window.open('/', '_self');
  }

}

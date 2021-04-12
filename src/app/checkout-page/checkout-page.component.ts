import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart.service';
import { PaymentMethod } from './paymentMethod';
import { availablePaymentMethods } from './available-payment-methods';
import { NzButtonSize } from 'ng-zorro-antd/button';

type PaymentMethodsIndices = {
  [key: string]: string;
}

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {


  selectedPaymentMethod: string = "";
  paymentMethods: PaymentMethod[] = [];
  paymentMethodIdToPaymentMethodName: PaymentMethodsIndices = {};

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.paymentMethods = availablePaymentMethods;
    for (const p of this.paymentMethods) {
      this.paymentMethodIdToPaymentMethodName[p.id] = p.name;
    }
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

    const paymentMethodName = this.paymentMethodIdToPaymentMethodName[this.selectedPaymentMethod];
    const totalAmount = this.getTotalAmount();
    window.alert(`已使用${paymentMethodName}成功支付${totalAmount}元，正在帮您跳转到首页……`);
    window.open('/', '_self');
  }

}

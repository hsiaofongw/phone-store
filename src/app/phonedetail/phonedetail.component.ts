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

  addItem(phone: Phone): void {

    const quantityInCart = this.shoppingCartService.queryQuantityInCart(phone.id);
    const quantityInInventory = this.inventoryService.queryQuantity(phone.id);

    if (quantityInCart < quantityInInventory) {
      this.shoppingCartService.addItem(phone, 1);
    }
  }

  queryQuantityInCart(phone: Phone): number {
    return this.shoppingCartService.queryQuantityInCart(phone.id);
  }

  queryQuantityInInventory(phone: Phone): number {
    return this.inventoryService.queryQuantity(phone.id);
  }

}

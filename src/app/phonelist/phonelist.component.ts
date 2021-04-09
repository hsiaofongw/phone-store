import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Phone } from '../phone';
import { phones } from '../phones-data';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})
export class PhonelistComponent implements OnInit {

  phones: Phone[] = [];

  constructor(private inventoryService: InventoryService) { 
  }

  ngOnInit(): void {

    // 从文件中读入商品列表
    this.phones = phones;

    for (const phone of phones) {
      this.inventoryService.putIn(phone.id, phone.inStockQuantity);
    }
  }

}

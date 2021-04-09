import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart.service';
import { ShoppingCartSummaryLine } from '../shoppingcartsummary';

@Component({
  selector: 'app-shoppingcartoverview',
  templateUrl: './shoppingcartoverview.component.html',
  styleUrls: ['./shoppingcartoverview.component.scss']
})
export class ShoppingCartOverviewComponent implements OnInit {

  summary: ShoppingCartSummaryLine[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.summary = this.shoppingCartService.getSummary();
  }

}

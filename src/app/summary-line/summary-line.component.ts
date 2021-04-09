import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartSummaryLine } from '../shoppingcartsummary';

@Component({
  selector: 'app-summary-line',
  templateUrl: './summary-line.component.html',
  styleUrls: ['./summary-line.component.scss']
})
export class SummaryLineComponent implements OnInit {

  @Input()
  summaryLine?: ShoppingCartSummaryLine;

  constructor() { }

  ngOnInit(): void {
  }

}

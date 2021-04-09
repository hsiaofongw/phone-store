import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})
export class PhonelistComponent implements OnInit {

  phones: Phone[] = [
    { id: 0, modelName: 'phone1', description: 'desc1', inStockQuantity: 1},
    { id: 1, modelName: 'phone2', description: 'desc2', inStockQuantity: 10},
    { id: 2, modelName: 'phone3', description: 'desc3', inStockQuantity: 8},
    { id: 3, modelName: 'phone4', description: 'desc4', inStockQuantity: 100},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

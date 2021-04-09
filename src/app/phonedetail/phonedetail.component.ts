import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-phonedetail',
  templateUrl: './phonedetail.component.html',
  styleUrls: ['./phonedetail.component.scss']
})
export class PhonedetailComponent implements OnInit {

  @Input()
  phone?: Phone;

  constructor() { }

  ngOnInit(): void {
  }

}

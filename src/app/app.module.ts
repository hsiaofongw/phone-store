import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { PhoneListComponent } from './phonelist/phonelist.component';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartOverviewComponent } from './shoppingcartoverview/shoppingcartoverview.component';
import { SummaryLineComponent } from './summary-line/summary-line.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    PhoneListComponent,
    PhonedetailComponent,
    CheckoutComponent,
    ShoppingCartOverviewComponent,
    SummaryLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

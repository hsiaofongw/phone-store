import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhoneListComponent } from './phonelist/phonelist.component';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartOverviewComponent } from './shoppingcartoverview/shoppingcartoverview.component';
import { SummaryLineComponent } from './summary-line/summary-line.component';
import { ShoppingCartPreviewComponent } from './shopping-cart-preview/shopping-cart-preview.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhoneListComponent,
    PhonedetailComponent,
    CheckoutComponent,
    ShoppingCartOverviewComponent,
    SummaryLineComponent,
    ShoppingCartPreviewComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzRadioModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

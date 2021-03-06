import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PhoneListComponent } from './phonelist/phonelist.component';
import { ShoppingCartOverviewComponent } from './shoppingcartoverview/shoppingcartoverview.component';

const routes: Routes = [
  { path: 'phones', component: PhoneListComponent, },
  { path: 'cart', component: ShoppingCartOverviewComponent, },
  { path: 'checkout', component: CheckoutPageComponent, },
  { path: '', redirectTo: '/phones', pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '../app/modules/layout/layout.module';
<<<<<<< Updated upstream
=======
import { ExchangeRateModule } from './modules/exchange-rate/exchange-rate.module'
import { CustomerModule } from '../app/modules/customer/customer.module'
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    LayoutModule
=======
    HttpClientModule,
    LayoutModule,
    ExchangeRateModule,
    CustomerModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

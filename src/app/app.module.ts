import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '../app/modules/layout/layout.module';

import { HomeModule } from '../app/modules/home/home.module';
import { ExchangeRateModule } from './modules/exchange-rate/exchange-rate.module'
import { CustomerModule } from '../app/modules/customer/customer.module'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ExchangeRateModule
    CustomerModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

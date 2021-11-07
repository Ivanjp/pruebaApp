import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './modules/customer/component/region/region.component';

const routes: Routes = [
  //{path: 'exchange-rate', component: ExchangeRateComponent},
  {path: 'region', component: RegionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

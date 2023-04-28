import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  { path: '', component: OwnerComponent },
  { path: 'hotelRegistration', component: HotelregistrationComponent },
  { path: 'ownerLoginSuccess', component: LoginsuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }

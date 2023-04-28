import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'hotelBooking', component: HotelBookingComponent },
  { path: 'userLoginSuccess', component: LoginsuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

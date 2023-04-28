import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';


@NgModule({
  declarations: [
    UserComponent,
    LoginsuccessComponent,
    HotelBookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

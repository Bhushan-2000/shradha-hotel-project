import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    LoginsuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    SharedModule
  ]
})
export class AdminModule { }

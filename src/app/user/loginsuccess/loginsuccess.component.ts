import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApicallService } from 'src/app/common-apicall.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent {
  signInOrUp: any;
  getEndPoint: any;


  constructor(private commonApicallService: CommonApicallService, private router: Router) {

  }
  ngOnInit() {

    this.getEndPoint = this.commonApicallService.endPoint;

    console.log('signINOrUp-->', this.signInOrUp);

  }
  journeyOfBack() {
    this.signInOrUp = this.commonApicallService.signInOrUp;
    if (this.signInOrUp == 'signIn') {
      this.router.navigateByUrl('/signIn');
    }
    else {
      this.router.navigateByUrl('/signUp')
    }
  }

  viewHotelList() {
    this.router.navigateByUrl('/hotelDetails')
  }
}

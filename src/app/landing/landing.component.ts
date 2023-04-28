import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApicallService } from '../common-apicall.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private commonApicallService: CommonApicallService,
    private router: Router) {

  }
  navigateTo(gettingData: any) {
    this.commonApicallService.endPoint = gettingData;
    console.log("Service endPoint-->", this.commonApicallService.endPoint);

    if (gettingData == 'admin') {
      this.router.navigateByUrl('/admin')
    }
    else if (gettingData == 'owner') {
      this.router.navigateByUrl('/owner')
    }
    else {
      this.router.navigateByUrl('/user')
    }
  }
}

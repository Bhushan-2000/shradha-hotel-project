import { Component } from '@angular/core';
import { CommonApicallService } from '../common-apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.scss']
})
export class HoteldetailsComponent {
  tableHeadings = ["Owner Name", "Type Of Applicant", "Hotel Name", "Hotel Contact No", "Hotel Address", "City", "Star Rating", "No. Of Rooms", "No. Of Employes", "Member of hotel Association", "T&C"];;
  getEndPoint!: any;
  signInOrUp: any;
  inputBoxValue: any;
  hotelDetails: any;
  hotelEndPoint = 'hotelDetails';

  constructor(private commonApicallService: CommonApicallService, private router: Router) {

  }
  ngOnInit() {

    this.getEndPoint = this.commonApicallService.endPoint;

    console.log('signINOrUp-->', this.signInOrUp);
    this.getHotelDetails();
  }

  async getHotelDetails() {
    this.hotelDetails = await this.commonApicallService.getApiCall(this.hotelEndPoint).toPromise();
    console.log('hotelDetails-->', this.hotelDetails);
  }

  async delete(id: number) {
    await this.commonApicallService.deleteApiCall(this.hotelEndPoint, id).toPromise();
    this.getHotelDetails();
  }



  journeyOfBack() {
    if (this.getEndPoint == 'admin') {
      this.router.navigateByUrl('/admin/adminLoginSuccess')
    }
    else if (this.getEndPoint == 'owner') {
      this.router.navigateByUrl('/owner/ownerLoginSuccess')
    }
    else {
      this.router.navigateByUrl('/user/userLoginSuccess')
    }
  }

  bookNow() {
    this.router.navigateByUrl('/user/hotelBooking');
  }
}


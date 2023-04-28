import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApicallService } from 'src/app/common-apicall.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent {
  getEndPoint: any;
  signInOrUp: any;
  hotelDetailsByOwner: any = [];
  ownerName: any;
  hotelDetails: any;
  hotelEndPoint = 'hotelDetails';
  inputBoxValue: any;
  hotelDetailsById: any;
  tableHeadings = ["Owner Name", "Type Of Applicant", "Hotel Name", "Hotel Contact No", "Hotel Address", "City", "Star Rating", "No. Of Rooms", "No. Of Employes", "Member of hotel Association", "T&C", "Delete", "Edit"];



  constructor(private commonApicallService: CommonApicallService, private router: Router) {

  }
  ngOnInit() {
    this.getEndPoint = this.commonApicallService.endPoint;
    this.signInOrUp = this.commonApicallService.signInOrUp;
    this.ownerName = this.commonApicallService.ownerName;
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

  async viewMyHotelList() {

    this.hotelDetails = await this.commonApicallService.getApiCall('hotelDetails').toPromise();
    console.log("hotelDetails--> ", this.hotelDetails);

    if (this.hotelDetails) {
      this.hotelDetailsByOwner = [];
      this.hotelDetails.forEach((element: any) => {
        let name = element.ownerName?.toLowerCase();
        console.log(name);
        let signInName = this.ownerName?.toLowerCase();
        if (name == signInName) {
          this.hotelDetailsByOwner.push(element);

        }

      });
      console.log('this.hotelDetailsByOwner', this.hotelDetailsByOwner);
      if (this.hotelDetailsByOwner <= 0) {
        alert('Hotels Not found....')
      }
    }
  }

  viewAllHotelList() {
    this.router.navigateByUrl('/hotelDetails')
  }

  async delete(id: number) {
    await this.commonApicallService.deleteApiCall(this.hotelEndPoint, id).toPromise();
    alert("Are you sure you want to delete this item")
    this.viewMyHotelList();
  }

  async edit(id: number) {
    this.commonApicallService.editId = id;
    this.commonApicallService.editJourney = true;
    this.hotelDetailsById = await this.commonApicallService.getApiCall(this.hotelEndPoint, id).toPromise();
    console.log('hotelDetailsById-->', this.hotelDetailsById);
    this.commonApicallService.hotelDetailsById = this.hotelDetailsById;
    this.router.navigateByUrl('/owner/hotelRegistration');
  }

  newHotelRegister() {
    this.commonApicallService.editJourney = false;
    this.router.navigateByUrl('/owner/hotelRegistration');
  }

}

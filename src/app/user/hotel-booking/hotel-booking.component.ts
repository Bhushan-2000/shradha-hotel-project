import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApicallService } from 'src/app/common-apicall.service';



@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
  bookingForm!: FormGroup;
  getEndPoint: any;
  checkInDate: any;
  checkOutDate: any;
  bookingEndPoint = "hotelBooking";
  constructor(private formBuilder: FormBuilder, private router: Router, private commonApicallService: CommonApicallService) {

  }

  ngOnInit() {
    this.bookingNow();
    this.getEndPoint = this.commonApicallService.endPoint;
  }

  bookingNow() {
    this.bookingForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      checkInDate: [''],
      checkOutDate: [''],
      noOfGuest: [''],
      roomType: ['', [Validators.required]],
      amount: ['500', [Validators.required, Validators.pattern("[0-9]*$")]]
    })
  }


  async submit() {
    console.log(this.bookingForm.value);
    await this.commonApicallService.postApiCall(this.bookingEndPoint, this.bookingForm.value).toPromise()
    this.router.navigateByUrl('/user/userLoginSuccess')
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
}

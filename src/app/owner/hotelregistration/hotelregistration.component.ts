import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApicallService } from 'src/app/common-apicall.service';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.scss']
})
export class HotelregistrationComponent {
  hotelRegistrationForm!: FormGroup;
  hide: boolean = false;
  getEndPoint: any;
  hotelMenu = [
    { name: 'Dahi Vada' },
    { name: 'Shahi Paneer' },
    { name: 'Dal Makhani' },
    { name: 'French Fries' },
    { name: 'Laccha Parantha' },
  ]
  newHotelMenu: any;
  hotelDetailsById: any;
  isEditJourney!: boolean;
  editId!: number;

  constructor(private formBuilder: FormBuilder, private commonApicallService: CommonApicallService, private router: Router) {

  }

  ngOnInit() {
    this.isEditJourney = this.commonApicallService.editJourney;
    this.editId = this.commonApicallService.editId;
    this.hotelDetailsById = this.commonApicallService.hotelDetailsById;

    if (this.isEditJourney) {
      console.log('hotelDetailsById-->', this.hotelDetailsById);
      if (this.hotelDetailsById) {
        this.hotelRegistration();
      }

    }
    else {
      this.hotelRegistration()
    }
  }

  hotelRegistration() {
    this.hotelRegistrationForm = this.formBuilder.group({
      ownerName: [this.hotelDetailsById ? this.hotelDetailsById?.ownerName : '', [Validators.required, Validators.minLength(5)]],
      typeOfApplicant: [this.hotelDetailsById ? this.hotelDetailsById?.typeOfApplicant : ''],
      hotelName: [this.hotelDetailsById ? this.hotelDetailsById?.hotelName : '', [Validators.required, Validators.minLength(5)]],
      hotelContact: [this.hotelDetailsById ? this.hotelDetailsById?.hotelContact : '', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      HotelAddress: [this.hotelDetailsById ? this.hotelDetailsById?.HotelAddress : '', [Validators.required]],
      city: [this.hotelDetailsById ? this.hotelDetailsById?.city : '', [Validators.required]],
      starRating: [this.hotelDetailsById ? this.hotelDetailsById?.starRating : '', [Validators.required]],
      hotelAsso: [''],
      hotelAssoList: ['select',],
      numberOfRooms: [this.hotelDetailsById ? this.hotelDetailsById?.numberOfRooms : '', [Validators.required, Validators.pattern("[0-9]*$")]],
      noOfEmployes: [this.hotelDetailsById ? this.hotelDetailsById?.noOfEmployes : '', [Validators.required, Validators.pattern("[0-9]*$")]],
      acceptTerms: [false, Validators.requiredTrue],

    })
  }


  async submit() {
    console.log(this.hotelRegistrationForm.value);
    if (this.isEditJourney) {
      await this.commonApicallService.patchApiCall('hotelDetails', this.hotelRegistrationForm.value, this.editId).toPromise();
    }
    else {
      this.commonApicallService.postApiCall('hotelDetails', this.hotelRegistrationForm.value).subscribe();
    }


    this.router.navigateByUrl('/owner/ownerLoginSuccess');
  }

  journeyOfBack() {
    this.router.navigateByUrl('/owner/ownerLoginSuccess');
  }

  toggleShow() {
    this.hide = !this.hide
  }

  toggleHide() {
    this.hide = false;
  }





}

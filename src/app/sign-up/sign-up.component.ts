import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApicallService } from '../common-apicall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  showPassword: boolean = false;
  confirmPassword: any;
  passwordMatch: boolean = false;
  password: any;
  showConfirmPassword: boolean = false;
  getEndPoint: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private commonApicallService: CommonApicallService) {

  }
  ngOnInit() {
    this.signup();
    this.getEndPoint = this.commonApicallService.endPoint;
  }

  signup() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      pancard: ['', [Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
      gender: ['others'],
      city: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*$')]],
      acceptTerms: [false, Validators.requiredTrue],
    })
  }

  submit() {
    console.log(this.signUpForm.value);
    this.commonApicallService.postApiCall(this.getEndPoint, this.signUpForm.value).subscribe(response => { })

    this.commonApicallService.signInOrUp = 'signUp';

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

  passwordValidation(pass: any) {
    this.password = pass.target.value;
    if (this.password == this.confirmPassword) {
      this.passwordMatch = false;
    }
    else {
      this.passwordMatch = true;
    }
  }

  confirmpasswordValidation(confirmpass: any) {
    this.confirmPassword = confirmpass.target.value;
    if (this.password == this.confirmPassword) {
      this.passwordMatch = false;
    }
    else {
      this.passwordMatch = true;
    }
  }

  visiblity() {
    this.showPassword = !this.showPassword;
  }

  confirmVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordInput() {
    return this.signUpForm.get('password');
  }
  journeyOfBack() {
    this.router.navigateByUrl('/signIn');
  }




}



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApicallService } from '../common-apicall.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm!: FormGroup;
  Data: any;
  hide = true;
  getEndPoint: any;
  getApiData: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private commonApicallService: CommonApicallService, private snackBar: MatSnackBar) {

  }



  ngOnInit(): void {
    this.signIn();
    this.getEndPoint = this.commonApicallService.endPoint;
    console.log("getEndPoint-->", this.getEndPoint);

  }

  signIn() {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]*$')]],
    });
  }

  journeyOfBack() {
    if (this.getEndPoint == 'admin') {
      this.router.navigateByUrl('/admin')
    }
    else if (this.getEndPoint == 'owner') {
      this.router.navigateByUrl('/owner')
    }
    else {
      this.router.navigateByUrl('/user')
    }
  }

  passwordInput() {
    return this.signInForm.get('password');
  }



  async submit() {
    console.log('signInForm-->', this.signInForm.value);
    // get Api call of admin
    this.getApiData = await this.commonApicallService.getApiCall(this.getEndPoint).toPromise();

    let signInData = this.getApiData.find((element: any) => {
      return element.name === this.signInForm.value.name && element.password === this.signInForm.value.password
    })
    if (signInData) {
      this.commonApicallService.signInOrUp = 'signIn';

      if (this.getEndPoint == 'admin') {
        // alert('login successfully');
        // const dialogRef =this.dialog.open(RglMorePopupComponent, {
        //   width: '250px',
        //   position: { top: '50px', right: '10px' },
        //   panelClass: 'rgl-more-popup',
        //   backdropClass: 'rgl-more-overlay',
        // });


        const config = new MatSnackBarConfig();
        config.verticalPosition = 'top';
        this.snackBar.open('Login Successfully', 'OK', config);
        this.router.navigateByUrl('/admin/adminLoginSuccess')
      }
      else if (this.getEndPoint == 'owner') {
        alert('login successfully');
        this.commonApicallService.ownerName = this.signInForm.value.name;
        this.router.navigateByUrl('/owner/ownerLoginSuccess')
      }
      else {
        this.router.navigateByUrl('/user/userLoginSuccess')
      }
    }
    else {
      alert('User not Fount')
      this.signInForm.reset();
      this.router.navigateByUrl('/signIn');

    }





  }
}

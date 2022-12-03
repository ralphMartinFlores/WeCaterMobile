import { Component, OnInit } from '@angular/core';
// Other imports
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';
// End of other imports

@Component({
  selector: 'app-rehistros',
  templateUrl: './rehistros.page.html',
  styleUrls: ['./rehistros.page.scss'],
})
export class RehistrosPage implements OnInit {

  // Initialization of variables
  registrationForm: FormGroup;
  isSubmitted = false;
  inputValue: any;
  inputValue2: any;
  inputValue3: any;
  inputValue4: any;
  inputValue5: any;
  inputValue6: any;
  username: any;
  email: any;
  userInfo: any = {};
  public type = 'password';
  public showPass = false;
  // End of initialization

  constructor(private ds : DataService, public formBuilder: FormBuilder, public router: Router) {
   
  }

  ngOnInit() {

    // Registration Form Validation Parameters
    this.registrationForm = this.formBuilder.group({
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      emailaddress: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')]],
      contactNum: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(11), Validators.minLength(11)]],
      userName: ['', [Validators.required, Validators.minLength(2)]],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
      checkBox: ['', [Validators.required]]
    })
  }

// Registration Form Validation Errors
get errorControl() {
  return this.registrationForm.controls;
}

// Makes password field in plain text or password format
showPassword() {
  this.showPass = !this.showPass;
  if (this.showPass) {
    this.type = 'text';
  }
  else {
    this.type = 'password';
  }
}

// Checks if username entered by user already exists in the database, if not, inserts form field values to the database
async checkUsernameEmailExist() {

    // Checks if form is valid or not 
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'You have to provide all the required input.'
      })
      return false;
    }
    
    this.userInfo.username = this.inputValue5;

    // API Request that searches entered username by the user in the database
    await this.ds.sendApiRequest("checkUsernameEmailExist", this.userInfo).subscribe(res => {
    console.log(res);
    console.log(res.payload);
    if (res.payload.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'Your desired username is already taken.'
      })
    }
    else {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        confirmButtonColor: '#30a0e0',
        text: 'Your desired username is available.'
      }) .then ((result) => {
        if (result.value) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            confirmButtonColor: '#30a0e0',
            text: 'You have successfully registered with WeCater.'
          }) .then (async (result) => {
            if(result.value) {
            this.userInfo.lname = this.inputValue;
            this.userInfo.fname = this.inputValue2;
            this.userInfo.email = this.inputValue3;
            this.userInfo.contactnum = this.inputValue4;
            this.userInfo.username = this.inputValue5;
            this.userInfo.password = this.inputValue6;
          // API Request that registers the form field values to the database
          await this.ds.sendApiRequest("register", this.userInfo).subscribe(res => {
          console.log(res);
          });
          this.router.navigate(['/we-login']);
          }
          })
        }
      })
    }
    });
  }

  termsCheck() {
    var check = <HTMLInputElement>document.getElementById('termsCheckBox');
    var isChecked = check.checked;
    if (isChecked == true) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        confirmButtonColor: '#30a0e0',
        text: 'You have accepted the terms and conditions. Please head on to the About Us page to know more about the End-User License Agreement and Privacy Policy.'
      })
    }
    else {
      Swal.fire({
        icon: 'info',
        title: 'Reminder',
        confirmButtonColor: '#30a0e0',
        text: 'You have to accept the terms and conditions. By clicking on the "I accept the terms and conditions" button, you are agreeing to the EULA of WeCater.'
      })
    }
  }
}
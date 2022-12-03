import { Component, OnInit } from '@angular/core';
// Other imports
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/src/sweetalert2.js';
// End of other imports

@Component({
  selector: 'app-we-login',
  templateUrl: './we-login.page.html',
  styleUrls: ['./we-login.page.scss'],
})
export class WeLoginPage implements OnInit {

  // Initialization of Variables
  loginForm: FormGroup;
  isSubmitted = false;
  inputLogid: any;
  inputLogpass: any;
  account: any = {};
  public type = 'password';
  public showPass = false;
  // End of initialization

  constructor(private ds: DataService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    // Login Form validation
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // Login Form Validation errors
  get errorControl() {
    return this.loginForm.controls;
  }

// Signs in the user
async newLogin() {

  // Checks if Login form is valid or not
  this.isSubmitted = true;
  if (!this.loginForm.valid) {
  Swal.fire({
    icon: 'error',
    title: 'Oops!',
    confirmButtonColor: '#30a0e0',
    text: 'You have to enter your WeCater credentials.'
  }) 
  return false;
}

  else {

    this.account.uname = this.inputLogid;
    this.account.pword = this.inputLogpass;
    console.log(this.account);

    // API request to sign in the user based on entered username and password
    await this.ds.sendApiRequest("login", this.account).subscribe(res => {
    console.log(res);
    console.log(res.payload.length);
  
      if (res.payload.role > 1) {
        Swal.fire({
          icon: 'question',
          title: 'Admin?',
          text: 'It seems you are signing in an account with administrative privileges. Only users are allowed here.',
          confirmButtonColor: '#30a0e0'
        })
      }

      // Prompts the user if he/she entered wrong username or password
      else if (res.payload.length == 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          confirmButtonColor: '#30a0e0',
          text: 'Incorrect username or password.'
        })
      }

      // Signs in the user and redirects them to home page, also sets user details onto Local Storage
      else {
        localStorage.setItem("Name", res.payload.fname + " " + res.payload.lname);
        localStorage.setItem("Lastname", res.payload.lname);
        localStorage.setItem("Firstname", res.payload.fname);
        localStorage.setItem("Username", res.payload.uname);
        localStorage.setItem("EncryptedPassword", res.payload.password);
        localStorage.setItem("EmailAddress", res.payload.emailadd);
        localStorage.setItem("ContactNumber", res.payload.contactnumber);
        localStorage.setItem("UserID", res.payload.uid);
        localStorage.setItem("NakedPassword", this.inputLogpass);
        
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          confirmButtonColor: '#30a0e0',
          text: 'Welcome!' + ' ' + localStorage.getItem('Name')
        })

        this.router.navigate(['/tabs/tab1']);
         
        }
      });
    }
  }

// Shows password in plain text format or password format
showPassword() {
  this.showPass = !this.showPass;
  if (this.showPass) {
    this.type = 'text';
  }
  else {
    this.type = 'password';
  }
}
}
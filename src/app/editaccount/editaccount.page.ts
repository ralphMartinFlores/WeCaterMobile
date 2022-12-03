import { Component, OnInit } from '@angular/core';
// Other imports
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { DataService } from '../services/data.service';
// End of other imports

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.page.html',
  styleUrls: ['./editaccount.page.scss'],
})
export class EditaccountPage implements OnInit {

  // Initialization of Variables
  updateForm: FormGroup;
  isSubmitted = false;
  inputValue: any;
  inputValue2: any;
  inputValue3: any;
  inputValue4: any;
  inputValue6: any;
  userid: any;
  userInfo: any = {};
  public type = 'password';
  public showPass = false;
  // End of Initialization of Variables

  constructor(public formBuilder: FormBuilder, public router: Router, private ds : DataService) { }

  ngOnInit() {

      //Gets stored values in Local Storage
      this.userid = document.getElementById('userid').innerHTML = localStorage.getItem("UserID");
      this.inputValue = localStorage.getItem("Lastname");
      this.inputValue2 = localStorage.getItem("Firstname");
      this.inputValue3 = localStorage.getItem("EmailAddress");
      this.inputValue4 = localStorage.getItem("ContactNumber");
      this.inputValue6 = localStorage.getItem("NakedPassword");
      this.userInfo.userid = this.userid;
      
      // API Request to load current user based on user_id
      this.ds.sendApiRequest("loadCurrentUser", this.userInfo).subscribe(res => {
      console.log(res);
      });

      // Form Validation Parameters
      this.updateForm = this.formBuilder.group({
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      emailaddress: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')]],
      contactNum: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(11), Validators.minLength(11)]],
      passWord: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  }

  // Form Validation Errors
  get errorControl() {
    return this.updateForm.controls;
  }

// Make password field in plain text or password form
  showPassword() {
  this.showPass = !this.showPass;
  if (this.showPass) {
    this.type = 'text';
  }
  else {
    this.type = 'password';
  }
}

// Updates Profile upon user completion
async updateProfile() {

  // Checks if form is valid, if not, prompts the user to provide all required input
  this.isSubmitted = true;
  if (!this.updateForm.valid) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      confirmButtonColor: '#30a0e0',
      text: 'You have to provide all the required input.'
    })
  return false;
}
    
  // Updates user in the database and signs out the user
  else {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      confirmButtonColor: '#30a0e0',
      text: 'You have updated your profile and will now be signed out of WeCater. Please sign in again with your newly updated WeCater account.'
      }) .then (async (result) => {
        if (result.value) {
          this.userInfo.lname = this.inputValue;
          this.userInfo.fname = this.inputValue2;
          this.userInfo.email = this.inputValue3;
          this.userInfo.contactnum = this.inputValue4;
          this.userInfo.password = this.inputValue6;
          this.userInfo.userid = this.userid;
          localStorage.clear();
        
          await this.ds.sendApiRequest("update", this.userInfo).subscribe(res => {
          console.log(res);
          });
          this.router.navigate(['/tabs/tab1']);
        }
      })
    }
  }

}
import { Component } from '@angular/core';
// Other imports
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// End of other imports

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public router: Router) {}

  ionViewWillEnter() {

    // Gets values from Local Storage to display in User Account Details Card
    document.getElementById('name').innerHTML = localStorage.getItem("Name");
    document.getElementById('username').innerHTML = localStorage.getItem("Username");
    document.getElementById('email').innerHTML = localStorage.getItem("EmailAddress");
    document.getElementById('contact').innerHTML = localStorage.getItem("ContactNumber");

    // Shows and Hides cards based on if no user is signed in
    if (window.localStorage.length === 0) {
      document.getElementById('default').hidden = true;
      document.getElementById('ggss').hidden = true;
      document.getElementById('empty').hidden = false;
      document.getElementById('updateProfile').hidden = true;
    }

    // Shows and Hides cards based on if a user is signed in
    else {
      document.getElementById('default').hidden = false;
      document.getElementById('ggss').hidden = false;
      document.getElementById('empty').hidden = true;
      document.getElementById('updateProfile').hidden = false;
    }
  }

}
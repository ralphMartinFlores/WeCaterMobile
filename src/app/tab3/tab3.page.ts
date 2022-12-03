import { Component } from '@angular/core';
// Other imports
import Swal from 'sweetalert2/src/sweetalert2.js';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
// End of other imports

declare var require: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {


  constructor(public router: Router, public navCtrl: NavController) {}

  ionViewWillEnter() {
    // Disables or Enables Sign out button based on if a user is signed in
    if (window.localStorage.length === 0) {
      const so = <HTMLIonItemElement>document.getElementById('signOutButton');
      so.disabled = true;
    }

    else {
      const so = <HTMLIonItemElement>document.getElementById('signOutButton');
      so.disabled = false;
    }
  }

  // Signs out the current user
  async logoutToast() {

    // Prompts the user to sign in before being able to properly sign out 
    if (window.localStorage.length === 0) {
      const Swal = require('sweetalert2')
      Swal.fire ({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'You have to sign in to WeCater first.'
      })
    }

    // Clears the contents of the Local Storage, redirects the user back to the home page and effectively signing out the current user
    else {
      const Swal = require('sweetalert2')
      Swal.fire({
        title: 'Are you sure you want to sign out of WeCater?',
        text: "You have to sign in again to access some of WeCater's features.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#30a0e0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, sign out of WeCater.'
      }) .then ((result) => {
        if (result.value) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            confirmButtonColor: '#30a0e0',
            text: 'You have signed out of WeCater.'
          }) .then ((result) => {
            if (result.value) {
              localStorage.clear();
              this.router.navigate(['/tabs/tab1']);
            }
          })
        }
        })
    }
    
}

// Checks if user is still signed in upon sign out button click
loginSession() {
  if (window.localStorage.length > 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Wait!',
      confirmButtonColor: '#30a0e0',
      text: 'You are still signed in with your WeCater account.'
    })
  }

  else {
    this.router.navigate(['/we-login']);
}
}
}
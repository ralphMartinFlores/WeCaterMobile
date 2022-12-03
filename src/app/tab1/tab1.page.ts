import { Component, OnInit } from '@angular/core';
// Other imports
import { Router } from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';
// End of other imports

declare var require: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // Variable Initialization
  public inp: string;
  searchBarr: any;
  

  constructor(public router: Router) {
    
  }

  ngOnInit() {
    document.getElementById('noResultsCard').hidden = true;
    document.getElementById('suggestions').hidden = true;
  }

  navigateNearest() {
    if (window.navigator.onLine) {
      this.router.navigate(['/nearestcatering']);
    }
    else {
      Swal.fire({
          icon: 'error',
          title: 'No Internet',
          confirmButtonColor: '#30a0e0',
          text: 'It seems that you are not connected to the internet, you may not be able to see nearby catering services. Please ensure you have stable internet connection.'
      })
  }
  }

  // Presents catering services under category type On Premise 
  onPremise() {
    document.getElementById('lanors').hidden = true;
    document.getElementById('lospolluelos').hidden = true;
    document.getElementById('ricos').hidden = false;
  }

  // Presents catering services under category type Off Premise
  offPremise() {
    document.getElementById('ricos').hidden = true;
    document.getElementById('lanors').hidden = false;
    document.getElementById('lospolluelos').hidden = false;
  }

  // Presents all catering services after categorization
  viewAll() {
    document.getElementById('lanors').hidden = false;
    document.getElementById('ricos').hidden = false;
    document.getElementById('edwins').hidden = false;
    document.getElementById('lospolluelos').hidden = false;
    document.getElementById('cateringCategories').hidden = false;
    document.getElementById('noResultsCard').hidden = true;
    document.getElementById('suggestions').hidden = true;
  }

  // Result presented if user entered nothing in the searchbar
  searchEmpty() {
    const searchBar = <HTMLInputElement>document.getElementById('searchBar');
    if (searchBar.value.length == 0) {
      document.getElementById('suggestions').hidden = false;
      document.getElementById('lanors').hidden = true;
      document.getElementById('ricos').hidden = true;
      document.getElementById('edwins').hidden = true;
      document.getElementById('lospolluelos').hidden = true;
      document.getElementById('cateringCategories').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }
  }

  ricosMap() {
    if(navigator.onLine){
      Swal.fire({
        html: '<iframe style="width: auto; border: 1px solid black;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.9110770717543!2d120.27621431460092!3d14.830247989656577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1113ede3bd434569%3A0xe13b6bee71d2c685!2sRico&#39;s%20Fastfood%20%26%20Restaurant!5e0!3m2!1sen!2sph!4v1589440263272!5m2!1sen!2sph" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br><h4>21 W 4th St, Olongapo, Zambales</h4>',
        imageUrl: '/assets/marker.png',
        imageHeight: 64,
        imageWidth: 64,
        confirmButtonColor: '#30a0e0'
      })
     } else {
       Swal.fire({
         icon: 'warning',
         title: 'No Internet',
         confirmButtonColor: '#30a0e0',
         html: 'It seems you are not connected to the internet, you may not see the map of the catering service. <br> Here is something for you though: <br> 21 W 4th St, Olongapo, Zambales'
       })
     }
  }

  edwinsMap() {
    if (navigator.onLine) {
      Swal.fire({
        html: '<iframe style="width: auto; border: 1px solid black;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.905095397126!2d120.27832201460092!3d14.830583589656335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711bdc245577%3A0xaf783ec4527da2d5!2sEdwin&#39;s%20Restaurant%20and%20Catering%20Service!5e0!3m2!1sen!2sph!4v1589441050444!5m2!1sen!2sph" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br><h4>730 Rizal Avenue Extension, Olongapo, 2200 Zambales</h4>',
        imageUrl: '/assets/marker.png',
        imageHeight: 64,
        imageWidth: 64,
        confirmButtonColor: '#30a0e0'
      })
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'No Internet',
        confirmButtonColor: '#30a0e0',
        html: 'It seems you are not connected to the internet, you may not see the map of the catering service. <br> Here is something for you though: <br> 730 Rizal Avenue Extension, Olongapo, 2200 Zambales'
      })
    }
  }

  polluelosMap() {
    if (navigator.onLine) {
      Swal.fire({
      html: '<iframe style="width: auto; border: 1px solid black;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.6206492822416!2d120.29023021460115!3d14.846533789646276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339670fa024fbe53%3A0xe5820732d9ddb026!2sLos%20Polluelos%20Lechon%20%26%20Catering%20Services!5e0!3m2!1sen!2sph!4v1589441396666!5m2!1sen!2sph" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br><h4>2753 Rizal Ave, Olongapo, 2200 Zambales</h4>',
      imageUrl: '/assets/marker.png',
      imageHeight: 64,
      imageWidth: 64,
      confirmButtonColor: '#30a0e0'
    })
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'No Internet',
        confirmButtonColor: '#30a0e0',
        html: 'It seems you are not connected to the internet, you may not see the map of the catering service. <br> Here is something for you though: <br> 2753 Rizal Ave, Olongapo, 2200 Zambales'
      })
    }
  }

  lanorsMap() {
    if (navigator.onLine) {
      Swal.fire({
      html: '<iframe style="width: auto; border: 1px solid black;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.8422851729656!2d120.28322901479198!3d14.834107089654097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711d29bc4185%3A0x50d57473212636a9!2s124%20Fendler%20St%2C%20Olongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1589777104717!5m2!1sen!2sph" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br><h4>124 Fendler St, Olongapo, Zambales</h4>',
      imageUrl: '/assets/marker.png',
      imageHeight: 64,
      imageWidth: 64,
      confirmButtonColor: '#30a0e0'
    })
    }
  }

  // Presents results in searchbar input 
  searchresult() {
    if (this.inp == "Lanors" || 
    this.inp == "lanors" || 
    this.inp == "La'Nors" || 
    this.inp == "nors" || 
    this.inp == "la" || 
    this.inp == "La'Nors Kitchen" || 
    this.inp == "la'nors kitchen" || 
    this.inp == "la'nors" || 
    this.inp == "LANORS" || 
    this.inp == "LA'NORS" || 
    this.inp == "LA" || 
    this.inp == "NORS" || 
    this.inp == "LA'NORS KITCHEN" || 
    this.inp == "LANORS KITCHEN" ||
    this.inp == "kitchen" ||
    this.inp == "KITCHEN"
    ) {
      document.getElementById('ricos').hidden = true;
      document.getElementById('edwins').hidden = true;
      document.getElementById('lospolluelos').hidden = true;
      document.getElementById('suggestions').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }

    else if (
      this.inp == "Ricos" ||
      this.inp == "ricos" ||
      this.inp == "RICOS" ||
      this.inp == "Rico's" ||
      this.inp == "rico's fastfood & restaurant" ||
      this.inp == "RICO'S FASTFOOD & RESTAURANT"
      ) {
      document.getElementById('lanors').hidden = true;
      document.getElementById('edwins').hidden = true;
      document.getElementById('lospolluelos').hidden = true;
      document.getElementById('suggestions').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }

    else if (
      this.inp == "fastfood" ||
      this.inp == "FASTFOOD" ||
      this.inp == "fast" ||
      this.inp == "FAST" ||
      this.inp == "food" ||
      this.inp == "FOOD" ||
      this.inp == "Fastfood" ||
      this.inp == "fa" ||
      this.inp == "FA" ||
      this.inp == "fo" ||
      this.inp == "FO"
    ) {
      document.getElementById('ricos').hidden = false;
      document.getElementById('edwins').hidden = true;
      document.getElementById('lospolluelos').hidden = false;
      document.getElementById('lanors').hidden = true;
      document.getElementById('suggestions').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }

    else if (
      this.inp == "restaurant" ||
      this.inp == "RESTAURANT" ||
      this.inp == "Restaurant" ||
      this.inp == "rest" ||
      this.inp == "REST" ||
      this.inp == "restau" ||
      this.inp == "RESTAU"
    ) {
      document.getElementById('lanors').hidden = true;
      document.getElementById('lospolluelos').hidden = true;
      document.getElementById('suggestions').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }

    else if (
      this.inp == "edwin's" ||
      this.inp == "EDWIN's" ||
      this.inp == "edwins" ||
      this.inp == "EDWINS" ||
      this.inp == "Edwin's" ||
      this.inp == "edwin's restaurant" ||
      this.inp == "edwins restaurant" ||
      this.inp == "EDWIN'S RESTAURANT" ||
      this.inp == "EDWINS RESTAURANT" ||
      this.inp == "ed" ||
      this.inp == "ED" ||
      this.inp == "win" ||
      this.inp == "WIN" ||
      this.inp == "EDWIN"
    ) {
      document.getElementById('lanors').hidden = true;
      document.getElementById('ricos').hidden = true;
      document.getElementById('lospolluelos').hidden = true;
      document.getElementById('suggestions').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }

    else if (
      this.inp == "los" ||
      this.inp == "LOS" ||
      this.inp == "los polluelos" ||
      this.inp == "LOS POLLUELOS" ||
      this.inp == "polluelos" ||
      this.inp == "POLLUELOS" ||
      this.inp == "Los Polluelos" ||
      this.inp == "lo" ||
      this.inp == "LO" ||
      this.inp == "lechon" ||
      this.inp == "LECHON" ||
      this.inp == "le" ||
      this.inp == "LE" ||
      this.inp == "Los Polluelos Lechon & Restaurant" ||
      this.inp == "los polluelos lechon & restaurant" ||
      this.inp == "LOS POLLUELOS LECHON & RESTAURANT" ||
      this.inp == "pol" ||
      this.inp == "POL"
    ) {
      document.getElementById('lanors').hidden = true;
      document.getElementById('ricos').hidden = true;
      document.getElementById('edwins').hidden = true;
      document.getElementById('suggestions').hidden = true;
      document.getElementById('noResultsCard').hidden = true;
    }

    else {
        document.getElementById('lanors').hidden = true;
        document.getElementById('ricos').hidden = true;
        document.getElementById('edwins').hidden = true;
        document.getElementById('lospolluelos').hidden = true;
        document.getElementById('cateringCategories').hidden = true;
        document.getElementById('noResultsCard').hidden = false;
        document.getElementById('suggestions').hidden = true;
    }
  }

  // Sets name of catering service into Local Storage
  async lanorReview() {
    
    if (window.localStorage.length == 0) {
      const Swal = require('sweetalert2')
      Swal.fire ({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'You have to sign in to WeCater first before you can give any reviews. '
      })
    } 

    else {
      localStorage.setItem("CateringName", "La Nors Kitchen");
      this.router.navigate(['/reviews']);
    }
  }

  // Sets name of catering service into Local Storage
  async ricosReview() {
    
    if (window.localStorage.length == 0) {
      const Swal = require('sweetalert2')
      Swal.fire ({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'You have to sign in to WeCater first before you can give any reviews.'
      })
    } 

    else {
      localStorage.setItem("CateringName", "Ricos Fastfood & Restaurant");
      this.router.navigate(['/reviews']);
    }
  }

  // Sets name of catering service into Local Storage
  async edwinsReview() {
    
    if (window.localStorage.length == 0) {
      const Swal = require('sweetalert2')
      Swal.fire ({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'You have to sign in to WeCater first before you can give any reviews.'
      })
    } 

    else {
      localStorage.setItem("CateringName", "Edwins Restaurant");
      this.router.navigate(['/reviews']);
    }
  }

  // Sets name of catering service into Local Storage
  async lospolReview() {
    
    if (window.localStorage.length == 0) {
      const Swal = require('sweetalert2')
      Swal.fire ({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'You have to sign to WeCater first before you can give any reviews. '
      })
    } 

    else {
      localStorage.setItem("CateringName", "Los Polluelos Lechon & Restaurant");
      this.router.navigate(['/reviews']);
    }
  }

  // Shows contact details of catering service
  lanorContact() {
    const Swal = require('sweetalert2')
    Swal.fire({
      imageUrl: '/assets/comments.png',
      html: "Contact Number: 0912-912-3679 <br> Facebook Messenger: La'Nors Kitchen",
      confirmButtonColor: '#30a0e0'
    })
  }

  // Shows contact details of catering service
  ricosContact() {
    const Swal = require('sweetalert2')
    Swal.fire({
      imageUrl: '/assets/comments.png',
      confirmButtonColor: '#30a0e0',
      html: "Contact Numbers: (047) 224-3747 / 0920-961-1757 / 0923-716-7980 <br> Facebook Messenger: Rico's Fastfood"
    })
  }

  // Shows contact details of catering service
  edwinsContact() {
    const Swal = require('sweetalert2')
    Swal.fire({
      imageUrl: '/assets/comments.png',
      confirmButtonColor: '#30a0e0',
      html: "Contact Number: 0929-397-1982 <br> Facebook Messenger: Edwin's Restaurant <br> Email Address: edwinsonestopshop@yahoo.com"
    })
  }

  // Shows contact details of catering service
  losPolluelosContact() {
    const Swal = require('sweetalert2')
    Swal.fire({
      imageUrl: '/assets/comments.png',
      confirmButtonColor: '#30a0e0',
      html: 'Contact Number: (047) 224-8154 <br> Facebook Messenger: Los Polluelos Lechon & Catering Services <br> Email: lospollueloslechon78@yahoo.com <br> Website: http://www.lospollueloslechon.com/'
    })
  }

}

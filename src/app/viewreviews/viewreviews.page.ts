import { Component, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-viewreviews',
  templateUrl: './viewreviews.page.html',
  styleUrls: ['./viewreviews.page.scss'],
})
export class ViewreviewsPage  {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  // Initialization of Variables
  reviews: any;
  filterResults: any;
  date: any;
  options: any;
  newDateTime: any;
  // End of initialization

  constructor(public ds: DataService) { 
    
  }

  ionViewWillEnter() {

    // Load all reviews on page enter
    this.getReviews();

    // Shows and Hides Cards based on if no user is signed in
    if (window.localStorage.length == 0) {
      document.getElementById('reviewscard').hidden = true;
      document.getElementById('reviewscard1').hidden = true;
      document.getElementById('noreviewscard').hidden = false;
      document.getElementById('filterReviewsContainer').hidden = true;
      document.getElementById('filterReviewsButtons').hidden = true;
      document.getElementById('noreviewsSubmittedCard').hidden = true;
    }

    //  Shows and Hides Cards based on if a user is signed in
     else {
     document.getElementById('reviewscard').hidden = false;
     document.getElementById('reviewscard1').hidden = false;
     document.getElementById('noreviewscard').hidden = true;
     document.getElementById('filterReviewsContainer').hidden = true;
     document.getElementById('filterReviewsButtons').hidden = false;
}
}

// API Request to retrieve all reviews data from database
getReviews() {
  this.ds.sendApiRequest("getReviews", null).subscribe(data => {
  this.reviews = data.data;
  console.log(this.reviews)
  if (this.reviews.length == 0) {
    document.getElementById('noreviewsSubmittedCard').hidden = false;
  }
  else {
    document.getElementById('noreviewsSubmittedCard').hidden = true;
  }
  });
}

// Views all reviews back to the user after filtering reviews
viewAll() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'All reviews have been loaded',
    confirmButtonColor: '#30a0e0'
  })
  this.getReviews();
  document.getElementById('reviewscard1').hidden = false;
  document.getElementById('filterReviewsContainer').hidden = true;
}

// Filter reviews based on catering service name: La' Nors Kitchen
lanorRadioClick() {
  document.getElementById('filterReviewsContainer').hidden = false;
  document.getElementById('reviewscard1').hidden = true;
  this.ds.sendApiRequest("getReviewsOnLanors", null).subscribe(data => {
  this.filterResults = data.data;
  console.log(this.filterResults);
  // Prompts the user if catering service has no reviews yet
  if (data.payload == null) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      confirmButtonColor: '#30a0e0',
      text: 'This catering service has no reviews yet.'
    })
  }
  });
}

// Filters reviews based on catering service name: Rico's Fastfood & Restaurant
ricosRadioClick() {
  document.getElementById('filterReviewsContainer').hidden = false;
  document.getElementById('reviewscard1').hidden = true;
  this.ds.sendApiRequest("getReviewsOnRicos", null).subscribe(data => {
  this.filterResults = data.data;
  console.log(this.filterResults);
  // Prompts the user if catering service has no reviews yet
  if (data.payload == null) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      confirmButtonColor: '#30a0e0',
      text: 'This catering service has no reviews yet.'
    })
  }
  });
}

// Filters reviews based on catering service name: Edwin's Restaurant
edwinsRadioClick() {
  document.getElementById('filterReviewsContainer').hidden = false;
  document.getElementById('reviewscard1').hidden = true;
  this.ds.sendApiRequest("getReviewsOnEdwins", null).subscribe(data => {
  this.filterResults = data.data;
  console.log(this.filterResults);
  // Prompts the user if catering service has no reviews yet
  if (data.payload == null) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      confirmButtonColor: '#30a0e0',
      text: 'This catering service has no reviews yet.'
    })
  }
  });
}

// Filters reviews based on catering service name: Los Polluelos Lechon & Fastfood
losPolluelosRadioClick() {
  document.getElementById('filterReviewsContainer').hidden = false;
  document.getElementById('reviewscard1').hidden = true;
  this.ds.sendApiRequest("getReviewsOnLosPolluelos", null).subscribe(data => {
  this.filterResults = data.data;
  console.log(this.filterResults);
  // Prompts the user if catering service has no reviews yet
  if (data.payload == null) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      confirmButtonColor: '#30a0e0',
      text: 'This catering service has no reviews yet.'
    })
  }
  });
}

}
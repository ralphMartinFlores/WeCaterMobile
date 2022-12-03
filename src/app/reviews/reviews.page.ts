import { Component, OnInit } from '@angular/core';
// Other imports
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
// End of other imports

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  // Initialization of Variables
  reviewForm: FormGroup;
  isSubmitted = false;
  reviewInfo: any = {};
  commentcontent: any;
  contname: any;
  servicename: any;
  // End of initialization

  constructor(private ds : DataService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    
    // Gets values from Local Storage
    this.contname = localStorage.getItem("Name")
    this.servicename = localStorage.getItem("CateringName")

    // Review Form Validation Parameters
    this.reviewForm = this.formBuilder.group({
      laman: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  // Form Validation Errors
  get errorControl() {
    return this.reviewForm.controls;
  }

  // Inserts review given by user into the database
  async submitReview() {

    // Checks if review form is valid or not 
    this.isSubmitted = true;
    if (!this.reviewForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        confirmButtonColor: '#30a0e0',
        text: 'Please provide the required input.'
      })
      return false;
    }

    else {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        confirmButtonColor: '#30a0e0',
        text: 'Your review has been submitted, thank you for providing feedback.'
      }) .then (async (result) => {
        if (result.value) {
          this.reviewInfo.contname = this.contname;
          this.reviewInfo.commentcontent = this.commentcontent;
          this.reviewInfo.servicename = this.servicename;
    
    // API Request that submits review to the database
    await this.ds.sendApiRequest("review", this.reviewInfo).subscribe(res => {
    console.log(res);
    });
    this.router.navigate(['/tabs/tab1']);
        }
      })
    }
}
    
}

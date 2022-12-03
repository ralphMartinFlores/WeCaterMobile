import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {

  static isValid(control: FormControl): any {

    if(isNaN(control.value)) {
      return {
        "Oops! That's not a number": true
      };
    }

    if(control.value % 1 !== 0) {
      return {
        "Oops! That's not a whole number either": true
      };
    }

    if (control.value < 18) {
      return {
        "You have to be 18 years or older": true
      };
    }

    if (control.value > 120) {
      return {
        "Well that's not very realistic": true
      };
    }

    return null;

  }

  constructor() { }

  ngOnInit() {
  }

}

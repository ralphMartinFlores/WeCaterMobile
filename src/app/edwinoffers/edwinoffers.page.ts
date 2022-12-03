import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edwinoffers',
  templateUrl: './edwinoffers.page.html',
  styleUrls: ['./edwinoffers.page.scss'],
})
export class EdwinoffersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Navigates to HTML element according to id
  thirtypaxClick() {
    window.location.hash = "30pax";
  }

  // Navigates to HTML element according to id
  fortypaxClick() {
    window.location.hash = "40pax";
  }

  // Navigates to HTML element according to id
  fiftypaxClick() {
    window.location.hash = "50pax";
  }

  // Navigates to HTML element according to id
  eightypaxClick() {
    window.location.hash = "80pax";
  }

  // Navigates to HTML element according to id
  hundredpaxClick() {
    window.location.hash = "100px";
  }

  // Navigates to HTML element according to id
  setsClick() {
    window.location.hash = "sets";
  }

}

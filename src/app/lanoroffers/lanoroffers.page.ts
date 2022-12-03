import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanoroffers',
  templateUrl: './lanoroffers.page.html',
  styleUrls: ['./lanoroffers.page.scss'],
})
export class LanoroffersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Navigates to HTML element according to id
  bilao1Click() {
    window.location.hash = "bilao1";
  }

  // Navigates to HTML element according to id
  bilao2Click() {
    window.location.hash = "bilao2";
  }

  // Navigates to HTML element according to id
  pertrayClick() {
    window.location.hash = "pertrayCard";
  }

  // Navigates to HTML element according to id
  packagesClick() {
    window.location.hash = "packages"
  }

  // Navigates to HTML element according to id
  setsClick() {
    window.location.hash = "sets"
  }

  // Navigates to HTML element according to id
  perpacksClick() {
    window.location.hash = "perpacks"
  }

}

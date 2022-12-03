import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ricosoffers',
  templateUrl: './ricosoffers.page.html',
  styleUrls: ['./ricosoffers.page.scss'],
})
export class RicosoffersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Navigates to HTML element according to id
  beefclick() {
    window.location.hash = "beef";
  }

  // Navigates to HTML element according to id
  porkClick() {
    window.location.hash = "pork";
  }

  // Navigates to HTML element according to id
  chickenClick() {
    window.location.hash = "chicken";
  }

  // Navigates to HTML element according to id
  seafoodClick() {
    window.location.hash = "seafood";
  }

  // Navigates to HTML element according to id
  vegetablesClick() {
    window.location.hash = "vegetables"
  }

  // Navigates to HTML element according to id
  pastaClick() {
    window.location.hash = "pasta";
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
  bilao3Click() {
    window.location.hash = "bilao3";
  }

  // Navigates to HTML element according to id
  bilao4Click() {
    window.location.hash = "bilao4";
  }

  // Navigates to HTML element according to id
  dessertsClick() {
    window.location.hash = "desserts";
  }

  // Navigates to HTML element according to id
  othersClick() {
    window.location.hash = "others";
  }

}

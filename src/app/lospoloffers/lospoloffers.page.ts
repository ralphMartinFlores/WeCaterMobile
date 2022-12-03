import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lospoloffers',
  templateUrl: './lospoloffers.page.html',
  styleUrls: ['./lospoloffers.page.scss'],
})
export class LospoloffersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Navigates to HTML element according to id
  porkClick() {
    window.location.hash = "pork"
  }

  // Navigates to HTML element according to id
  beefClick() {
    window.location.hash = "beef";
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
  bilao5Click() {
    window.location.hash = "bilao5";
  }

  // Navigates to HTML element according to id
  bilao6Click() {
    window.location.hash = "bilao6";
  }

  // Navigates to HTML element according to id
  picnicsClick() {
    window.location.hash = "picnics";
  }

  // Navigates to HTML element according to id
  partiesClick() {
    window.location.hash = "parties";
  }

  // Navigates to HTML element according to id
  grilledClick() {
    window.location.hash = "grilled";
  }

  // Navigates to HTML element according to id
  fiestasClick() {
    window.location.hash = "fiestas";
  }

}

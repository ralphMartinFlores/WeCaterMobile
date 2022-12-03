import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({ 
  selector: 'app-greetings',
  templateUrl: './greetings.page.html',
  styleUrls: ['./greetings.page.scss'],
})
export class GreetingsPage implements OnInit {

  @ViewChild('greetSlides', {static: true}) slides: IonSlides;

  autoNext() {
    this.slides.slideNext();
  }

  constructor() { }

  ngOnInit() {
    
  }

}

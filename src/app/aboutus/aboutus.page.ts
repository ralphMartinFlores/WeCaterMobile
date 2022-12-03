import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navPrivacyPolicy() {
    this.router.navigate(['/privacypolicy']);
  }

  navEULA() {
    this.router.navigate(['/eula']);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {

  constructor() {}
  
  // Hides tab labels on first loading of page
  ionViewWillEnter() {
    document.getElementById('homeText').hidden = true;
    document.getElementById('profileText').hidden = true;
    document.getElementById('reviewsText').hidden = true;
    document.getElementById('settingsText').hidden = true;
    document.getElementById('homeOnly').style.color = "whitesmoke";
  }
  
  // Shows Profile Tab Label only
  clickProfileTab() { 
    document.getElementById('homeText').hidden = true;
    document.getElementById('profileText').hidden = false;
    document.getElementById('reviewsText').hidden = true;
    document.getElementById('settingsText').hidden = true;
  }

  // Shows Home Tab Label only 
  clickHomeTab() {
    document.getElementById('homeText').hidden = false;
    document.getElementById('profileText').hidden = true;
    document.getElementById('reviewsText').hidden = true;
    document.getElementById('settingsText').hidden = true;
  }

  // Shows Reviews Tab Label only
  clickReviewsTab() {
    document.getElementById('homeText').hidden = true;
    document.getElementById('profileText').hidden = true;
    document.getElementById('reviewsText').hidden = false;
    document.getElementById('settingsText').hidden = true;
  }

  // Shows Settings Tab Label only 
  clickSettingsTab() {
    document.getElementById('homeText').hidden = true;
    document.getElementById('profileText').hidden = true;
    document.getElementById('reviewsText').hidden = true;
    document.getElementById('settingsText').hidden = false;
  }
  
}
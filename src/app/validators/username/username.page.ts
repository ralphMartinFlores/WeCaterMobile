import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  static checkUsername(control: FormControl): any {

    return new Promise(resolve => {
      setTimeout(() => {
        if(control.value.toLowerCase() == "greg") {
          resolve ({
            "Username is already taken": true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });

  }

  constructor() { }

  ngOnInit() {
  }

}

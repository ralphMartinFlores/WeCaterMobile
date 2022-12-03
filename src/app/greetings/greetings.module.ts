import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreetingsPageRoutingModule } from './greetings-routing.module';

import { GreetingsPage } from './greetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreetingsPageRoutingModule
  ],
  declarations: [GreetingsPage]
})
export class GreetingsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearestcateringPageRoutingModule } from './nearestcatering-routing.module';

import { NearestcateringPage } from './nearestcatering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearestcateringPageRoutingModule
  ],
  declarations: [NearestcateringPage]
})
export class NearestcateringPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LospoloffersPageRoutingModule } from './lospoloffers-routing.module';

import { LospoloffersPage } from './lospoloffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LospoloffersPageRoutingModule
  ],
  declarations: [LospoloffersPage]
})
export class LospoloffersPageModule {}

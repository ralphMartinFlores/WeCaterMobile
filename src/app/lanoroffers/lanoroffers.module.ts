import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanoroffersPageRoutingModule } from './lanoroffers-routing.module';

import { LanoroffersPage } from './lanoroffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanoroffersPageRoutingModule
  ],
  declarations: [LanoroffersPage]
})
export class LanoroffersPageModule {}

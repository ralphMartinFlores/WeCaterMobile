import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdwinoffersPageRoutingModule } from './edwinoffers-routing.module';

import { EdwinoffersPage } from './edwinoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdwinoffersPageRoutingModule
  ],
  declarations: [EdwinoffersPage]
})
export class EdwinoffersPageModule {}

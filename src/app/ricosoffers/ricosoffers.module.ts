import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicosoffersPageRoutingModule } from './ricosoffers-routing.module';

import { RicosoffersPage } from './ricosoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicosoffersPageRoutingModule
  ],
  declarations: [RicosoffersPage]
})
export class RicosoffersPageModule {}

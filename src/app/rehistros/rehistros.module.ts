import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RehistrosPageRoutingModule } from './rehistros-routing.module';

import { RehistrosPage } from './rehistros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RehistrosPageRoutingModule
  ],
  declarations: [RehistrosPage]
})
export class RehistrosPageModule {}

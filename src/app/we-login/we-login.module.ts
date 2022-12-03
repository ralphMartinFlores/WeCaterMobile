import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeLoginPageRoutingModule } from './we-login-routing.module';

import { WeLoginPage } from './we-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WeLoginPageRoutingModule
  ],
  declarations: [WeLoginPage]
})
export class WeLoginPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeLoginPage } from './we-login.page';

const routes: Routes = [
  {
    path: '',
    component: WeLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeLoginPageRoutingModule {}

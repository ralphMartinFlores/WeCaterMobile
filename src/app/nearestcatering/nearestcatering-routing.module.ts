import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearestcateringPage } from './nearestcatering.page';

const routes: Routes = [
  {
    path: '',
    component: NearestcateringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearestcateringPageRoutingModule {}

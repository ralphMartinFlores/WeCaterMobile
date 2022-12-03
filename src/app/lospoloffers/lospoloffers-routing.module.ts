import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LospoloffersPage } from './lospoloffers.page';

const routes: Routes = [
  {
    path: '',
    component: LospoloffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LospoloffersPageRoutingModule {}

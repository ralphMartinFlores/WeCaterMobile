import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanoroffersPage } from './lanoroffers.page';

const routes: Routes = [
  {
    path: '',
    component: LanoroffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanoroffersPageRoutingModule {}

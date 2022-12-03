import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdwinoffersPage } from './edwinoffers.page';

const routes: Routes = [
  {
    path: '',
    component: EdwinoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdwinoffersPageRoutingModule {}

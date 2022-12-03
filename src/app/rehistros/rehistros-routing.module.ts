import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RehistrosPage } from './rehistros.page';

const routes: Routes = [
  {
    path: '',
    component: RehistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RehistrosPageRoutingModule {}

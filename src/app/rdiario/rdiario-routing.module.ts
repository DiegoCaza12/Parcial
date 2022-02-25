import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdiarioPage } from './rdiario.page';

const routes: Routes = [
  {
    path: '',
    component: RdiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdiarioPageRoutingModule {}

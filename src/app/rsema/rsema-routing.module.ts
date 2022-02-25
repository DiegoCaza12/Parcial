import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsemaPage } from './rsema.page';

const routes: Routes = [
  {
    path: '',
    component: RsemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RsemaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmensualPage } from './rmensual.page';

const routes: Routes = [
  {
    path: '',
    component: RmensualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmensualPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdeportePage } from './rdeporte.page';

const routes: Routes = [
  {
    path: '',
    component: RdeportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdeportePageRoutingModule {}

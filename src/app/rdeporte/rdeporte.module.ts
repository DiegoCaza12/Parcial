import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdeportePageRoutingModule } from './rdeporte-routing.module';

import { RdeportePage } from './rdeporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdeportePageRoutingModule
  ],
  declarations: [RdeportePage]
})
export class RdeportePageModule {}

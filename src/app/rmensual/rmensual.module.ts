import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmensualPageRoutingModule } from './rmensual-routing.module';

import { RmensualPage } from './rmensual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmensualPageRoutingModule
  ],
  declarations: [RmensualPage]
})
export class RmensualPageModule {}

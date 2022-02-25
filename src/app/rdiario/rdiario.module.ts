import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdiarioPageRoutingModule } from './rdiario-routing.module';

import { RdiarioPage } from './rdiario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdiarioPageRoutingModule
  ],
  declarations: [RdiarioPage]
})
export class RdiarioPageModule {}

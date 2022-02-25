import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RsemaPageRoutingModule } from './rsema-routing.module';

import { RsemaPage } from './rsema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RsemaPageRoutingModule
  ],
  declarations: [RsemaPage]
})
export class RsemaPageModule {}

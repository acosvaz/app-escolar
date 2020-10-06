import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SilabasPageRoutingModule } from './silabas-routing.module';

import { SilabasPage } from './silabas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SilabasPageRoutingModule
  ],
  declarations: [SilabasPage]
})
export class SilabasPageModule {}

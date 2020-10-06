import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VocalesPageRoutingModule } from './vocales-routing.module';

import { VocalesPage } from './vocales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VocalesPageRoutingModule
  ],
  declarations: [VocalesPage]
})
export class VocalesPageModule {}

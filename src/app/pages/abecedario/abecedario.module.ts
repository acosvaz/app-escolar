import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbecedarioPageRoutingModule } from './abecedario-routing.module';

import { AbecedarioPage } from './abecedario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbecedarioPageRoutingModule
  ],
  declarations: [AbecedarioPage]
})
export class AbecedarioPageModule {}

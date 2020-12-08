import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioAgregarPageRoutingModule } from './ejercicio-agregar-routing.module';

import { EjercicioAgregarPage } from './ejercicio-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioAgregarPageRoutingModule
  ],
  declarations: [EjercicioAgregarPage]
})
export class EjercicioAgregarPageModule {}

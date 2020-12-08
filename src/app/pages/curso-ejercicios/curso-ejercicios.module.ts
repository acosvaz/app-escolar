import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoEjerciciosPageRoutingModule } from './curso-ejercicios-routing.module';

import { CursoEjerciciosPage } from './curso-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoEjerciciosPageRoutingModule
  ],
  declarations: [CursoEjerciciosPage]
})
export class CursoEjerciciosPageModule {}

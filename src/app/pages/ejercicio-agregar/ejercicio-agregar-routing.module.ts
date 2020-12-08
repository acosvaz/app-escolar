import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioAgregarPage } from './ejercicio-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioAgregarPageRoutingModule {}

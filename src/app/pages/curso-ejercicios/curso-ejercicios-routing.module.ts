import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoEjerciciosPage } from './curso-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: CursoEjerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoEjerciciosPageRoutingModule {}

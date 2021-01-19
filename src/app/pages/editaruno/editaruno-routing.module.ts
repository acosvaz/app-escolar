import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarunoPage } from './editaruno.page';

const routes: Routes = [
  {
    path: '',
    component: EditarunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarunoPageRoutingModule {}

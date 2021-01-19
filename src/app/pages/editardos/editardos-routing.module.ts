import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditardosPage } from './editardos.page';

const routes: Routes = [
  {
    path: '',
    component: EditardosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditardosPageRoutingModule {}

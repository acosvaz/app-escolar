import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbecedarioPage } from './abecedario.page';

const routes: Routes = [
  {
    path: '',
    component: AbecedarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbecedarioPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocalesPage } from './vocales.page';

const routes: Routes = [
  {
    path: '',
    component: VocalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocalesPageRoutingModule {}

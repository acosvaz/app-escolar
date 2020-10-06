import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SilabasPage } from './silabas.page';

const routes: Routes = [
  {
    path: '',
    component: SilabasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SilabasPageRoutingModule {}

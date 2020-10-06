import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  //{
  //  path: 'inicio',
  //  loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  //},
  //{
  //  path: 'vocales',
  //  loadChildren: () => import('./pages/vocales/vocales.module').then( m => m.VocalesPageModule)
  //},
  //{
  //  path: 'abecedario',
  //  loadChildren: () => import('./pages/abecedario/abecedario.module').then( m => m.AbecedarioPageModule)
  //},
  {
    path: 'silabas',
    loadChildren: () => import('./pages/silabas/silabas.module').then( m => m.SilabasPageModule)
  },
  {
    path: 'oraciones',
    loadChildren: () => import('./pages/oraciones/oraciones.module').then( m => m.OracionesPageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./pages/popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

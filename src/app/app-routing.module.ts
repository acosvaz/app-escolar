import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  //{
  //  path: 'inicio',
  //  loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  //},
  {
    path: 'vocales',
    loadChildren: () => import('./pages/vocales/vocales.module').then( m => m.VocalesPageModule)
  },
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
    path: 'modal/:id/:ejercicio',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
 // {
 //   path: 'login',
 //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
 // },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'curso-ejercicios/:id',
    loadChildren: () => import('./pages/curso-ejercicios/curso-ejercicios.module').then( m => m.CursoEjerciciosPageModule)
  },
  {
    path: 'ejercicio-agregar/:id/:ejercicio',
    loadChildren: () => import('./pages/ejercicio-agregar/ejercicio-agregar.module').then( m => m.EjercicioAgregarPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'editaruno/:id/:idejercicio',
    loadChildren: () => import('./pages/editaruno/editaruno.module').then( m => m.EditarunoPageModule)
  },
  {
    path: 'editardos/:id/:idejercicio',
    loadChildren: () => import('./pages/editardos/editardos.module').then( m => m.EditardosPageModule)
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

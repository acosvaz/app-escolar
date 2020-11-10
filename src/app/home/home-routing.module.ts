import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'abecedario',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/abecedario/abecedario.module').then( m => m.AbecedarioPageModule)
          }
        ]
      },
      {
        path: 'vocales',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/vocales/vocales.module').then( m => m.VocalesPageModule)
          }
        ]
      },
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/inicio/inicio.module').then( m => m.InicioPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
      path: '',
      redirectTo: '/tabs/login',
      pathMatch: 'full'

   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

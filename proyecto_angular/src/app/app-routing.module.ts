import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionAbiertaGuard } from './guardianes/sesion-abierta.guard';
import { SesionCerradaGuard } from './guardianes/sesion-cerrada.guard';
import { TableroComponent } from './tablero/tablero.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [SesionAbiertaGuard],
    component: TableroComponent,
    loadChildren: () => import('./paginas/admin/admin.module').then(m => m.AdminModule),
    pathMatch: 'full'
  },
  {
    path: 'auth',
    canActivate: [SesionCerradaGuard],
    loadChildren: () => import('./paginas/oauth/oauth.module').then(m => m.OauthModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

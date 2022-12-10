import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarSesionGuard } from './guardianes/verificar-sesion.guard';
import { TableroComponent } from './tablero/tablero.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [VerificarSesionGuard],
    component: TableroComponent,
    loadChildren: () => import('./paginas/admin/admin.module').then(m => m.AdminModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

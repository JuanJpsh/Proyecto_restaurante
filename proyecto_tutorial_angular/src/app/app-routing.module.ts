import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './tablero/tablero.component';

const routes: Routes = [
  {
    path: '',
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

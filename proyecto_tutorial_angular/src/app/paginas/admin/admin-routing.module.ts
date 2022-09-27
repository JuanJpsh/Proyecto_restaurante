import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiMenuComponent } from './mi-menu/mi-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MiMenuComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

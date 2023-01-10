import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPlateResolver } from 'src/app/resolvers/food-plate.resolver';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    resolve: { foodPlates: FoodPlateResolver },
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'menu',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule {}

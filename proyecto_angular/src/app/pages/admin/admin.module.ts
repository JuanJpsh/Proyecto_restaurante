import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CardFoodPlateComponent } from './menu/clard-food-plate/card-food-plate.component';

@NgModule({
  declarations: [
    MenuComponent,
    CardFoodPlateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CardFoodPlateComponent } from './menu/clard-food-plate/card-food-plate.component';
import { BottomSheetComponent } from './menu/bottom-sheet/bottom-sheet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    CardFoodPlateComponent,
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SectionsModule { }

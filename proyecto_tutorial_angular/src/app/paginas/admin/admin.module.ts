import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MiMenuComponent } from './mi-menu/mi-menu.component';
import { MaterialModule } from '../../compartido/material/material.module';
import { CardPlatoComponent } from './mi-menu/card-plato/card-plato.component';


@NgModule({
  declarations: [
    MiMenuComponent,
    CardPlatoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }

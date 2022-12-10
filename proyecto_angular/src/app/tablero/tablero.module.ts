import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../compartido/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    TableroComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class TableroModule { }

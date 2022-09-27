import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../compartido/material/material.module';



@NgModule({
  declarations: [
    TableroComponent,
    FooterComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class TableroModule { }

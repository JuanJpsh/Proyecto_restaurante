import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent, TopbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class DashboardModule { }

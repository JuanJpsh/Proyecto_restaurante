import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthRoutingModule } from './oauth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/compartido/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    OauthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OauthModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableroModule } from './tablero/tablero.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './compartido/interceptors/spinner.interceptor';
import { CompartidoModule } from './compartido/compartido/compartido.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableroModule,
    CompartidoModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

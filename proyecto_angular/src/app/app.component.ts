import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-spinner></app-spinner>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'proyecto_tutorial_angular';
}

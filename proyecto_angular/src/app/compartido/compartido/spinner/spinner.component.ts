import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf="estaCargando$ | async">
      <mat-progress-spinner color="primary" mode="indeterminate"></mat-progress-spinner>
    </div>`,
})
export class SpinnerComponent {

  estaCargando$ = this.spinnerSvc.estaCargando$;

  constructor(private spinnerSvc: SpinnerService) { }
}

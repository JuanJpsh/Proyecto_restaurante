import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf="loading$ | async">
      <mat-progress-spinner color="primary" mode="indeterminate"></mat-progress-spinner>
    </div>`,
})
export class SpinnerComponent {

  loading$ = this.spinnerSvc.loading$;

  constructor(private spinnerSvc: SpinnerService) { }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import Permiso from 'src/modelos/permiso';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent{

  @Input() opciones: Permiso[] = []
  @Output() clickMenu = new EventEmitter<void>();

  constructor(private authSvc: AuthService, private router: Router) { }

  enCerrarSesion() {
    this.authSvc.cerrarSesion();
    this.router.navigate(['/auth'])
  }
}

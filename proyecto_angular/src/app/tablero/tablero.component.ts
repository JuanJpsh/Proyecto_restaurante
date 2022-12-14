import { Component, OnInit } from '@angular/core';
import Permiso from 'src/modelos/permiso';
import { UsuarioService } from '../servicios/usuario.service';
import { PERMISOS } from './tablero.permisos';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  permisosTopbar: Permiso[] = [];
  permisosSidebar: Permiso[] = [];

  constructor(private usuarioSvc: UsuarioService) { }

  ngOnInit(): void {

    this.permisosTopbar = PERMISOS.slice(0, 2);
    this.permisosSidebar = PERMISOS.slice(2);

    this.usuarioSvc.getPermisos().subscribe({
      next: (resp) => {
        let permisos: String[] = resp;
        this.permisosTopbar = this.permisosTopbar.filter(pt => permisos.some((ps) => ps == pt.permiso));
        this.permisosSidebar = this.permisosSidebar.filter(pt => permisos.some((ps) => ps == pt.permiso));
      },
      error: (er) => {
        console.log('Hubo un error, Tendria que cerrar sesion y navegar a login')
        console.error(er)
      }
    })
  }

}

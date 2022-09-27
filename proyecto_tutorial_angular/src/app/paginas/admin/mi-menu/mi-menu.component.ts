import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioPlatoService } from 'src/app/servicios/servicio-plato.service';
import { Plato } from 'src/modelos/plato';

@Component({
  selector: 'app-mi-menu',
  templateUrl: './mi-menu.component.html',
  styleUrls: ['./mi-menu.component.scss']
})
export class MiMenuComponent implements OnInit {

  listaPlatos: Plato[] = []

  constructor(private platoSvc: ServicioPlatoService, private barraNotificacionSvc: MatSnackBar) { }

  ngOnInit(): void {
    this.platoSvc.getPlatos().then(resp => {
      if (resp) this.listaPlatos = resp
    })
  }

  enAgregarPlato() {
    let plato: Plato = {
      id: "0",
      nombre: "Plato nuevo",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    }
    this.platoSvc.addPlato(plato).then(resp => {
      if (resp && resp.id !== "0") {
        this.listaPlatos = [plato, ...this.listaPlatos]
        this.notificarOperacion("Plato agregado")
      }else{
        this.notificarOperacion("Error en sistema. Intetelo mas tarde")
      }
    })
  }

  enEliminarPlato(platoId: String) {
    let posPlato = this.listaPlatos.findIndex(plato => plato.id === platoId)
    let platoEliminado = this.listaPlatos[posPlato]

    function rehacerPlato(listaPlatos: Plato[]) {
      let auxListaPlatos = listaPlatos.splice(posPlato)
      return [...listaPlatos, platoEliminado, ...auxListaPlatos]
    }

    this.listaPlatos = this.listaPlatos.filter(plato => plato !== platoEliminado)
    this.notificarOperacion("¿Esta seguro de eliminar el plato?", "Deshacer")
    this.barraNotificacionSvc._openedSnackBarRef?.onAction().subscribe(() => {
      this.listaPlatos = posPlato === 0 ?
        [platoEliminado, ...this.listaPlatos] :
        rehacerPlato(this.listaPlatos)
    })

    this.barraNotificacionSvc._openedSnackBarRef?.afterDismissed().subscribe(notificacionOlvidada => {
      if (!notificacionOlvidada.dismissedByAction) {
        this.platoSvc.deletePlato(platoEliminado).then(resp => {
          if (!resp){
            rehacerPlato(this.listaPlatos)
            this.notificarOperacion("Error en sistema. Intetelo mas tarde")
          } 
        })
      }
    })
  }

  private notificarOperacion(mensaje: string, accion?: string) {
    let a = this.barraNotificacionSvc.open(mensaje, accion, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}

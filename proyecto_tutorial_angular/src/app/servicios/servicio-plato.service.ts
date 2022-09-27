import { Injectable } from '@angular/core';
import { Plato } from 'src/modelos/plato';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlatoService {

  listaPlatos: Plato[] = [
    {
      id: "1",
      nombre: "Plato 1",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "2",
      nombre: "Plato 2",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "3",
      nombre: "Plato 3",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "4",
      nombre: "Plato 4",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "5",
      nombre: "Plato 5",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "6",
      nombre: "Plato 6",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
  ]

  constructor() { }

  async getPlatos(): Promise<Plato[]>{
    return this.listaPlatos
  }

  async addPlato(plato: Plato): Promise<Plato>{
    plato.id = (this.listaPlatos.length + 1).toString()
    this.listaPlatos = [plato, ...this.listaPlatos]
    return plato
  }

  async deletePlato(platoEliminado: Plato): Promise<boolean>{
    try {
      this.listaPlatos = this.listaPlatos.filter(plato => plato !== platoEliminado)
      return true
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

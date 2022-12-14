import { HttpClient } from '@angular/common/http';
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
    {
      id: "7",
      nombre: "Plato 7",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "8",
      nombre: "Plato 8",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "9",
      nombre: "Plato 9",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    },
    {
      id: "10",
      nombre: "Plato 10",
      descipcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?",
      imagen: "Imagen",
      precio: 10000
    }
  ]

  private url = 'https://pokeapi.co/api/v2/pokemon/ditto'

  constructor(private httpClient : HttpClient) { }

  async getPlatos(): Promise<Plato[]>{
    this.httpClient.get(this.url).subscribe(data => {
      console.log('Prueba http en servicios/servicio-plato.service.ts')
      console.log(data)
    })
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

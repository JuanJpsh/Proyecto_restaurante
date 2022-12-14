import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Credenciales from '../modelos/credenciales';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private url = 'http://localhost:3100/api/v1/user/'

    constructor(private httpClient: HttpClient) { }

    getPermisos(): Observable<any>{
        let token = localStorage.getItem("Proyecto_Rest_Token");
        if(!token) throw new Error("Error al recuperar el token de acceso");
        return this.httpClient.get(this.url + 'permisos', {
            headers: {
                "x-token-acceso": token
            }
        })
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Credenciales from '../modelos/credenciales';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url = 'http://localhost:3100/api/v1/auth/'

    constructor(private httpClient: HttpClient) { }

    iniciarSesion(credenciales: Credenciales): Observable<any> {
        return this.httpClient.post(this.url + 'signin', credenciales)
    }

    cerrarSesion(): void{
        localStorage.removeItem(`Proyecto_Rest_Nombre`);
        localStorage.removeItem(`Proyecto_Rest_Token`);
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url_auth } from '../helpers/urlsReq';

import Credentials from '../models/credentials';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    signin(credentials: Credentials): Observable<any> {
        return this.httpClient.post(url_auth + '/signin', credentials)
    }

    signout(): void {
        localStorage.removeItem(`Manager_Restaurant_Name`);
        localStorage.removeItem(`Manager_Restaurant_Token`);
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url_user } from '../helpers/urlsReq'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getPermissions(): Observable<any> {
        return this.httpClient.get(url_user + '/permissions')
    }
}
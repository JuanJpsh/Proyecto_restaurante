import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { url_auth } from '../urlsReq';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(url_auth)) return next.handle(req.clone());
    let token = localStorage.getItem('Manager_Restaurant_Token');
    if (!token) {
      this.authSvc.signout();
      this.router.navigate(['/auth']);
      throw new Error('Error getting token');
    }
    let headers = new HttpHeaders({
      'x-access-token': token,
    });
    let clonReq = req.clone({
      headers,
    });

    return next.handle(clonReq);
  }
}

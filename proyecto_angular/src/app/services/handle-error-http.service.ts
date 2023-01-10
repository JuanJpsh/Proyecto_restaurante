import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorHttpService {
  constructor(private router: Router) {}

  HandleErrorHttp(errorStatus: Number, urlState: string, errorMessage: string) {
    if (errorStatus == 401) {
      const lastSection = localStorage.getItem(
        'Manager_Restaurant_Last_Section'
      );
      if (lastSection && `/${lastSection}` != urlState) {
        this.router.navigate([`/${lastSection}`]);
      } else {
        location.reload();
      }
    } else {
      console.log('Redirigir a la pagina de mantenimiento');
    }
    return new Error(errorMessage);
  }
}

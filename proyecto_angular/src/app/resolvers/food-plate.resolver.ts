import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { FoodPlateService } from '../services/food-plate.service';
import { HandleErrorHttpService } from '../services/handle-error-http.service';

@Injectable({
  providedIn: 'root',
})
export class FoodPlateResolver implements Resolve<any> {
  constructor(
    private foodPlateSvc: FoodPlateService,
    private handleHttpErrorSvc: HandleErrorHttpService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.foodPlateSvc.getFoodPlate().pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        throw this.handleHttpErrorSvc.HandleErrorHttp(
          err.status,
          state.url,
          err.error.error
        );
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodPlate } from '../models/food-plate';

import { url_food } from '../helpers/urlsReq';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodPlateService {
  courseFoodList: FoodPlate[] = [
    {
      id: '1',
      name: 'Plato 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '2',
      name: 'Plato 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '3',
      name: 'Plato 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '4',
      name: 'Plato 4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    }
  ];

  constructor(private httpClient: HttpClient) {}

  getFoodPlate(): Observable<any> {
    return this.httpClient.get(url_food);
  }

  addFoodPlate(foodPlate: FoodPlate): Observable<any>{
    return this.httpClient.post(url_food, foodPlate).pipe(
      map((resp) => {
        console.log(resp)
        return resp
      })
    );
  }

  async deleteFoodPlate(deletedfoodPlate: FoodPlate): Promise<boolean> {
    try {
      this.courseFoodList = this.courseFoodList.filter(
        (cf) => cf !== deletedfoodPlate
      );
      return true;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}

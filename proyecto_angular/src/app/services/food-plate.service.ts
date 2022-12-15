import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodPlate } from '../models/food-plate';

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
    },
    {
      id: '5',
      name: 'Plato 5',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '6',
      name: 'Plato 6',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '7',
      name: 'Plato 7',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '8',
      name: 'Plato 8',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '9',
      name: 'Plato 9',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
    {
      id: '10',
      name: 'Plato 10',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    },
  ];

  constructor(private httpClient: HttpClient) {}

  async getFoodPlate(): Promise<FoodPlate[]> {
    return this.courseFoodList;
  }

  async addFoodPlate(foodPlate: FoodPlate): Promise<FoodPlate> {
    foodPlate.id = (this.courseFoodList.length + 1).toString();
    this.courseFoodList = [foodPlate, ...this.courseFoodList];
    return foodPlate;
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

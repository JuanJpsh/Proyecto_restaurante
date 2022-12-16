import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FoodPlate } from 'src/app/models/food-plate';
import { FoodPlateService } from 'src/app/services/food-plate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  foodPlateList: FoodPlate[] = [];

  constructor(
    private foodPlateSvc: FoodPlateService,
    private matSnackSvc: MatSnackBar,
    private CDR: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.foodPlateSvc.getFoodPlate().subscribe((resp) => {
      if (resp) this.foodPlateList = resp;
      this.CDR.markForCheck();
    });
  }

  onAddFoodPlate() {
    let foodPlate: FoodPlate = {
      id: '0',
      name: 'Plato nuevo',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi, ea sequi tempore libero id accusamus nulla perferendis earum in?',
      image: 'Imagen',
      price: 10000,
    };
    this.foodPlateSvc.addFoodPlate(foodPlate).then((resp) => {
      if (resp && resp.id !== '0') {
        this.foodPlateList = [foodPlate, ...this.foodPlateList];
        this.CDR.markForCheck();
        this.notifyOperation('Plato agregado');
      } else {
        this.notifyOperation('Error en sistema. Intetelo mas tarde');
      }
    });
  }

  onDeleteFoodPlate(foodPlateId: String) {
    let posFoodPlate = this.foodPlateList.findIndex(
      (fp) => fp.id === foodPlateId
    );
    let deletedFoodPlate = this.foodPlateList[posFoodPlate];

    function rehacerPlato(foodPlateList: FoodPlate[]) {
      let auxListaPlatos = foodPlateList.splice(posFoodPlate);
      return [...foodPlateList, deletedFoodPlate, ...auxListaPlatos];
    }

    this.foodPlateList = this.foodPlateList.filter(
      (plato) => plato !== deletedFoodPlate
    );
    this.CDR.markForCheck();
    this.notifyOperation('¿Esta seguro de eliminar el plato?', 'Deshacer');
    this.matSnackSvc._openedSnackBarRef?.onAction().subscribe(() => {
      this.foodPlateList =
        posFoodPlate === 0
          ? [deletedFoodPlate, ...this.foodPlateList]
          : rehacerPlato(this.foodPlateList);
      this.CDR.markForCheck();
    });

    this.matSnackSvc._openedSnackBarRef
      ?.afterDismissed()
      .subscribe((notificacionOlvidada) => {
        if (!notificacionOlvidada.dismissedByAction) {
          this.foodPlateSvc.deleteFoodPlate(deletedFoodPlate).then((resp) => {
            if (!resp) {
              rehacerPlato(this.foodPlateList);
              this.CDR.markForCheck();
              this.notifyOperation('Error en sistema. Intetelo mas tarde');
            }
          });
        }
      });
  }

  private notifyOperation(message: string, action?: string) {
    this.matSnackSvc.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}

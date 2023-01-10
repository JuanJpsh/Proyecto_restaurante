import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FoodPlate } from 'src/app/models/food-plate';

@Component({
  selector: 'app-card-food-plate',
  templateUrl: './card-food-plate.component.html',
  styleUrls: ['./card-food-plate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFoodPlateComponent {
  @Input() foodPlate!: FoodPlate;
  @Output() clickDelete = new EventEmitter<String>();
}

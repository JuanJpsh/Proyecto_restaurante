import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodPlateService } from 'src/app/services/food-plate.service';
import { FileValidator } from '../../../../helpers/validators/file.validators';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  loading!: boolean;
  duplicateFood!: boolean;
  foodPlateFormGroup!: FormGroup;

  constructor(private foodPlateSvc: FoodPlateService) {}

  ngOnInit(): void {
    this.loading = false;
    this.duplicateFood = false;
    this.foodPlateFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl('', [
        FileValidator.allowedType(['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']),
      ]),
    });
  }

  getError(controlName: string) {
    let controlGroup = this.foodPlateFormGroup.get(controlName);
    if (controlGroup?.hasError('required')) return 'Este campo es obligatorio';
    return controlGroup?.hasError('allowedtype')
      ? 'Solo se permiten archivos de tipo png, jpg o jpeg'
      : '';
  }

  onSaveFoodPlate() {
    if (this.foodPlateFormGroup.invalid) return;
    this.loading = true;
    this.foodPlateFormGroup.get('image')?.disable();
    this.foodPlateSvc
      .addFoodPlate({
        description: this.foodPlateFormGroup.get('description')?.value,
        name: this.foodPlateFormGroup.get('name')?.value,
        price: this.foodPlateFormGroup.get('price')?.value,
        image:
          'http://indianywok.weebly.com/uploads/5/0/6/7/50670067/s589705927513296688_p10_i1_w450.jpeg',
      })
      .subscribe({
        next: (resp) => {
          console.log('Plato agregado');
        },
        error: (err) => {
          if(err.status === 405) this.duplicateFood = true;
          console.log('Tiene que aparecer el snackbar de error del servidor')
          this.loading = false;
          this.foodPlateFormGroup.get('image')?.enable();
        },
      });
  }

  csvInputChange(fileInputEvent: any) {
    let image = fileInputEvent.target.files[0];
    console.log(image);
  }
}

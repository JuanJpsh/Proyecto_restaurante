import { AbstractControl } from '@angular/forms';

export class FileValidator {
    /**
     * @description 
     * Validator that validate that the control file type belong at type array.
     * @param types array containing file types allowed in the input.
     * @returns A validator function that returns an error map with the `allowedtype` property 
     * if the validation check fails, otherwise `null`.
     */
  static allowedType(allowedTypes: String[]) {
    return (control: AbstractControl) => {
      const value = control.value;
      if (value && value !== ''){
        const arr = value.split('.')
        if(allowedTypes.includes(arr[arr.length - 1])){
          return null;
        }
        return { allowedtype: true }
      }
      return null;
    };
  }
}

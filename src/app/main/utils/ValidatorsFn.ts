import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

export { CustomizeValidatorClass };

class CustomizeValidatorClass {
  static hasExisted(confirmString: string): ValidatorFn {
    return (self: AbstractControl): { [key: string]: any } => {
      const value = self.value;
      return (value === confirmString ? {} : { match: '' });
    };
  }
  // 验证是否存在，同步的
  // hasExisted = (confirmString: string): ValidatorFn => {
  //   return (self: AbstractControl): { [key: string]: any } => {
  //     const value = self.value;
  //     console.log(value === confirmString);
  //     console.log(value === confirmString ? { match: true } : { match: false });
  //     return (value === confirmString ? {} : { match: '' });
  //   };
  // }

  hasExistedAsync = (confirmString: string): AsyncValidatorFn => {
    return (self: AbstractControl): Observable<any> => {
      const value = self.value;
      console.log(value === confirmString);
      console.log(value === confirmString ? { match: true } : { match: false });
      const promise = new Promise((resolve, reject) => {
        resolve(1);
      });
      return of(1);
    };
  }
}


import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'divaDecimal'
})
export class DivaDecimalPipe implements PipeTransform {

  transform(num: number): string {
    return String(num / 100);
  }

}

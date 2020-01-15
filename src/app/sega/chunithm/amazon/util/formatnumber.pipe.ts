import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatnumberPipe implements PipeTransform {

  public transform(value: number, length?: number): string {
    let str = value.toString();
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

}

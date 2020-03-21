import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toAttributeClass'
})
export class ToAttributeClassPipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value === 'string') {
      switch (value) {
        case 'Fire':
          return 'lv12';
        case 'Aqua':
          return 'lv8';
        case 'Leaf':
          return 'lv6';
        case 'Max':
          return '';
      }
    }
    if (typeof value === 'number') {
      switch (value) {
        // Start from 1
        case 1:
          return 'lv12';
        case 2:
          return 'lv8';
        case 3:
          return 'lv6';
        case 4:
          return '';
      }
    }
    return '';
  }

}

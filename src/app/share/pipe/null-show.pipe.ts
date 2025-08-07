import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullShow',
  standalone: false
})
export class NullShowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

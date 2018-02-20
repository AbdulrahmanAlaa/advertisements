import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'splitPipe'})
export class SplitPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    return value.split(';')[0];
  }
}

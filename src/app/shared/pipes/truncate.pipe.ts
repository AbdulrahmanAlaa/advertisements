import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, ...args:Array<string>): any {
    /** holds the passed first parameter as limitation for string length */
    let limit:number = args.length > 0 ? parseInt(args[0], 10) : 10;
    /** holds the separator that will be placed in case we exceeded the limit */
    let trail:string = args.length > 1 ? args[1] : '...';
        /** if we exceeded the limit we shall truncate  */
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
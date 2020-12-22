import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'liste'
})
export class ListePipe implements PipeTransform {

  transform(value:any[], length: number, offset: number = 0): any[] {
    const resultArray = [];

    if (!length) {
    return  resultArray;
    }

    for (var n = 0; n <2; ++n) {
      resultArray.push(n);
    }
    return resultArray;
  }
}



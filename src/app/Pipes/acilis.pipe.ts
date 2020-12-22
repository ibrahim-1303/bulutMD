import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acilis'
})
export class AcilisPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {

    const acilisField = args[0];
    const acilisDirection = args[1];

    let multiplier = 1;
    if (acilisDirection==='desc') {

      multiplier= -1;
    }

    value.sort((a:any, b:any)=>{
      if(a[acilisField] <b[acilisField]){

        return -1 * multiplier;
      } else if (a[acilisField]> b[acilisField]){

        return 1 * multiplier;
      }
      else
       {
        return 0;
      }
    });

    return value;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, takeWhile} from 'rxjs/operators';
import { IProperty } from '../IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

constructor(private http:HttpClient) { }

getAllProperties():Observable<IProperty[]>
{

  return this.http.get('data/properties.json').pipe(

    map(data=> {

      const propertiesArray: Array<IProperty>=[];

      for(const programType in data){

        if (data.hasOwnProperty(programType)) {

          propertiesArray.push(data[programType]);
        }


      }
      return propertiesArray;


    })
  );

}
}

import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent  {


  @Input() property:IProperty;



}

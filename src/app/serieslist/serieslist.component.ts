import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-serieslist',
  templateUrl: './serieslist.component.html',
  styleUrls: ['./serieslist.component.css']
})
export class SerieslistComponent implements OnInit {
  properties: Array<IProperty> ;


  Title:'';
  SearchTitle='';
  Valuelenght=18;

  programType= 'series';



  SortbyParam='releaseYear';
  SortDirection='asc';

  constructor(private filmservice:FilmService ) {



   }

  ngOnInit():void {

    this.filmservice.getAllProperties().subscribe(

      data=>{

        this.properties=data
        console.log(data);

      },
      error=> {
        console.log(error);
      }
    )



  }


  onTitleFilter(){
    this.SearchTitle = this.Title;
  }


  onSortDirection(){
    if (this.SortDirection==='asc') {

      this.SortDirection='desc';
    }
    else this.SortDirection='asc';
  }

}

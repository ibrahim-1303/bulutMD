import { Component, OnInit } from "@angular/core";
import { IProperty } from "../IProperty.interface";
import { FilmService } from "../services/film.service";



@Component({
  selector: 'app-filmslist',
  templateUrl: './filmslist.component.html',
  styleUrls: ['./filmslist.component.css'],
})
export class FilmslistComponent implements OnInit {
  properties: Array<IProperty> ;


  Title:'';
  SearchTitle='';
  Valuelenght=18;

  programType= 'movie';



  SortbyParam='releaseYear';
  SortDirection='asc';

  constructor(private filmservice:FilmService ) {
    // this.properties = Array(18)


  }

  ngOnInit(): void {





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

import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { FilmService } from '../services/film.service';




@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  properties: Array<IProperty> ;

  // Title: '';
  // SearchTitle='';

  // Program: '';
  // SearchProgram='';





  SortbyParam='releaseYear';
  SortDirection='asc';



  constructor(private filmservice:FilmService  ) {
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

  // onTitleFilter(){
  //   this.SearchTitle = this.Title;
  // }

  // onProgramFilter(){
  //   this.SearchProgram= this.Program;
  // }


  onSortDirection(){
    if (this.SortDirection==='desc') {

      this.SortDirection='asc';
    }
    else this.SortDirection='desc';
  }
}

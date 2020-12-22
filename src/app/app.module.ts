import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { FilmslistComponent } from './filmslist/filmslist.component';

import { FilmService } from './services/film.service';
import { KategoriComponent } from './kategori/kategori.component';
import { from } from 'rxjs';
import { FilterPipe } from './Pipes/filter.pipe';
import { AcilisPipe } from './Pipes/acilis.pipe';
import { ListePipe } from './Pipes/liste.pipe';
import { SerieslistComponent } from './serieslist/serieslist.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    NavbarComponent,
    FooterComponent,
    FilmslistComponent,
    KategoriComponent,
    FilterPipe,
    AcilisPipe,
    ListePipe,
    SerieslistComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
  ],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppModule {}

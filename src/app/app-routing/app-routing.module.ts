import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilmslistComponent } from '../filmslist/filmslist.component';
import { SerieslistComponent } from '../serieslist/serieslist.component';



const routes: Routes = [
  // { path: '', component: NavbarComponent },
  { path: 'filmlist', component: FilmslistComponent },
  { path: 'serieslist', component:SerieslistComponent },
  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




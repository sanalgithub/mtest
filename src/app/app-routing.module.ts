import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerComponent } from './marker/marker.component';
import { SigninComponent } from './signin/signin.component';
import {PolygonComponent} from './polygon/polygon.component'




const routes: Routes = [
  {path:'', component:SigninComponent},
  { path: 'marker', component: MarkerComponent },
  {path:'polygon',component:PolygonComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

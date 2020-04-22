import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkerComponent } from './marker/marker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NguiMapModule} from '@ngui/map';
import { PolygonComponent } from './polygon/polygon.component';
import { Polygon } from '@ngui/map';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MarkerComponent,
    PolygonComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NguiMapModule.forRoot
    ({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCaYaTxduouzzYjnxBoDhsUCAgi51vIczQ&libraries=visualization,places,drawing,geometry' })

   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

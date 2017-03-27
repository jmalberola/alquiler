import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { ListadoCochesComponent }  from './listado-coches.component';
import { FiltradoCoches }  from './filtrado-coches.pipe';
import { RatingComponent }  from './rating-star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,  ListadoCochesComponent, FiltradoCoches, RatingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

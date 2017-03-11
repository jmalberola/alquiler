import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { ListadoCochesComponent }  from './listado-coches.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  ListadoCochesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

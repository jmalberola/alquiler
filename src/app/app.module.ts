import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { ListadoCochesComponent }  from './listado-coches.component';
import { FiltradoCoches }  from './filtrado-coches.pipe';
import { RatingComponent }  from './rating-star.component';
import { QuienesSomos }  from './quienes_somos.component';
import { Detalle }  from './detalle.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
                  RouterModule.forRoot([
                    { path: 'listado', component: ListadoCochesComponent },
                    { path: 'listado/:id', component: Detalle },
                    { path: 'quienes_somos', component: QuienesSomos },
                    { path: '', redirectTo:'listado', pathMatch: 'full' },
                    { path: '**', component: ListadoCochesComponent }
                  ])
   ],
  declarations: [ AppComponent,  ListadoCochesComponent, FiltradoCoches, RatingComponent, QuienesSomos, Detalle],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

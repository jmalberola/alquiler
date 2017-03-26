import { Component } from '@angular/core';
import { CochesService } from './coches.service';

@Component({
  selector: 'app-coches',
  template:`
  <listado-coches></listado-coches>
  `,
  providers: [ CochesService ]
})

export class AppComponent  {
  name = 'Angular';
}

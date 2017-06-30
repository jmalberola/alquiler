import { Component } from '@angular/core';
import { CochesService } from './coches.service';

@Component({
  selector: 'app-coches',
  template:`
  <div>
  <nav class='navbar navbar-default'>
    <div class='container-fluid'>
      <ul class='nav navbar-nav'>
	       <li><a [routerLink]="['/listado']">Home</a></li>
	       <li><a [routerLink]="['/listado']">Listado de coches</a></li>
         <li><a [routerLink]="['/quienes_somos']">Quiénes somos</a></li>
      </ul>
    </div>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
</div>
  `,
  providers: [ CochesService ]
})

export class AppComponent  {
  name = 'Angular';
}

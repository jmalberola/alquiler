import { Component } from '@angular/core';

@Component({
  selector: 'listado-coches',
  templateUrl: 'app/listado-coches.component.html'
})

export class ListadoCochesComponent {

  titulo: string = "Listado de coches en alquiler";

  coches: any[] = [
  {
    "id": 1,
    "modelo": "Opel Corsa",
    "anyo": 2015,
    "km": 35000,
    "precio": 55,
  },
  {
    "id": 2,
    "modelo": "Fiat Panda",
    "anyo": 2014,
    "km": 12000,
    "precio": 30,
  },
  {
    "id": 3,
    "modelo": "Hyundai i30",
    "anyo": 2013,
    "km": 30000,
    "precio": 45,
  },
  {
    "id": 4,
    "modelo": "Citroen C3",
    "anyo": 2014,
    "km": 45000,
    "precio": 40,
  }
];

}

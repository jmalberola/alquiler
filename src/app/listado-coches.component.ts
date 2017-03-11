import { Component } from '@angular/core';

@Component({
  selector: 'listado-coches',
  templateUrl: 'app/listado-coches.component.html'
})

export class ListadoCochesComponent {

  titulo: string = "Listado de coches en alquiler";
  img_width: number = 100;
  coches: any[] = [
  {
    "id": 1,
    "imagen": "/app/images/opel.png",
    "modelo": "Opel Corsa",
    "anyo": 2015,
    "km": 35000,
    "precio": 55,
  },
  {
    "id": 2,
    "imagen": "/app/images/fiat.jpg",
    "modelo": "Fiat Panda",
    "anyo": 2014,
    "km": 12000,
    "precio": 30,
  },
  {
    "id": 3,
    "imagen": "/app/images/hyundai.jpg",
    "modelo": "Hyundai i30",
    "anyo": 2013,
    "km": 30000,
    "precio": 45,
  },
  {
    "id": 4,
    "imagen": "/app/images/citroen.jpg",
    "modelo": "Citroen C3",
    "anyo": 2014,
    "km": 45000,
    "precio": 40,
  }
];

}

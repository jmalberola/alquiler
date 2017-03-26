import { Injectable } from '@angular/core';
import { ICoche } from './coche';

@Injectable()

export class CochesService {

    getCoches(): ICoche[] {
      return [
      {
        "id": 1,
        "imagen": "app/images/opel.png",
        "modelo": "Opel Corsa",
        "anyo": 2015,
        "km": 35000,
        "precio": 55,
        "estrellas": 2.1,
      },
      {
        "id": 2,
        "imagen": "/app/images/fiat.jpg",
        "modelo": "Fiat Panda",
        "anyo": 2014,
        "km": 12000,
        "precio": 30,
        "estrellas": 3.5,
      },
      {
        "id": 3,
        "imagen": "/app/images/hyundai.jpg",
        "modelo": "Hyundai i30",
        "anyo": 2013,
        "km": 30000,
        "precio": 45,
        "estrellas": 4.2,
      },
      {
        "id": 4,
        "imagen": "/app/images/citroen.jpg",
        "modelo": "Citroen C3",
        "anyo": 2014,
        "km": 45000,
        "precio": 40,
        "estrellas": 3.8,
      }
    ];
    }

}

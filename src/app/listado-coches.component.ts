import { Component, OnInit } from '@angular/core';
import { ICoche } from './coche';
import { CochesService } from './coches.service';

@Component({
  selector: 'listado-coches',
  templateUrl: 'app/listado-coches.component.html'
})

export class ListadoCochesComponent implements OnInit {

  titulo: string = "Listado de coches en alquiler";
  mensaje: string = "";
  img_width: number = 100;
  mostrar_precio: boolean = true;
  filtro_modelo: string = "";
  coches: ICoche[];

constructor(private _cocheservice: CochesService){

}

mostrar_ocultar_Precio(): void{
  this.mostrar_precio = !this.mostrar_precio;
}

ngOnInit(): void{
	this._cocheservice.getCoches().subscribe(c => this.coches=c);
}

onRatingClickado(m: any){
  this.mensaje = "Recibido "+m.valor_rating;
}

}

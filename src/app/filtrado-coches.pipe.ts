import { PipeTransform, Pipe } from '@angular/core';
import { ICoche } from './coche';

@Pipe({
  name: 'filtro_coches'
})

export class FiltradoCoches implements PipeTransform {

  transform(value: ICoche[], modelo_filtrado: string) : ICoche[]{

    return value.filter((coche: ICoche) => coche.modelo.toLocaleLowerCase().indexOf(modelo_filtrado) !==-1);

  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Zapateria } from '../interfaces/modelos.interface';


@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( zapatos: Zapateria ): string {

    if( !zapatos.id && !zapatos.alt_img ) {
      return 'assets/no-image.jpg';
    } else if ( zapatos.alt_img ) {
      return zapatos.alt_img;
    } else {
      return `assets/fotos-calzado/${ zapatos.id }.jpg`;
    }


  }

}

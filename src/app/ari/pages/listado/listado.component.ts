import { Component, OnInit } from '@angular/core';
import { ZapatosService } from '../../services/zapatos.service';
import { Zapateria } from '../../interfaces/modelos.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent implements OnInit {
  zapatos: Zapateria[]= [];

  constructor( private zapatosService: ZapatosService) {}
  ngOnInit(): void{
    this.zapatosService.getModelos()
    .subscribe(zapato =>this.zapatos = zapato);
     
      }
     /* const sliderAri = document.querySelector('#myCarousel')

      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
      })*/
}

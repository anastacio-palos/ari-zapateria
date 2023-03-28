import { Component } from '@angular/core';
import { Zapateria } from '../../interfaces/modelos.interface';
import { ZapatosService } from '../../services/zapatos.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
  
})
export class BuscarComponent {
  termino: string  = '';
  zapatos: Zapateria[] = [];
  modeloSeleccionado: Zapateria | undefined;

  constructor( private zapatosService: ZapatosService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.zapatosService.getSugerencias( this.termino.trim() )
      .subscribe( zapatos => this.zapatos = zapatos );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.modeloSeleccionado = undefined;
      return;
    }

    const zapato: Zapateria = event.option.value;
    this.termino = zapato.marca;

    this.zapatosService.getModeloPorId( zapato.id! )
      .subscribe( zapato => this.modeloSeleccionado = zapato );
  }

}

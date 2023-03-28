import { Component, Input } from '@angular/core';
import { Zapateria } from '../../interfaces/modelos.interface';

@Component({
  selector: 'app-tarjeta-zapato',
  templateUrl: './tarjeta-zapato.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})

export class TarjetaZapatoComponent {
  @Input() zapateria!: Zapateria


}

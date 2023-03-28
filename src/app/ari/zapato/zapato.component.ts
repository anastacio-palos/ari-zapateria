import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Zapateria } from '../interfaces/modelos.interface';
import { ZapatosService } from '../services/zapatos.service';

@Component({
  selector: 'app-zapato',
  templateUrl: './zapato.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class ZapatoComponent implements OnInit {
  zapatos!: Zapateria
  constructor( private activateRouter: ActivatedRoute,
              private zapatosService: ZapatosService,
              private router: Router){}

  ngOnInit(): void {
      this.activateRouter.params
      .pipe(
        switchMap(({id})=> this.zapatosService.getModeloPorId(id))
      )
      .subscribe(zapatos =>this.zapatos = zapatos);
  }
  regresar() {
    this.router.navigate(['/ari/listado']);
  }

}

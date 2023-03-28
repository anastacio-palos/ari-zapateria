import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { Zapateria } from '../../interfaces/modelos.interface';
import { ZapatosService } from '../../services/zapatos.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
  
})
export class AgregarComponent implements OnInit {
/*
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];*/

  zapatos: Zapateria = {
    marca: '',
    modelo: '',
    descripcion: '',
    color: '',
    precio: '',
    alt_img: ''
  }

  constructor( private zapatosService: ZapatosService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.zapatosService.getModeloPorId( id ) )
      )
      .subscribe( zapatos => this.zapatos = zapatos );

  }

  guardar() {
    
    if( this.zapatos.marca.trim().length === 0  ) {
      return;
    }

    if ( this.zapatos.id ) {
      // Actualizar
      this.zapatosService.actualizarModelo( this.zapatos )
        .subscribe( zapatos => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.zapatosService.agregarModelo( this.zapatos )
        .subscribe( zapatos => {
          this.router.navigate(['/zapatos/editar', zapatos.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarModelo() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.zapatos
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.zapatosService.borrarModelo( this.zapatos.id! )
            .subscribe( resp => {
              this.router.navigate(['/zaptos']);
            });
        }
        
      }
    )



  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AriRoutingModule } from './ari-routing.module';
import { ZapatoComponent } from './zapato/zapato.component';
import { MaterialModule } from '../material/material.module';
import { TarjetaZapatoComponent } from './components/tarjeta-zapato/tarjeta-zapato.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ZapatoComponent,
    ListadoComponent,
    ImagenPipe,
    TarjetaZapatoComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    AriRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class AriModule { }

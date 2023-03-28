import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AriModule } from './ari.module';
import { HomeComponent } from './pages/home/home.component';
import { ZapatoComponent } from './zapato/zapato.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'listado', component: ListadoComponent},
      {path: 'agregar', component: AgregarComponent},
      {path: 'editar/:id', component: AgregarComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: ':id', component: ZapatoComponent},
      {path: '**', redirectTo: 'listado'}
    ]
  }
  
];

@NgModule({
 
  imports: [
    RouterModule.forChild( rutas )
    
  ],
  exports: [
    RouterModule
  ]
})
export class AriRoutingModule { }

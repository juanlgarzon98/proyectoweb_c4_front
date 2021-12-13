import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesRoutingModule } from './ciudades-routing.module';
import { CrearCiudadComponent } from './crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './editar-ciudad/editar-ciudad.component';
import { BuscarCiudadComponent } from './buscar-ciudad/buscar-ciudad.component';
import { EliminarCiudadComponent } from './eliminar-ciudad/eliminar-ciudad.component';


@NgModule({
  declarations: [
    CrearCiudadComponent,
    EditarCiudadComponent,
    BuscarCiudadComponent,
    EliminarCiudadComponent
  ],
  imports: [
    CommonModule,
    CiudadesRoutingModule
  ]
})
export class CiudadesModule { }

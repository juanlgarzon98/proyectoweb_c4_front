import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    BuscarSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }

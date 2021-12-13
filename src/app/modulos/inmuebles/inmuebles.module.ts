import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { BuscarInmuebleComponent } from './buscar-inmueble/buscar-inmueble.component';
import { EditarInmuebleComponent } from './editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './eliminar-inmueble/eliminar-inmueble.component';


@NgModule({
  declarations: [
    CrearInmuebleComponent,
    BuscarInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent
  ],
  imports: [
    CommonModule,
    InmueblesRoutingModule
  ]
})
export class InmueblesModule { }

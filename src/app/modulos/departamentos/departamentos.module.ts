import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { CrearDepartamentoComponent } from './crear-departamento/crear-departamento.component';
import { BuscarDepartamentoComponent } from './buscar-departamento/buscar-departamento.component';
import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './eliminar-departamento/eliminar-departamento.component';


@NgModule({
  declarations: [
    CrearDepartamentoComponent,
    BuscarDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ]
})
export class DepartamentosModule { }

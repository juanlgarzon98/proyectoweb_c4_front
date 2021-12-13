import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarInmuebleComponent } from './buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './eliminar-inmueble/eliminar-inmueble.component';

const routes: Routes = [
  {
    path:"crear-inmueble",
    component: CrearInmuebleComponent
  },
  {
    path:"editar-inmueble",
    component: EditarInmuebleComponent
  },
  {
    path:"listar-inmuebles",
    component: BuscarInmuebleComponent
  },
  {
    path:"eliminar-inmueble",
    component: EliminarInmuebleComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path:"crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path:"editar-usuario/:id",
    component: EditarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"listar-usuarios",
    component: BuscarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"eliminar-usuario/:id",
    component: EliminarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"contacto",
    component: ContactoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

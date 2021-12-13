import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  { 
    path: 'inicio', component: InicioComponent
  },
  { 
    path: '', redirectTo: '/inicio', pathMatch: 'full' 
  },  
  {
    path:"seguridad",
    loadChildren:() => import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"inmuebles",
    loadChildren:() => import("./modulos/inmuebles/inmuebles.module").then(x=>x.InmueblesModule)
  },
  {
    path:"solicitudes",
    loadChildren:() => import("./modulos/solicitudes/solicitudes.module").then(x=>x.SolicitudesModule)
  }, 
  {
    path:"usuario",
    loadChildren:() => import("./modulos/usuario/usuario.module").then(x=>x.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

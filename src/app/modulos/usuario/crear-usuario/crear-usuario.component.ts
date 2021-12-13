import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar';
import { ModeloUsuarios } from 'src/app/modelos/usuarios';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  titulo:string="Registrarse como cliente";
  fgValidador: FormGroup=this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'contrasena':['',[Validators.required]],
    'rol':['',[Validators.required]],
    'telefono':['',[Validators.required]]
  });
  
  roles= [
    {nombre: 'administrador', valor: 'Administrador'},
    {nombre: 'asesor', valor: 'Asesor'},
    {nombre: 'cliente', valor: 'Cliente'}
  ];

  siteKey:string="6Ld-WZodAAAAANB8_OAS5WNUEHTknVbemJ5vkufo";
  seInicioSesion: boolean = false;
  subs: Subscription=new Subscription();
  constructor(private fb:FormBuilder,
    private servicioUsuario: UsuariosService,
    private router:Router,
    private seguridadServicio:SeguridadService
    ) { }

  ngOnInit(

  ): void {
    this.subs=this.seguridadServicio.ObtenerDatosUsuariosEnSesion().subscribe((datos:ModeloIdentificar) => {
    this.seInicioSesion=datos.estaIdentificado;
    if (this.seInicioSesion) {
      this.titulo="Registrar nuevo usuario";
    }else{
      this.fgValidador=this.fb.group({
        'nombres':['',[Validators.required]],
        'apellidos':['',[Validators.required]],
        'correo':['',[Validators.required,Validators.email]],
        'contrasena':['',[Validators.required]],
        'telefono':['',[Validators.required]],
        recaptcha: ['', Validators.required]
      });
    }
  });
}

  RegistrarUsuario(){
  let usuario=new ModeloUsuarios();
  let nombres=this.fgValidador.controls["nombres"].value; 
  let apellidos=this.fgValidador.controls["apellidos"].value;
  let correo=this.fgValidador.controls["correo"].value;
  let contrasena=this.fgValidador.controls["contrasena"].value;
  let telefono=this.fgValidador.controls["telefono"].value;
  usuario.nombres=nombres;
  usuario.apellidos=apellidos;
  usuario.email=correo;
  usuario.contrasena=contrasena;
  usuario.telefono=telefono;

  if (this.seInicioSesion) {
  let rol=this.fgValidador.controls["rol"].value;
  
  usuario.rol=rol;
    if(rol=="cliente"){
      usuario.confirmacion="si";
    }
  }else{
    usuario.rol="cliente";
    usuario.confirmacion="no";

  }

  this.servicioUsuario.CrearUsuario(usuario).subscribe((datos:ModeloUsuarios) =>{
  alert("Usuario registrado correctamente");
  this.router.navigate(['usuario/listar-usuarios']);
    },(error:any) =>{
      alert("Error registrando un usuario");
    }
    );
    }


}

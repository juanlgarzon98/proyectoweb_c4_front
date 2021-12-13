import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  roles= [
    {nombre: 'administrador', valor: 'Administrador'},
    {nombre: 'asesor', valor: 'Asesor'},
    {nombre: 'cliente', valor: 'Cliente'}
  ];

id: string='';
  fgValidador: FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'contrasena':['',[Validators.required]],
    'rol':['',[Validators.required]],
    'telefono':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private servicioUsuario: UsuariosService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.ConsultarUsuario();
  }

  ConsultarUsuario(){
    this.servicioUsuario.ConsultarUsuarioId(this.id).subscribe((datos:ModeloUsuarios) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["correo"].setValue(datos.email);
      this.fgValidador.controls["rol"].setValue(datos.rol);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);

      //this.router.navigate(['usuario/listar-usuarios']);
        },(error:any) =>{
        }
        );
  }

  EditarUsuario(){
    let nombres=this.fgValidador.controls["nombres"].value; 
    let apellidos=this.fgValidador.controls["apellidos"].value;
  let correo=this.fgValidador.controls["correo"].value;
  let contrasena=this.fgValidador.controls["contrasena"].value;
  let rol=this.fgValidador.controls["rol"].value;
  let telefono=this.fgValidador.controls["telefono"].value;
  let usuario=new ModeloUsuarios();
  usuario.nombres=nombres;
  usuario.apellidos=apellidos;
  usuario.email=correo;
  usuario.contrasena=contrasena;
  usuario.rol=rol;
  usuario.telefono=telefono;
  this.servicioUsuario.ActualizarUsuario(this.id,usuario).subscribe((datos:ModeloUsuarios) =>{
  alert("Usuario actualizado correctamente");
  this.router.navigate(['usuario/listar-usuarios']);
    },(error:any) =>{
      alert("Error registrando un usuario");
    });
    }

}

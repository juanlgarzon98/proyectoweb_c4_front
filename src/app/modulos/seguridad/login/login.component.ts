import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidador: FormGroup=this.fb.group({
    'correo':['',[Validators.required,Validators.email]],
    'contrasena':['',[Validators.required]],
    recaptcha: ['', Validators.required]
  });

  siteKey:string="6Ld-WZodAAAAANB8_OAS5WNUEHTknVbemJ5vkufo";
  
  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  IniciarSesion(){
    let correo=this.fgValidador.controls["correo"].value;
    let clave=this.fgValidador.controls["contrasena"].value;
     this.servicioSeguridad.Identificar(correo,clave).subscribe((datos:any) =>
    {
      alert("datos correctos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/usuario/listar-usuarios']);
    },
    (error:any)=>
    {alert("datos inválidos")}
    );
  }

}

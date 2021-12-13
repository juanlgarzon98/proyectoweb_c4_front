import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  fgValidador: FormGroup=this.fb.group({
    'correo':['',[Validators.required,Validators.email]],
    recaptcha: ['', Validators.required]
  });
  siteKey:string="6Ld-WZodAAAAANB8_OAS5WNUEHTknVbemJ5vkufo";
  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
    ) { }

  ngOnInit(): void {
  }

  Restaurarcontrasena(){
    let correo=this.fgValidador.controls["correo"].value;
    //alert(correo)
    this.servicioSeguridad.RestaurarPass(correo).subscribe(
      (response:any)=> { 
       alert("Contraseña restaurada");
      },(error:any)=> { 
        alert("Error al restaurar la contraseña");
       }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  fgValidador: FormGroup=this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'mensaje':['',[Validators.required]],
  })
  constructor(private fb: FormBuilder,
    private servicioContacto: ContactoService
    ) { 

  }

  ngOnInit(): void {
    
  }

EnviarCorreo(){
  let nombres=this.fgValidador.controls["nombres"].value+' '+this.fgValidador.controls["apellidos"].value;
  let email=this.fgValidador.controls["correo"].value;
  let mensaje=this.fgValidador.controls["mensaje"].value;
  this.servicioContacto.EnviarContacto(nombres,email,mensaje).subscribe(
    (response)=> {
     alert("correo enviado");
    }
  );
  
}

}

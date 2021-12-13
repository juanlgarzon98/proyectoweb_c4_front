import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {


  seInicioSesion: boolean = false;
  sesionRol: String="";
  
  subs: Subscription=new Subscription();
  constructor(private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.subs=this.seguridadServicio.ObtenerDatosUsuariosEnSesion().subscribe((datos:ModeloIdentificar) => {
    this.seInicioSesion=datos.estaIdentificado;
    if (this.seInicioSesion) {
        this.sesionRol=this.seguridadServicio.ObtenerRolSesion();
      }
    }
    
 );
  

}
}
